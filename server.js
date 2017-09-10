const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./backend/routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './frontend/public')));

app.use('/api', routes)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/views/index.html'))
});

const port = +process.env.PORT || 2017;
app.set('port', port)


app.listen(port, () => console.log(`The server is listening on ${port}`));

module.export = app;


