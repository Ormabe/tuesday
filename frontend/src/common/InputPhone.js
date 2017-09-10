import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import { teal800, grey800 } from 'material-ui/styles/colors';
import InputMask from 'react-input-mask';

class InputPhone extends Component {

    render(){
        const { floatingLabelFocusStyle, floatingLabelStyle, underlineStyle } = styles;
        const { onChange,required, value, label } = this.props;

        return(
            <div>
            <TextField
                name="phone"
                value={value} 
                onChange={onChange}            
                required={required}
                floatingLabelText={label}
                underlineStyle={underlineStyle}
                floatingLabelStyle={floatingLabelStyle}
                floatingLabelFocusStyle={floatingLabelFocusStyle}
            >
                <InputMask  {...this.props} mask="(999) 999-9999" maskChar=" " />
            </TextField>
            </div>
        );
    }
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

export { InputPhone };