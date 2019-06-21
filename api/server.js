const express = require('express');

const server = express();
server.use(express.json())

server.get('/', (req, res) =>{
    res.status(200).json({api: 'IT IS RUNNING'})
})


module.exports = server;