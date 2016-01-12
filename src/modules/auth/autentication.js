/**
 * Verificar se o usuário e senha são validos
 */
"use strict";


const adapter = require('../adapter/adapter.js');

const bcrypt = require('bcrypt-nodejs');

const autentication = (req, res, next) => {

    let sql = "select id, senha from usuario where email = ?";
    
    //adapter.connect();
    
    adapter.query(sql, [req.body.user],  (err, rows, fields) => {
    
        if (err) {
            res.status(401).json(err);    
        } else if (rows) {
            
            
            if (rows[0].id && rows[0].senha) {
                
                let senha = rows[0].senha;
            
                console.log(req.body.password);
            
                bcrypt.compare(req.body.password, senha, (err, result) => {
                   
                    console.log(err);
                   
                    res.send(result);   
                });
                
                
                
            } else {
                res.status(404).end();
            }
            
            
            
            
            //res.status(200).json(rows);
        } else {
            res.status(404).end();
        }
    
    });
    
    
};

module.exports = autentication;