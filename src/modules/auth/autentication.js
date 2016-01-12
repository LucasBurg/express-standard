/**
 * Verificar se o usuário e senha são validos
 */
"use strict";


const adapter = require('../adapter/adapter.js');

const cryptojs = require("crypto-js");

const autentication = (req, res, next) => {

    let sql = "select id, senha from usuario where email = ?";
    
    adapter.query(sql, [req.body.user],  (err, rows, fields) => {
    
        if (err) {
            res.status(401).json(err);    
        } else if (rows) {
            
            
            if (rows[0].id && rows[0].senha) {
                
                let senhaHash = rows[0].senha;
                
                let senhaInput = req.body.password;
                
                let hash = cryptojs.SHA512(senhaInput).toString(cryptojs.enc.Hex);
                
                if (senhaHash === hash) {
                    res.send(hash);    
                } else {
                    res.status(401).end();
                }
            } else {
                res.status(404).end();
            }
        } else {
            res.status(404).end();
        }
    });
};

module.exports = autentication;