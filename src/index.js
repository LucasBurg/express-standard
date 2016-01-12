/**
 * Boot da aplicação 
 */

"use strict";

const express = require('express');

const app = express();

const negociacao = require('./middleware/negociacao.js');
const middleware = require('./config/packages.js');
const auth = require('./routes/auth.js');

app.locals.secret = '$2a$10$97Aav59q5/2Oypwrh3ICW.YxYD0Cuf0xRa9d1p/FmHxseNtUL69XG';

app.use(negociacao);
app.use(middleware);
app.use(auth);

app.listen(3000, function() {
   console.log('The Standard Application is running!'); 
});
