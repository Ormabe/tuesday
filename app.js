import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green600, green800, orange800, grey800} from 'material-ui/styles/colors';
import VolunteerForm from './frontend/src/volunteerForm';

import Image from './frontend/src/Image'
import './favicon.ico';

const muiTheme=getMuiTheme({
    palette: {
        primary1Color: green600,
        primary2Color: green800,
        accent1Color: orange800,
        pickerHeaderColor: green600
    }
});

injectTapEventPlugin()

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            <Image />
            <VolunteerForm />
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));