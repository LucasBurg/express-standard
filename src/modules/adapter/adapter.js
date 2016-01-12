/**
 * Adapter para conexão com o banco de dados MySQL
 */
"use strict";

const mysql = require('mysql');

const adapter = mysql.createConnection({
    host: 'localhost',
    database: 'atleta',
    user: 'root',
    password: '96342292'
});


module.exports = adapter;