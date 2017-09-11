import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { green800, grey800 } from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import reverse from 'reverse-geocode';
import getAge from 'get-age';
import axios from 'axios';

import { Button, InputEmail, InputPhone, RadioButtons, InputField } from './common';

import '../../style.scss'

class VolunteerForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            firstName: '',
            lastName: '',
            midInit: '',
            phone: '',
            email: '',
            age: null,
            emailError: false,
            district: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handlePhone = this.handlePhone.bind(this); 
        this.handleDOB = this.handleDOB.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.findDistrict = this.findDistrict.bind(this);
    }
    componentDidMount() {
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lng = position.coords.longitude

                let city = reverse.lookup(lat, lng).city

                this.setState({
                    lat: lat,
                    lng: lng,
                    location: reverse.lookup(lat, lng).city
                  }, () => {
                      console.log('Lat & Lng were set', this.state.lat, this.state.lng, this.state.location)
                    });
            });
        } else {
            console.log('nah sis')
        }
    }
    handleKeyPress(e) {
        if(e.key === 'Enter') {
            this.handleSubmit()
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let testEmail = this.state.email    
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        let lat = this.state.lat
        let lng = this.state.lng

        let that = this

        console.log('lat&lng:',lat,lng)

            if ( regex.test(testEmail) ) {
                this.setState({
                    email: testEmail
                  }, () => {
                      this.handleAge()
                    });
                console.log('email is correct')
            } else {
                this.setState({
                    email: '',
                    emailError: true
                })
            } 
            
            axios.get(`https://congress.api.sunlightfoundation.com/districts/locate?latitude=${lat}&longitude=${lng}`)
            .then(response => {
                let num = response.data.results[0].district
                let state = response.data.results[0].state
                let district = this.state.district
                console.log('Type Dist.:',typeof num, num)
                console.log('Type State:', typeof state, state)
                
                if(num === 13 && state === 'NY') {
                    that.setState({
                        district: true
                      }, () => {
                          console.log('district-01:', this.state.district)
                    });
                } else {
                    
                }
            })
            .then(( res) => {
                console.log('district-02:', this.state.district)
                
            })
            .then((res) => {
                console.log('State', this.state)
                this.findDistrict()
            })
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            }); 
    }
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value })
    }
    handlePhone(e) {
        this.setState({ phone: e.target.value})
        console.log('Phone:',this.state.phone.length)
    }
    handleDOB(event, date){
        if (date) {
            this.setState({ dob: date})  
        }
    }
    handleChangeDate(date) {
        this.setState({
          dueDate: date
        }, () => console.log(this.state.dueDate));
    }
    handleAge() {
        let birthday = this.state.dob
        let ageCalc = getAge(birthday)
            this.setState({
                age: ageCalc
              }, () => {
                  console.log('AGE:',this.state.age)
                });
    }
    findDistrict() {
        axios.post('/api/volunteers', {
            age: this.state.age,
            dob: this.state.dob,
            email: this.state.email,
            firstName: this.state.firstName,
            interests: this.state.interests,
            lastName: this.state.lastName,
            midInit: this.state.midInit,
            phone: this.state.phone,
            district: this.state.district,
            location: this.state.location
          })
          .then((response) => {
            console.log(response);
            this.setState({
                firstName: '',
                lastName: '',
                midInit: '',
                phone: '',
                email: '',
                age: null,
                dob: null,
                district: false,
                location: ''
            })
          })
          .catch((error) => {
            console.log(error);
          });
    }
    render() {
        return (
            <div>
                <h1 rel="preconnect" className="title">NY DISTRICT 13 VOLUNTEER INTEREST FORM</h1>
                <form onSubmit={this.handleSubmit} autoComplete="off" >
                    <label>
                        <p>WHAT DO YOU THINK IS THE MOST IMPORTANT
                        PROBLEM FACING THIS COUNTRY TODAY?</p>
                        <div>
                        <RadioButtonGroup name="interests" onChange={this.handleChange } >
                            <RadioButton value="jobsEconomy" label="Jobs and the Economy" />
                            <RadioButton value="immigrationReform" label="Immigration Reform" />
                            <RadioButton value="gunsViolence" label="Gun Violence Prevention" />
                            <RadioButton value="healthCare" label="Access to Health Care" />
                            <RadioButton value="climateChange" label="Climate Change" />
                            <RadioButton value="womensHealth" label="Womens Rights" />
                        </RadioButtonGroup>
                        </div>
                    </label>
                    <br />
                    <div>
                        <div>
                        <InputField name="firstName" label="First Name" value={this.state.firstName} onChange={this.handleChange} type="text" required="true" />
                        </div>
                        <div>
                        <InputField name="midInit" label="Initial" value={this.state.midInit} onChange={this.handleChange} type="text" max="1" />
                        </div>
                        <div>
                        <InputField name="lastName" label="Last Name" value={this.state.lastName} onChange={this.handleChange} type="text" required="true"/>
                        </div>
                    </div>
                    <br />
                    <div>
                    <DatePicker 
                        locale="en-US"
                        firstDayOfWeek={0}
                        value={this.state.dob}
                        onChange={this.handleDOB}
                        openToYearSelection={true}
                        hintStyle={{color: grey800}}
                        hintText="Enter Birthday"
                        underlineStyle={{borderColor: grey800}}
                        floatingLabelFocusStyle={{color: green800}}
                        underlineFocusStyle={{borderColor: green800}}
                        floatingLabelStyle={{pointerEvents: 'none'}} 
                    />
                    </div>
                    <InputPhone label="Telephone" value={this.state.phone} onChange={this.handlePhone} />
                    <InputEmail name="email" label="Email Address" value={this.state.email} onSubmit={this.handleSubmit} onChange={this.handleChange} />
                   
                    <br />
                    <div>
                        <Button type="submit" label="SUBMIT" bgColor="#1B5E20" textColor="#ffffff" onKeyPress={this.handleKeyPress} />
                    </div>
                </form>
            </div>
        );
    }
};



export default VolunteerForm;