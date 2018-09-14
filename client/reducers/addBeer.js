import {ADD_BEER} from '../actions'

const addBeer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BEER':
        if(state.length>8){
          return
        } else {
          return [...state, action.beer]
        }

    default:
      return state
  }
}

export default addBeer