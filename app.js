import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {teal600, teal800, orange800, grey800} from 'material-ui/styles/colors';

import VolunteerForm from './frontend/src/volunteerForm';

import './favicon.ico';

const muiTheme=getMuiTheme({
    palette: {
        primary1Color: teal600,
        primary2Color: teal800,
        accent1Color: orange800,
        pickerHeaderColor: teal600
    }
});

injectTapEventPlugin()

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <VolunteerForm />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));