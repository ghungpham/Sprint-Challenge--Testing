const express = require('express');
const db = require('./games-model.js')
const server = express();
server.use(express.json())

server.get('/', (req, res) =>{
    res.status(200).json({api: 'IT IS RUNNING'})
})


module.exports = server;