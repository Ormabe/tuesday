import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Card, CardHeader } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { green600, green800, orange800, grey800 } from 'material-ui/styles/colors';
import VolunteerForm from './frontend/src/volunteerForm';

import Image from './frontend/src/Image'
import './favicon.ico';

const muiTheme=getMuiTheme({
    palette: {
        primary1Color: green600,
        primary2Color: green800,
        accent1Color: orange800,
        pickerHeaderColor: green800
    }
});

injectTapEventPlugin()

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Card style={styles}>
            <CardHeader>
                <Image />
                <div rel="preconnect" className="karenFont">Karen Smith-Smyth cares about Highland Park</div>
            </CardHeader>
            <VolunteerForm />
        </Card>
    </MuiThemeProvider>
);

const styles = {
    textAlign: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

ReactDOM.render(<App />, document.getElementById('root'));