

export const addBeer = (beer) => {
  return {
    type: 'ADD_BEER',
    beer: beer
  }
}

export const addBeerToMarker = (beer) => {
  return {
    type: 'ADD_TO_MARKER',
    beerArray: beer
  }
}
