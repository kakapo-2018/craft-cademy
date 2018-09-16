
import React from 'react'
import { connect } from 'react-redux'
import {drinkBeers} from '../beerAPIs/api'


function Backpack(props) {
  // drinkBeers().then(beer => {
  //   beer.map(indiv => console.log(indiv.image))
  // })
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
  showColor(e)
  
}
  
  return (
    <div className="backpack">
      <div className='backPackSlot' id='1' onDrag={(event)=>doTheDrop(event)} onDragOver={(event)=>allowDrop(event)}><div id='b1' draggable={true} onDragStart={(event)=>startdrag(event)}>{props.packBeers && props.packBeers[0]}</div>
      </div>
      <div className='backPackSlot' id='2' onDrag={(event)=>doTheDrop(event)} onDragOver={(event)=>allowDrop(event)}><div id='b2' draggable={true} onDragStart={(event)=>startdrag(event)}>{props.packBeers && props.packBeers[1]}</div>
      </div><div></div>
      <div className='backPackSlot' id='3' onDrag={(event)=>doTheDrop(event)} onDragOver={(event)=>allowDrop(event)}><div id='b3' draggable={true} onDragStart={(event)=>startdrag(event)}>{props.packBeers && props.packBeers[2]}</div>
      </div><div></div>
      <div className='backPackSlot' id='4' onDrag={(event)=>doTheDrop(event)} onDragOver={(event)=>allowDrop(event)}><div id='b4' draggable={true} onDragStart={(event)=>startdrag(event)}>{props.packBeers && props.packBeers[3]}</div>
      </div><div></div>
      <div className='backPackSlot' id='5' onDrag={(event)=>doTheDrop(event)} onDragOver={(event)=>allowDrop(event)}><div id='b5' draggable={true} onDragStart={(event)=>startdrag(event)}>{props.packBeers && props.packBeers[4]}</div>
      </div><div></div>
      <div className='backPackSlot' id='6' onDrag={(event)=>doTheDrop(event)} onDragOver={(event)=>allowDrop(event)}><div id='b6' draggable={true} onDragStart={(event)=>startdrag(event)}>{props.packBeers && props.packBeers[5]}</div>
      </div><div></div>
      <div className='backPackSlot' id='7' onDrag={(event)=>doTheDrop(event)} onDragOver={(event)=>allowDrop(event)}><div id='b7' draggable={true} onDragStart={(event)=>startdrag(event)}>{props.packBeers && props.packBeers[6]}</div>
      </div><div></div>
      <div className='backPackSlot' id='8' onDrag={(event)=>doTheDrop(event)} onDragOver={(event)=>allowDrop(event)}><div id='b8' draggable={true} onDragStart={(event)=>startdrag(event)}>{props.packBeers && props.packBeers[7]}</div>
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