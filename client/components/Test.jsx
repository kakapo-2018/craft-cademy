import React from 'react'

import { drinkBeers, drinkBeer } from '../beerAPIs/api'

const myCallback = (err, data) => {
  console.log("helllo", data)
}

export default class Test extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeBeer: null,
      detailsVisible: false,
      error: null
    }

    this.showDetails = this.showDetails.bind(this)

  }

  componentDidMount() {
    // drinkBeers(myCallback)
    drinkBeers(this.showDetails)
  }



  showDetails(err, beers) {
    this.setState({
      activeBeer: beers,
      detailsVisible: true,

    })
  }

  refreshList(err) {
    console.log('fresh yourself up with a fresh up yeaaaaaah')
    this.setState({
      error: err,
      activeBeer: false
    })
    showDetails(this.showDetails)
  }


  render() {
    console.log(this.state)
    return (

      <div>
        <h1>Hi</h1>
        <p> </p>
      </div>
    )
  }
}


