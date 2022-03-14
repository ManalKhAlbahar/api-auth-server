'use strict';

const {User} =require('../models/database');
const jwt =require('jsonwebtoken');

const SECRET = process.env.SECRET || "Manal Secret";


module.exports =async (req,res,next) =>{
    if (req.headers['authorization']) {
        let bearerHeaderParts= req.headers.authorization.split(' ');
        // console.log('bearerHeaderParts >>> ',bearerHeaderParts); // ['Bearer','token']
        let token = bearerHeaderParts.pop(); 
       console.log(token);
        try {
            const parsedToken =jwt.verify(token ,SECRET);
            console.log("parsedToken.email",parsedToken.email);
            
            let user = await User.findOne({where :{email: parsedToken.email}});
// console.log("ddddddddddddddd",user);
            if (user) {
                // res.status(200).json(user);
                console.log(user);
                req.user =user;
                next();
            }else{
                res.status(403).json('user invalid');
            }
            
        } catch (error) {
            res.status(403).send(`error from bearer ${error}`)
        }
    }
}

