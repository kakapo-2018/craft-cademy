import React from 'react'
import GoogleMapReact from 'google-map-react'
import {addBeer} from '../actions/index'
import {connect} from 'react-redux'
import {drinkBeers} from '../beerAPIs/api'




function Marker (props) {


    // drinkBeers().then(beer => {
    //     return beer.find(indiv => indiv.name == props.name)
    //   })
    //   .then(res => setPic(res.image))

      
// console.log('current' + Object.keys(props))
//       function setPic(pic){
//           picture = pic;

//           return picture
//       }
    
        return(
            
            <React.Fragment>
                
            <figure className='imageDiv'>
            {<img onClick={()=>props.dispatch(addBeer(props.name))}
             id='testmark' 
                
                 style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} />}
            <figcaption className='tooltiptext'>{props.name}</figcaption>
            </figure>
              </React.Fragment>   

        )
    
}
export default connect()(Marker)