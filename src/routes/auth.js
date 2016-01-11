/**
 * Funções para autenticação.
 * A autenticação disponivel é baseada em JWT (Json Web Token)
 */

"use strict";

const router = require('express').Router();

const validacao = require('../modules/auth/validation.js');

router.post('/auth', validacao, (req, res) => {
    res.send('autenticação');
});

module.exports = router;