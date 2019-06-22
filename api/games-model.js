const db = require('../data/dbConfig');

module.exports = {
    getAll,
    addGame
}

function getAll() {
     return db('games')
}

function addGame(games) {
    return db('games')
    .insert(games, 'id')
    .then(ids =>{
        return db('games')
        .where({ id: ids[0] })
        .first()
    })
}