import request from 'superagent'

const beerAPI = 'http://localhost:3000/api/beer'

export function drinkBeers() {
  return request
    .get(beerAPI)
    .then(res => res.body)
    // .end((err, res) => {
    //   callback(err, res.body)
    // })
}

export function drinkBeer(id) {
  return request
    .get(`${beerAPI}/${id}`)
    .then((res)=>{
      console.log('this is res' , res)
    return res})
    .then(res => res.body)
    .catch(err => console.log(err))
    
    // .end((err, res) => {
    //   callback(err, res.body)
    // })
}