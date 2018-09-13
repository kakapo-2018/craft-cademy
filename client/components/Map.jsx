
import React from 'react'
import GoogleMapReact from 'google-map-react'


function Map () {



  return (

    <div id="map">
     <GoogleMapReact
                    bootstrapURLKeys={{key:"AIzaSyBIkhUwpAR7LsCs4CnRfANa9TPIdgo3bYU"}}
                    defaultCenter={ {lat: -41.2969757, lng: 174.7742823} }
                    defaultZoom={14}>
      </GoogleMapReact>
    </div>
  )
}

export default Map