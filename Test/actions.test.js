import { addBeer } from '../client/actions/AddBeer'

const fakeBeer = {
  name: 'Larger'
}

test('add beer action does the right stuff', () => {
  //Arrange
  const expected = {
    type: 'ADD_BEER',
    beer: fakeBeer
  }
  //Act
  const actual = addBeer(fakeBeer)
  //Assert
  expect(actual).toEqual(expected)
  expect(actual.beer).toBe(expected.beer)
})