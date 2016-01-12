/**
 * @author Lucas Burg 
 */

"use strict";

const express = require('express');


const jwt = require('jwt-simple'); 
const app = express();



const middleware = require('./config/middleware.js');
const auth = require('./routes/auth.js');

app.use(middleware);
app.use(auth);

app.get('/', function(req, res) {
    res.send('hello');
});

app.listen(3000, function() {
   console.log('The Standard Application is running!'); 
});
