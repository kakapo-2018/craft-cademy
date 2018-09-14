
import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'


function Map () {



  return (

    <div id="map">
     <GoogleMapReact
                    bootstrapURLKeys={{key:"AIzaSyBIkhUwpAR7LsCs4CnRfANa9TPIdgo3bYU"}}
                    defaultCenter={ {lat: -41.2969757, lng: 174.7742823} }
                    defaultZoom={14}>
      
      
      <Marker lat={-41.2969757} lng = {174.7742823} />
      
      
      </GoogleMapReact>
    </div>
  )
}

export default Map