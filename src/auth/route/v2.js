'use strict';

const express =require('express');
const models =require('../models/database.js');
const router =express.Router();
const bearerAuth = require('../middleware/bearerAuth');
const acl =require('../middleware/aclAuth');


router.param('model' ,  (req,res,next)=>{
    if(models[req.params.model]){
        console.log(models[req.params.model]);
        req.model =models[req.params.model];
        next();
    }else{
        next('invaled model');
    }
    
});


//Routes
router.get('/:model',bearerAuth,acl('read'),getModels);
router.get('/:model/:id',bearerAuth,acl('read'),getModelById);
router.post('/:model',bearerAuth,acl('create'),createModels);
router.put('/:model/:id',bearerAuth,acl('update'),updateModelById);
router.delete('/:model/:id',bearerAuth,acl('delete'),deleteModelById);


async function getModels(req,res) {
    let table = await req.model.getData();
    res.json(table);
}

async function getModelById(req,res) {
    let  {id}   =req.params;
    let oneRecordFormTable = await req.model.getData(id);
    res.json(oneRecordFormTable);
}

async function createModels(req,res) {
    let {body} =req;
    let newRecord = await req.model.createData(body);
    res.json(newRecord);
}

async function updateModelById(req,res) {
    let  {id}   =req.params;
    let {body} =req;
    let updateRecord = await req.model.updateData(id ,body);
    res.json(updateRecord);
}



async function deleteModelById(req,res) {
    let  {id}   =req.params;
    let deleteRecord = await req.model.deleteData(id);
    res.json(deleteRecord);
}



module.exports = router;


