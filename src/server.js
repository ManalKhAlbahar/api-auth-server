'use strict';

const express =require('express');
const cors=require('cors');
const app =express();
const router =require('./auth/route/router')


app.use(cors());
app.use(express.json());
app.use(router)


function start(port) {
    app.listen(port ,()=>{
        console.log(`server is running on port ${port}`);
    })
}



module.exports ={
    app:app,
    start:start
}