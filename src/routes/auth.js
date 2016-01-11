/**
 * Funções para autenticação.
 * A autenticação disponivel é baseada em JWT (Json Web Token)
 */

"use strict";

const router = require('express').Router();


const validacao = (req, res, next) => {
    
};

router.post('/auth', validacao, (req, res) => {
    res.send('autenticação');
});

module.exports = router;