import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions } from 'material-ui/Card';

const Button = ({ label, textColor, bgColor, type }) => {
    return (

        <RaisedButton
            type={type}
            label={label}
            style={styles}
            labelColor={textColor}
            backgroundColor={bgColor}
        />
    );
};

const styles = {
    textAlign: "center",
    fontSize: 18,
    width: 100,
    marginBottom: 6,
    lineHeight: '18px',
    verticalAlign: 'middle'
  };

export { Button };