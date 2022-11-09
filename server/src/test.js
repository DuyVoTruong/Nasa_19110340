const app = require('./app');
const request = require('supertest');

describe('GET /launches', function(){
    it('return status 200 and json', function(done){
        request(app)
        .get('/launches')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('POST /launches', function(){
    it('return status 400 if Missing required launch property', function(done){
        request(app)
        .post('/launches')
        .set('Accept', 'application/json')
        .send({
            
            "rocket": "ZTM Experimental IS1",
            "target": "Kepler-186 f",
            "launchDate": "July 1, 2028"
        })
        .expect('Content-Type', /json/)
        .expect(400, {error: 'Missing required launch property',}, done);
    });
});

describe('POST /launches', function(){
    it('return status 400 if Missing required launch property', function(done){
        request(app)
        .post('/launches')
        .set('Accept', 'application/json')
        .send({
            "mission": "ZTM155",
            
            "target": "Kepler-186 f",
            "launchDate": "July 1, 2028"
        })
        .expect('Content-Type', /json/)
        .expect(400, {error: 'Missing required launch property',}, done);
    });
});

describe('POST /launches', function(){
    it('return status 400 if Missing required launch property', function(done){
        request(app)
        .post('/launches')
        .set('Accept', 'application/json')
        .send({
            "mission": "ZTM155",
            "rocket": "ZTM Experimental IS1",
            
            "launchDate": "July 1, 2028"
        })
        .expect('Content-Type', /json/)
        .expect(400, {error: 'Missing required launch property',}, done);
    });
});

describe('POST /launches', function(){
    it('return status 400 if Missing required launch property', function(done){
        request(app)
        .post('/launches')
        .set('Accept', 'application/json')
        .send({
            "mission": "ZTM155",
            "rocket": "ZTM Experimental IS1",
            "target": "Kepler-186 f",
            
        })
        .expect('Content-Type', /json/)
        .expect(400, {error: 'Missing required launch property',}, done);
    });
});

describe('POST /launches', function(){
    it('return status 400 if Invalid launch date', function(done){
        request(app)
        .post('/launches')
        .set('Accept', 'application/json')
        .send({
            "mission": "ZTM155",
            "rocket": "ZTM Experimental IS1",
            "target": "Kepler-186 f",
            "launchDate": "Hello"
        })
        .expect('Content-Type', /json/)
        .expect(400, {error: 'Invalid launch date',}, done);
    });
});

describe('POST /launches', function(){
    it('return status 201 if launch pass', function(done){
        request(app)
        .post('/launches')
        .set('Accept', 'application/json')
        .send({
            "mission": "ZTM155",
            "rocket": "ZTM Experimental IS1",
            "target": "Kepler-186 f",
            "launchDate": "July 1, 2028"
        })
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});

describe('DELETE /launches', function(){
    it('return status 404 if Launch not found', function(done){
        request(app)
        .delete('/launches/10000')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, {error: 'Launch not found',}, done);
    });
});

describe('DELETE /launches', function(){
    it('return status 200 if Launch found', function(done){
        request(app)
        .delete('/launches/100')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {flightNumber: 100,
            mission: 'Kepler Exploration X',
            rocket: 'Explorer IS1',
            launchDate: (new Date('December 27, 2030')).toJSON(),
            target: 'Kepler-442 b',
            customer: ['ZTM', 'NASA'],
            upcoming: false,
            success: false,
        }, done);
    });
});

describe('GET /planets', function(){
    it('return status 200 and json', function(done){
        request(app)
        .get('/planets')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('GET /*', function(){
    it('return page html', function(done){
        request(app)
        .get('/*')
        .set('Accept', 'application/json')
        .expect('Content-Type', /html/, done)
    });
});