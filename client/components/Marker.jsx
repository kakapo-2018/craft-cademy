import React from 'react'
import GoogleMapReact from 'google-map-react'
import {addBeer} from '../actions/index'
import {connect} from 'react-redux'




function Marker (props) {

    
        return(
            
            <React.Fragment>
                
    {/* {console.log('these are the proprs ' + this.props.name)} */}
            <figure className='imageDiv'>
            <img onClick={()=>props.dispatch(addBeer(props.name))}
             id='testmark' src="./bottle.png" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} />
            <figcaption className='tooltiptext'>{props.name}</figcaption>
            </figure>
              </React.Fragment>   

        )
    
}
export default connect()(Marker)