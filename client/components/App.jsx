import React from 'react'

function getRandomLong() {
  console.log(num)
  var num = (Math.floor(Math.random() * 174).toFixed(4));
  return num
}

const App = () => (
  <div className='app-container'>
    <h1>Hi</h1>
    {getRandomLong()}
  </div>
)

export default App
