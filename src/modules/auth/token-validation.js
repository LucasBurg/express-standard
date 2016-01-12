"use strict";

const jwt = require('jwt-simple');

const token = (req, res, next) => {
    let tokenInput = req.get('Token');
    if (tokenInput === undefined) {
        res.sendStatus(401);
    } else {
        try {
            let payload = jwt.decode(tokenInput, req.app.locals.secret);
            res.locals = payload;
            next();
        } catch (error) {
            console.error(error);
            res.sendStatus(401);
        }
   }
};

module.exports = token;