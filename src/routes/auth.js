/**
 * Funções para autenticação.
 * A autenticação disponivel é baseada em JWT (Json Web Token)
 */

"use strict";

const router = require('express').Router();

router.post('/auth', function(req, res) {
    res.send('autenticação');
});

module.exports = router;