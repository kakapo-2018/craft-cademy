const path = require('path')
const express = require('express')
const beerRoutes = require('./routes/beerRoutes')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/beer', beerRoutes)

module.exports = server
