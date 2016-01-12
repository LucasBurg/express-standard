/**
 * Formatar e verificar request e response
 */

"use strict";

const negociacao = (req, res, next) => {
    res.set('Content-Type', 'application/json');
    if (req.get('Accept') !== 'application/json') {
        res.sendStatus(400);    
    } else {
        next();    
    }
};

module.exports = negociacao;