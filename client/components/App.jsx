import React from 'react'
import Test from './Test'

import Header from './Header'
import Backpack from './Backpack'
import MixArea from './MixArea'
import Map from './Map'

// function getRandomLong() {
//   console.log(num)
//   var num = (Math.floor(Math.random() * 174).toFixed(4));
//   return num
// }

const App = () => (
  <div className='app-container'>
    <Header />
    <div className='pagewrapper'>
    <div className='backpackmixer'>
      <Backpack />
      <MixArea />
    </div>
      <Map />
    </div>
  </div>
)

export default App
