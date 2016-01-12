/**
 * Resources para o usuário.
 */

"use strict";

const router = require('express').Router();
const token = require('../modules/auth/token-validation.js');

router.route('/usuario')
.all(token)
.get((req, res) => {
    res.send('usuario ok');
});

module.exports = router;
