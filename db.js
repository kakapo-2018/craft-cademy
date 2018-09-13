const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {

}

function getRestaurants(testConn) {
  const conn = testConn || connection
  return conn('byow')
}

function getRestaurant(id, testConn) {
  const conn = testConn || connection
  return conn('byow').first()
    .where('id', id)
}
