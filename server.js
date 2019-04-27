const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//connect to database

const db_url = 'mongodb://user:user1234@ds147566.mlab.com:47566/user-tracker';
const offline_db_url = 'mongodb://localhost/user-tracker';

mongoose.connect(offline_db_url).then(
    ()=>{
        console.log('You are connected to data base');
    },
    err=>{
        console.log(err);
    }
);

//import routes
const routes = require('./server/routes/routes');


//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'dist/User-Tracker')));
app.use('', routes);


//server
const port = 4200;

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`);
});

