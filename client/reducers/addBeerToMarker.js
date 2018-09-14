import {ADD_TO_MARKER} from '../actions'

const addBeerToMarker = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_MARKER':
          return action.beerArray
    default:
      return state
  }
}

export default addBeerToMarker