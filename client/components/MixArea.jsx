
import React from 'react'


function MixArea () {

  function startdrag(e){
    e.dataTransfer.setData("fun", e.target.id)
}

function allowDrop(e){
  epreventDefault()
}

function doTheDrop(e){
  e.preventDefault();
  let data = e.dataTransfer.getData("fun")
  e.target.appendChild(document.getElementById(data))
  count++;
  showColor(e)}


  return (
    <div className="mixArea">
      <div id='m1' className='mixSlot' onDrag={(event)=>doTheDrop(event)} onDragOver={(event)=>allowDrop(event)}>
      </div>
      <div id='m2' className='mixSlot' onDrag={(event)=>doTheDrop(event)} onDragOver={(event)=>allowDrop(event)}>
      </div>
      <div className='imageDiv'>
      <img id='equalsImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Equals_sign.svg/2000px-Equals_sign.svg.png" alt=""/>
      </div>
      <div className='finalSlot'>
      </div>
</div>
  )
}

export default MixArea