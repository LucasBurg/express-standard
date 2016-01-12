/**
 * Verificar se o usuário e senha são validos
 */
"use strict";


const conn = require('../conn/conn.js');

const crypto = require("crypto-js");

const compare = (senhaInput, senhaHash, callback) => {
    let hashInput = crypto.SHA512(senhaInput).toString(crypto.enc.Hex);
    let status = (senhaHash === hashInput);
    let token = {token: hashInput};
    callback(token, status);
};

const autentication = (req, res, next) => {
    let sql = "select id, senha from usuario where email = ?";
    conn.query(sql, [req.body.user],  (err, rows, fields) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);    
        } else if (rows[0] !== undefined && rows[0].id !== undefined && rows[0].senha !== undefined) {
        
            compare(req.body.password, rows[0].senha, (token, status) => {
                
                console.log(status, token);
                
                if (status) {
                    res.send(token);
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