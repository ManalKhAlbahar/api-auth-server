'use strict';

const express =require('express');
const cors=require('cors');
const app =express();
const router =require('./auth/route/router');
const v2 =require('./auth/route/v2');


app.use(cors());
app.use(express.json());
app.use(router);
app.use('/api/v2' ,v2);


function start(port) {
    app.listen(port ,()=>{
        console.log(`server is running on port ${port}`);
    })
}



module.exports ={
    app:app,
    start:start
}