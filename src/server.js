'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const errorHandler = require('./auth/error-handlers/500')
const notFound = require('./auth/error-handlers/400');
const router = require('./auth/route/router');
const v2 = require('./auth/route/v2');


app.use(cors());
app.use(express.json());
app.use(router);
app.use('/api/v2', v2);

app.get('/', (req, res) => {
    res.send('Home Route')
})

app.use(errorHandler);
app.use('*', notFound);

function start(port) {
    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    })
}



module.exports = {
    app: app,
    start: start
}