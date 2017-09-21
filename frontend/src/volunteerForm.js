import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { CardActions, CardText } from 'material-ui/Card';
import { green800, grey800 } from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import reverse from 'reverse-geocode';
import getAge from 'get-age';
import axios from 'axios';

import { Button, InputEmail, InputPhone, InputField } from './common';

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
            valueSelected: '',
            age: null,
            emailError: false,
            district: false,
            open: false,
            errorText: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handlePhone = this.handlePhone.bind(this); 
        this.handleDOB = this.handleDOB.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.findDistrict = this.findDistrict.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentDidMount() {
        if(navigator.geolocation){
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
                    emailError: true,
                    emailErrorText: 'Please enter a valid email format'
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
                interests: '',
                age: null,
                dob: null,
                district: false,
                location: '',
                emailError: false,
                emailErrorText: ''

            })
          })
          .then(() => {
            this.handleOpen()
          })
          .catch((error) => {
            console.log(error);
          });
    }
    handleOpen() {
        this.setState({ open: true })
    }
    handleClose() {
        this.setState({ open: false })
    }
    render() {
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleClose}
            />
        ];
        const district = this.state.district;
        return (
            <CardText>
                <h1 rel="preconnect" className="title">MI-DISTRICT 13 VOLUNTEER INTEREST FORM</h1>
                <form id="userForm" onSubmit={this.handleSubmit} autoComplete="off" >
                    <label>
                        <p>WHAT DO YOU THINK IS THE MOST IMPORTANT
                        PROBLEM FACING THIS HIGHLAND PARK TODAY?</p>
                        <div>
                        <RadioButtonGroup id="radioGroup" name="interests" onChange={this.handleChange } style={styles} valueSelected={this.state.interests} >
                            <RadioButton className="radioButton" value="jobsEconomy" label="Jobs and the Economy" />
                            <RadioButton className="radioButton" value="immigrationReform" label="Immigration Reform" />
                            <RadioButton className="radioButton" value="gunsViolence" label="Gun Violence Prevention" />
                            <RadioButton className="radioButton" value="healthCare" label="Access to Health Care" />
                            <RadioButton className="radioButton" value="climateChange" label="Climate Change" />
                            <RadioButton className="radioButton" value="womensHealth" label="Womens Rights" />
                        </RadioButtonGroup>
                        </div>
                    </label>
                    <br />
                    <div>
                        <div>
                        <InputField name="firstName" label="First Name" value={this.state.firstName} onChange={this.handleChange} type="text" required="true" />
                        </div>
                        <div>
                        <InputField name="midInit" label="Initial" value={this.state.midInit} onChange={this.handleChange} type="text" max="1" style={{width: 20}} />
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
                    <InputEmail name="email" label="Email Address" value={this.state.email} onSubmit={this.handleSubmit} onChange={this.handleChange} errorText={this.state.emailErrorText} />
                   
                    <br />
                    <div>
                        <Button type="submit" label="SUBMIT" bgColor="#1B5E20" textColor="#ffffff" onKeyPress={this.handleKeyPress} />
                    </div>
                </form>
                { district ?
                    <Dialog
                        title="Inside District"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        >
                        Woohoo! You are (or your computer is) located within District 13. Not only can you volunteer, you can vote for Karen too!
                    </Dialog>
                    :
                    <Dialog
                        title="Outside District"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        >
                        While you can't vote for Karen, we would love it if you helped her win.
                    </Dialog>
                }

            </CardText>
        );
    }
};

const styles = {
    width: '25%',
    labelPosition: 'left',
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto'
}

export default VolunteerForm;