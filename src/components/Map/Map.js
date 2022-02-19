import React from 'react'
import GoogleMapReact from 'google-map-react';
import useStyles from './styles.js';

// AIza
const Map = ({setCoords, setBounds, coords}) => {
  console.log(coords)
  const classes = useStyles();

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };  return (
    <div className={classes.mapContainer}>
       <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAtvK_U6gQj3INAImZINlI8xA9gRdNrILw" }}
        defaultCenter={coords}
        defaultZoom={defaultProps.zoom}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
      
      </GoogleMapReact>
    </div>
    
  )
}

export default Map