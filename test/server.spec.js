const expect = require('chai').expect
const should = require('chai').should
const request = require('supertest')
const app = require('../server/server.js')

describe('server tests', () => {
  it('should get /api/organizations', (done) => {
    request(app)
    .get('/api/organizations')
    .expect(200)
    done()
  })

  it('should get /api/org_check/:name', (done) => {
    request(app)
    .get('/api/org_check/habitatforhumanity')
    .expect(200)
    done()
  })

  it('should post /api/organizations', (done) => {
    request(app)
    .post('/api/organizations')
    .expect(200)
    done()
  })

  it('should post /api/organizations/:admin_id', (done) => {
    request(app)
    .post('/api/organizations/1')
    .expect(200)
    done()
  })

  it('should get /api/user/:email/:org_name', (done) => {
    request(app)
    .get('/api/user/hilarylewis92@gmail.com/habitatforhumanity')
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

  it('should get /api/events/:organization_id', (done) => {
    request(app)
    .get('/api/events/1')
    .expect(200)
    done()
  })

  it('should post /api/events/:organization_id', (done) => {
    request(app)
    .post('/api/events/1')
    .expect(200)
    done()
  })

  it('should put /api/events/:organization_id', (done) => {
    request(app)
    .put('/api/events/1')
    .expect(200)
    done()
  })

  it('should delete /api/events/:organization_id/:id', (done) => {
    request(app)
    .delete('/api/events/1/1')
    .expect(200)
    done()
  })

  it('should get /api/roles/:event_id', (done) => {
    request(app)
    .get('/api/roles/1')
    .expect(200)
    done()
  })

  it('should post /api/roles/:event_id', (done) => {
    request(app)
    .post('/api/roles/1')
    .expect(200)
    done()
  })

  it('should patch /api/roles/:event_id/:id', (done) => {
    request(app)
    .patch('/api/roles/1/1')
    .expect(200)
    done()
  })

  it('should delete /api/roles/:event_id/:id', (done) => {
    request(app)
    .delete('/api/roles/1/1')
    .expect(200)
    done()
  })
})

describe('undefined routes', function(){
  it('should return 404', (done) => {
    request(app)
    .post('/api/not-real')
    .expect(404)
    done()
  })
})
