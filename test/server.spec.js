const expect = require('chai').expect
const should = require('chai').should
const jasmine = require('jasmine')
const request = require('supertest')
const app = require('../server/server.js')

describe('server tests', () => {
  it('should get /api/organizations', (done) => {
    request(app)
    .get('/api/organizations')
    .expect(200)
    done()
  })

  it('should post /api/organizations', (done) => {
    request(app)
    .post('/api/organizations')
    .expect(200)
    done()
  })

  it('should get /api/users', (done) => {
    request(app)
    .get('/api/users')
    .expect(200)
    done()
  })

  it('should post /api/users', (done) => {
    request(app)
    .post('/api/users')
    .expect(200)
    done()
  })
})

describe('undefined routes', function(){
  it('should post /api/users', (done) => {
    request(app)
    .post('/api/not-real')
    .expect(404)
    done()
  })
})
