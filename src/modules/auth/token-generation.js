"use strict";

const jwt = require('jwt-simple');

const token = (req, res) => {
    if (req.app.locals.secret !== undefined && res.locals.id !== undefined) {
        let token = jwt.encode({id: res.locals.id}, req.app.locals.secret);
        res.status(200).json({token: token});
    } else {
        res.sendStatus(500);    
    }
};

module.exports = token;

