/**
 * @author Lucas Burg 
 */

"use strict";

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jwt = require('jwt-simple'); 
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(3000, function() {
   console.log('The Standard Application is running!'); 
});
