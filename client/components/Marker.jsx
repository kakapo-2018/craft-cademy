import React from 'react'
import GoogleMapReact from 'google-map-react'
import {addBeer} from '../actions/index'
import {connect} from 'react-redux'




class Marker extends React.Component {
    constructor(props){
        super(props)
    
            
        this.state = {
            cafe: {}
        }

        

    }


    render(){
        return(
            
            <React.Fragment>
                
    {console.log(this.props)}
            <figure className='imageDiv'>
            <img onClick={()=>props.dispatch(addBeer('SOMEBEER'))}
             id='testmark' src="./bottle.png" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} />
            <figcaption className='tooltiptext'>{this.props.name}</figcaption>
            </figure>
              </React.Fragment>   

        )
    }
}
export default connect()(Marker)