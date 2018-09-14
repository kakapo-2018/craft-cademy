const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBeer,
  getBeerByID
}

function getBeer(testConn) {
  const conn = testConn || connection
  return conn('beer')
}

function getBeerByID(id, testConn) {
  const conn = testConn || connection
  return conn('beer').first()
    .where('id', '=', id)
}
