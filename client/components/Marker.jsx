import React from 'react'
import GoogleMapReact from 'google-map-react'




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

            <figure className='imageDiv'>
            <img onClick={()=>console.log('hi')
            } id='testmark' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Equals_sign.svg/2000px-Equals_sign.svg.png" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} />
            <figcaption className='tooltiptext'>Stout</figcaption>
            </figure>
              </React.Fragment>   

        )
    }
}
export default Marker