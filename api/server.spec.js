const db = require('../data/dbConfig.js');
const supertest = require('supertest');
const server = require('./server');

describe('users table', () => {
    beforeEach(async () => {
        await db('games').truncate()
    });

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
      });

})

describe('server', () => {
    describe('GET /', () => {
        it('responds with 200 stat', () => {
            return supertest(server)
            .get('/')
            .expect(200);
        })
    })

    describe('GET /api/games', () => {
        it('responds with 200 stat', () =>{
            return supertest(server)
            .get('/api/games')
            .expect(200);
        });
        it('responds with json', () =>{
            return supertest(server)
            .get('/api/games')
            .expect('Content-Type', /json/i);
        })
        it('responds with an array', async () => {
            await supertest(server)
            .get('/api/games')
            .then( res => {
                expect(res.body).toBeInstanceOf(Array)
            })

        })
    })

    describe('POST /api/games', () =>{
        it('responds with 500 stat', () =>{
            return supertest(server)
            .post('/api/games')
            .send({ title: 'Zelda' })
            .set('Accept', 'application/json')
            .expect(422);
        })
        it('responds with 201 stat', () => {
            return supertest(server)
            .post('/api/games')
            .send({ title : 'Zelda' , genre: 'adventure' })
            .set('Accept', 'application/json')
            .expect(201);
        })
        it('responds with 500 without title', () =>{
            return supertest(server)
            .post('/api/games')
            .send({  genre: 'adventure' })
            .set('Accept', 'application/json')
            .expect(422);
        })
    })
})
