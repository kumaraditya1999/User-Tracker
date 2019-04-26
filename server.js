const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

//connect to database

const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: 100, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
mongoose.connect('mongodb://127.0.0.1:27017/user-tracker', options).then(
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
app.use(express.static(path.join(__dirname,'dist/User-Tracker')));
app.use('', routes);


app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})


//server
const port = 4200;

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`);
});