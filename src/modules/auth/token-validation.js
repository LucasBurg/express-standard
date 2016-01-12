"use strict";

const jwt = require('jwt-simple');

const token = (req, res) => {
    let payload = {id: res.locals.id};
    
    let token = jwt.encode(payload, secret);
    res.status(200).json({token: token});
};

module.exports = token;