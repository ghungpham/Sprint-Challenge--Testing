const express = require('express');
const db = require('./games-model.js')
const server = express();
server.use(express.json())

server.get('/', (req, res) =>{
    res.status(200).json({api: 'IT IS RUNNING'})
})

server.post('/api/games', (req, res) => {
    const { title , genre, releaseYear } = req.body;
    if ( !title || !genre ){
        return res.status(422).json({message: 'incomplete'})
    }

    db
    .addGame({ title, genre, releaseYear })
    .then(games => {
        return res.status(201).json(games)
        })
    .catch(err => {
        res.status(500).json({
            message: 'Process cannot be done'
        })
    })

})

server.get('/api/games', (req, res) => {
    db
    .getAll()
    .then(games => {
        res.status(200).json(games)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Process cannot be done'
        })
    })
})

module.exports = server;