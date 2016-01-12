/**
 * Adapter para conexão com o banco de dados MySQL
 */
"use strict";

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    database: 'teste',
    user: 'root',
    password: '96342292'
});


conn.on('error', (err) => {
  console.error(err);  
});

module.exports = conn;