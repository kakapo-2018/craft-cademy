
import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import { connect } from 'react-redux'
import {addBeerToMarker} from '../actions/index'


function Map (props) {

  let db = props.displayBeer



  return (

    <div id="map">
     <GoogleMapReact
                    bootstrapURLKeys={{key:"AIzaSyBIkhUwpAR7LsCs4CnRfANa9TPIdgo3bYU"}}
                    defaultCenter={ {lat: -41.2969757, lng: 174.7742823} }
                    defaultZoom={14}>
      
      
      {db.length && <Marker lat={Number(db[0].lat)} lng ={Number(db[0].lng)} name={db[0].name} />}

      {db.length &&  <Marker lat={Number(db[1].lat)} lng ={Number(db[1].lng)} name={db[1].name}/>}
      {db.length &&  <Marker lat={Number(db[2].lat)} lng ={Number(db[2].lng)} name={db[2].name}/>}
      {db.length &&  <Marker lat={Number(db[3].lat)} lng ={Number(db[3].lng)} name={db[3].name}/>}
      
    

      
      
      </GoogleMapReact>
    </div>
  )
}

function mapStateToProps(state){
  // console.log(state)
  
  return {
    displayBeer: state.addBeerToMarker
  }
}

export default connect(mapStateToProps)(Map)