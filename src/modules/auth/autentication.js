/**
 * Verificar se o usuário e senha são validos
 */
"use strict";

const conn = require('../adapter/conn.js');
const bcrypt = require('bcryptjs');

const autentication = (req, res, next) => {
    let sql = "select id, senha from usuario where email = ?";
    conn.query(sql, [req.body.user],  (err, rows, fields) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);    
        } else if (rows[0] !== undefined && rows[0].id !== undefined && rows[0].senha !== undefined) {
            bcrypt.compare(req.body.password, rows[0].senha, (err, result) => {
                if (result) {
                    res.locals.id = rows[0].id;
                    next();
                } else {
                    res.sendStatus(401);
                }
            });
        } else {
            res.sendStatus(401);
        }
    });
};

module.exports = autentication;