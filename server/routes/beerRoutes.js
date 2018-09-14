const express = require('express')

const db = require('../db')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  db.getBeer().then((beers) => {
    res.json(beers)
  })
})

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  db.getBeerByID(req.params.id).then((beer) => {
    res.json(beer)
  })
})

module.exports = router