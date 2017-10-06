import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

let coords = {lat: 37.791298, lng: -122.393743}

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={coords} >
    {props.isMarkerShown && <Marker />}
  </GoogleMap>
))

export default Map;
