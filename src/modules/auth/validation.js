/**
 * Validação dos dados de entrada.
 */
"use strict";

const joi = require('joi');

const validation = (req, res, next) => {
    let schema = joi.object().keys({
        user: joi.string().email().required(),
        password: joi.string().min(6).max(25).required() 
    });
    
    joi.validate(req.body, schema, (err, value) => {
        if (err) {
            res.status(401).json(err);
        } else {
           next(); 
        }
    });
};


module.exports = validation;

