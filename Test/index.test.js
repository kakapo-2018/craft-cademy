import request from 'supertest'

import server from '../server/server'


jest.mock('../server/db', () => ({
  getBeer: () => Promise.resolve([
    { id: 1, text: 'test text 1' },
    { id: 2, text: 'test text 2' }
  ])
}))

test('GET /api/beer', () => {
  return request(server)
    .get('/api/beer')
    .expect(200)
    .then(res => {
      expect(res.body.length).toEqual(2)
    })
})


