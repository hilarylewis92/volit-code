const expect = require('chai').expect
const should = require('chai').should
const jasmine = require('jasmine')
const request = require('supertest')
const app = require('../server/server.js');

describe('server tests', () => {
  xit('/api/organizations', (done) => {
    request(app)
    .get('/api/organizations')
    .expect(200)
    done()
  });
});
