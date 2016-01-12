/**
 * Resources para o usuário.
 */

"use strict";

const router = require('express').Router();
const tokenValidation = require('../modules/auth/token-validation.js');

router.route('/usuario')
.all(tokenValidation)
.get((req, res) => {
    res.send('usuario ok');
});

module.exports = router;
