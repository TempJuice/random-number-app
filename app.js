//Designate the module/package/file that we're utilizing in this file 
var express = require('express');

//Creation of our server side application. Determines all req/res responses.
var app = express();

//The port that we're using
var port = 5000;

//express.static needs to know the FOLDER that holds out static files
app.use(express.static('public'));

//We need to setup the server to listen for requests
app.listen(port, function () {
    console.log('Listening on port', port);   
});

app.get('/random', function (req, res) {
    res.send('random ' + Math.floor(Math.random() * (1 + max - min) + min));
});