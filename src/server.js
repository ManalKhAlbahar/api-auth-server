'use strict';

const express =require('express');
const cors=require('cors');
const app =express();


app.use(cors());
app.use(express.json());



function start(port) {
    app.listen(port ,()=>{
        console.log(`server is running on port ${port}`);
    })
}



module.exports ={
    app:app,
    start:start
}