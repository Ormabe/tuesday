import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import { teal800, grey800 } from 'material-ui/styles/colors';


const InputDate = ({ value, onChange }) => (
    
        <DatePicker
            name="dob"
            autoOk={false}
            locale="en-US"
            value={value}
            firstDayOfWeek={0}
            openToYearSelection={true}
            floatingLabelText="Enter Birthday"
            floatingLabelStyle={{pointerEvents: 'none'}} 
            onChange={onChange}
        />
    );



export { InputDate };
