import React from 'react';
import TextField from 'material-ui/TextField';
import { green800, grey800 } from 'material-ui/styles/colors';

const InputEmail = ({ name, label, value, onChange }) => {
    const { floatingLabelFocusStyle, floatingLabelStyle, underlineStyle } = styles;

    return(
            <TextField
                name={name}
                type="email"
                value={value}
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
        color: green800,
    }
  };

export { InputEmail };