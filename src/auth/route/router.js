'use strict'
const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const {User} = require('../models/database')
const basicAuth =require('../middleware/basicAuth')



router.post('/signup', async (req, res, next) => {
    let { email, password } = req.body;
    console.log(email + " ,,, " + password)
    try {
        let hashedPassword = await bcrypt.hash(password, 5);
        console.log('after hashing >>> ', hashedPassword)
        const newUser = await User.create({
            email: email,
            password: hashedPassword
        })
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
    }
});

router.post('/signin',basicAuth ,(req, res) => {
    //console.log("hello");
    //let {user}=req.user;
    //res.status(200).send(user);
});

router.get('/users', async(req,res)=>{
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
})



module.exports=router;
