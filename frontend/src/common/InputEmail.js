import React from 'react';
import TextField from 'material-ui/TextField';
import { green800, grey800, orange800 } from 'material-ui/styles/colors';

const InputEmail = ({ name, label, value, onChange, errorText }) => {
    const { floatingLabelFocusStyle, floatingLabelStyle, underlineStyle, errorStyle } = styles;

    return(
            <TextField
                name={name}
                type="email"
                value={value}
                onChange={onChange}
                errorText={errorText}
                errorStyle={errorStyle}
                floatingLabelText={label}
                underlineStyle={underlineStyle}
                floatingLabelStyle={floatingLabelStyle}
                floatingLabelFocusStyle={floatingLabelFocusStyle}
            />
    );
};

const styles = {
    underlineStyle: {
        borderColor: grey800,
    },
    floatingLabelStyle: {
        color: grey800,
    },
    floatingLabelFocusStyle: {
        color: green800,
    },
    errorStyle: {
        color: orange800
    }
  };

export { InputEmail };