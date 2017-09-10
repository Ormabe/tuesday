import React from 'react';
import TextField from 'material-ui/TextField';
import { teal800, grey800 } from 'material-ui/styles/colors';

const InputField = ({ name, label, value, onChange, type, required }) => {
    const { floatingLabelFocusStyle, floatingLabelStyle, underlineStyle } = styles;

    return(
        <TextField
            name={name}
            type={type}
            value={value}
            required={required}
            onChange={onChange}
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
        color: teal800,
    }
  };

export { InputField };