
import React from 'react'
import { connect } from 'react-redux'
import {drinkBeers} from '../beerAPIs/api'


function Backpack(props) {
  // drinkBeers().then(beer => {
  //   beer.map(indiv => console.log(indiv.image))
  // })
 
  
  return (
    <div className="backpack">
      <div className='backPackSlot'>{props.packBeers && props.packBeers[0]}
      </div>
      <div className='backPackSlot'>{props.packBeers && props.packBeers[1]}
      </div>
      <div className='backPackSlot'>{props.packBeers && props.packBeers[2]}
      </div>
      <div className='backPackSlot'>{props.packBeers && props.packBeers[3]}
      </div>
      <div className='backPackSlot'>{props.packBeers && props.packBeers[4]}
      </div>
      <div className='backPackSlot'>{props.packBeers && props.packBeers[5]}
      </div>
      <div className='backPackSlot'>{props.packBeers && props.packBeers[6]}
      </div>
      <div className='backPackSlot'>{props.packBeers && props.packBeers[7]}
      </div>
</div>
)
}

function mapStateToProps(state){
  
  return {
    packBeers: state.addBeer
  }
}

export default connect(mapStateToProps)(Backpack)