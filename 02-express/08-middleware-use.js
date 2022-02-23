const express = require('express');
const app = express();
const logger = require('./logger');
const auth = require('./auth');

app.use([logger, auth]);

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});