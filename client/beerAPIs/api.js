import request from 'superagent'

const beerAPI = 'http://localhost:3000/api/beer'

export function drinkBeers(callback) {
  request
    .get(beerAPI)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function drinkBeer(callback, id) {
  request
    .get(`${beerAPI}/${id}`)
    .end((err, res) => {
      callback(err, res.body)
    })
}