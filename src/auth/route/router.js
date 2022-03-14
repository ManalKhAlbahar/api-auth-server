'use strict'
const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const {User} = require('../models/database')
const basicAuth =require('../middleware/basicAuth');
const bearerAuth=require('../middleware/bearerAuth');
const acl = require('../middleware/aclAuth');



router.post('/signup', async (req, res, next) => {
    let { email, password,role } = req.body;
    console.log(email + " ,,, " + password)
    try {
        let hashedPassword = await bcrypt.hash(password, 5);
        console.log('after hashing >>> ', hashedPassword)
        const newUser = await User.create({
            email: email,
            password: hashedPassword,
            role :role
        })
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
    }
});

router.post('/signin',basicAuth , (req, res) => {
    //console.log("hello");
     ;
    console.log();
    res.status(200).send(req.user);
});


router.get('/users',bearerAuth,acl('delete') ,async(req,res)=>{
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
});

router.delete('/users/:id',bearerAuth,acl('delete') ,async(req,res)=>{
    const allUsers = await User.destroy({where:{id:req.params.id}});
    res.status(200).json(allUsers);
});









module.exports=router;
