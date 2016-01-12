"use strict";

const jwt = require('jwt-simple');

const token = (req, res) => {
    let payload = {id: req.body[0].id};
    let secret = '$2a$10$97Aav59q5/2Oypwrh3ICW.YxYD0Cuf0xRa9d1p/FmHxseNtUL69XG';
    let token = jwt.encode(payload, secret);
    res.status(200).json({token: token});
};

module.exports = token;

