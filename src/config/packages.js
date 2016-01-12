/**
 * Middleware's de configuração dos packages
 */

"use strict";

const router = require('express').Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

module.exports = router;