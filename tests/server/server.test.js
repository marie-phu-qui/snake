let request = require('supertest')
let server = require('./../../server/server')

describe('Server ', () => {
  test('test if the server is up', (done) => {
  // Act
  request(server).get('/')
    .then((res, err) => {
      expect(res.statusCode).toBe(200)
      // Assert
      done()
      })
    });
    test('test if the server is up on /test', (done) => {
      // Act
      request(server).get('/test')
        .then((res, err) => {
          expect(res.statusCode).toBe(200)
          // Assert
          done()
        })
    })
})