/**
 * Funções para autenticação.
 * A autenticação disponivel é baseada em JWT (Json Web Token)
 */

"use strict";

const router = require('express').Router();

const validacao = require('../modules/auth/validation.js');

const autenticacao = require('../modules/auth/autentication.js');

router.post('/auth', validacao, autenticacao);

module.exports = router;