/**
 * @author Lucas Burg 
 */

"use strict";

const express = require('express');
const mysql = require('mysql');

const jwt = require('jwt-simple'); 
const app = express();

const middleware = require('./config/middleware.js');

app.use(middleware);

app.get('/', function(req, res) {
    res.send('hello');
});

app.post('/usuario', function(req, res) {
   
   console.log(req.body);
   
   res.send('ok'); 
});

app.listen(3000, function() {
   console.log('The Standard Application is running!'); 
});
