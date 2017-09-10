import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import getAge from 'get-age'

import { Button, InputEmail, InputPhone, RadioButtons } from './common';

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
            emailError: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handlePhone = this.handlePhone.bind(this); 
        this.handleDOB = this.handleDOB.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleAge = this.handleAge.bind(this)
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
        
            if ( regex.test(testEmail) ) {
                this.setState({ emailError: false })
                console.log('email is correct')

            } else {

                this.setState({
                    email: '',
                    emailError: true
                })
            }
            this.handleAge()
            
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
        }, () => console.log(this.state.dueDate)); // This will show the updated state when state is set.
      }
    handleAge() {
        let birthday = this.state.dob
        let ageCalc = getAge(birthday)
            this.setState({
                age: ageCalc
              }, () => console.log('AGE:',this.state.age,'state:',this.state));
    }

    handleReset(e) {
        e.preventDefault()
        this.state = {
            firstName: '',
            lastName: '',
            midInit: '',
            phone: '',
            email: '',
            age: null,
            emailError: false
        };
        console.log('Reset:',this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} autoComplete="off" >
                    <label>

                    What Do You Think Is the Most Important
Problem Facing This Country Today?
                        <br />
                        <div>
                        <RadioButtonGroup name="interests" onChange={this.handleChange} >
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

                    <DatePicker 
                        locale="en-US"
                        firstDayOfWeek={0}
                        value={this.state.dob}
                        onChange={this.handleDOB}
                        openToYearSelection={true}
                        floatingLabelText="Enter Birthday"
                        floatingLabelStyle={{pointerEvents: 'none'}} 
                    />
                    <InputPhone label="Telephone" value={this.state.phone} onChange={this.handlePhone} />
                    <InputEmail name="email" label="Email Address" value={this.state.email} onSubmit={this.handleSubmit} onChange={this.handleChange} />
                   
                    <br />
                    <div>
                        <Button type="submit" label="SUBMIT" bgColor="#00695C" textColor="#ffffff" onKeyPress={this.handleKeyPress} />
                        <span>  </span>
                        <Button type="reset" label="RESET" bgColor="#EF6C00" textColor="#ffffff" onClick={this.handleReset} />
                    </div>
                </form>
            </div>
        );
    }
};



export default VolunteerForm;