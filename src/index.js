/**
 * Boot da aplicação 
 */

"use strict";

const express = require('express');

const app = express();



const negociacao = require('./middleware/negociacao.js');
const middleware = require('./config/middleware.js');
const auth = require('./routes/auth.js');

app.use(negociacao);
app.use(middleware);
app.use(auth);

app.listen(3000, function() {
   console.log('The Standard Application is running!'); 
});
