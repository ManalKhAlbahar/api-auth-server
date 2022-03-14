'use strict';
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { User } = require('../models/database')
const JWT = require('jsonwebtoken')
const SECRET = process.env.SECRET || "Manal Secret";

const basicAuth = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            console.log("Auth: " + req.headers.authorization)
            let basicHeeaderParts = req.headers.authorization.split(' ');
            let encoded = basicHeeaderParts.pop();
            let decoded = base64.decode(encoded);
            let [email, password] = decoded.split(':');

            const user = await User.findOne({ where: { email: email } });
            console.log(user);
            var validPass = await bcrypt.compare(password, user.password);
            console.log(validPass);
            if (validPass){
                console.log(validPass);
                //req.user = user
                let newToken = JWT.sign({ email: user.email }, SECRET);
                console.log(newToken);
                user.token = newToken;
                res.status(200).json(user);
                next();
            } else {
                res.status(403).send("invalid login Password");
            }
        }
    } catch (error) {
        res.status(403).send("invalid login email")
    }

}

module.exports = basicAuth;