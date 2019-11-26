//importing dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

//to use Express method and assign it to some variables
var app = express();
const route = require('./routes/route');

//port no
const port = 3000;

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');
//on mongodb COnnection
mongoose.connection.on('connected', () => {
    console.log('connected to database mongoDB @ 27017');
})
//on database connection error
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('error in database connection:' + err);
    }
})

//adding middleware - cors
//body - parser
app.use(cors());
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//define route so that we can make call to it and we can perform our data operation
app.use('/api', route);

//testing server or creating routes
app.get('/', (req, res) => {
    res.send('foobar');
})



//bind server with above mentioned port
app.listen(port, () => {
    console.log('Server started at port: ' + port)
})