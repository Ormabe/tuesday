import React from 'react';
import {RadioButton} from 'material-ui/RadioButton';

const RadioButtons = ({ value, label }) => {
    return (
        <div className="radioButton">
            <RadioButton
                value={value}
                label={label}
                style={styles}
            />
        </div>
    );
};

const styles = {
    marginBottom: 16
};

export { RadioButtons };