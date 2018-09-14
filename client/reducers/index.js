import {combineReducers} from 'redux'
import addBeer from './addBeer'
import addBeerToMarker from './addBeerToMarker'

export default combineReducers({
  addBeer,
  addBeerToMarker
})
