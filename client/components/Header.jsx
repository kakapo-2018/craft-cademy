
import React from 'react'
import {drinkBeer} from '../beerAPIs/api'

import {addBeerToMarker} from '../actions/index'
import { connect } from 'react-redux'



function Header (props) {

  // fucntion onclie(){
  //   generate four number [1,2,3,4]
  //   array = array.amps

  //   array = pls api four beers
  //   props..dsisgksd(addtoamractoi(array))
  // }

  function fillArrayWithBeers(){
    let idarrat =[]
    for(let i=0; i<4; i++){
      idarrat.push(Math.floor(Math.random()*5+1))
    }


    let beerArray = idarrat.map(id => {
      return drinkBeer(id)
    })

    // console.log(beerArray)
    
    Promise.all(beerArray).
    then((all)=>props.dispatch(addBeerToMarker(all)))

    

    // props.dispatch(addBeerToMarker()
  }

  return (
    <React.Fragment>
  <h1>CRAFT-CADEMY</h1>
  <button onClick={()=>fillArrayWithBeers()}>DOITITITIIT</button>
</React.Fragment>
  )
}

export default connect()(Header)