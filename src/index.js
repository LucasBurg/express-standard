/**
 * Boot da aplicação 
 */

"use strict";

const express = require('express');

const app = express();



const middleware = require('./config/middleware.js');
const auth = require('./routes/auth.js');

app.use(middleware);
app.use(auth);

app.listen(3000, function() {
   console.log('The Standard Application is running!'); 
});
