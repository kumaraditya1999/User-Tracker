const express = require('express');
const path = require('path');

const app = express();

//import routes
const routes = require('./server/routes/routes');


//middlewares
app.use(express.static(path.join(__dirname,'dist/User-Tracker')));
app.use('', routes);


//server
const port = 4200;

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`);
});