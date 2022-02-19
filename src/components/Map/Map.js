import React from 'react'
import GoogleMapReact from 'google-map-react';
import useStyles from './styles.js';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import GreatPlace from '../MygreatPlace/greatplace'
// AIza
const Map = ({setCoords, setBounds, coords,places}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
   places=places.filter(place=> (!isNaN(place.latitude) && !isNaN(place.longitude)) )
  console.log(places.forEach(pl=>{
    console.log(pl.latitude,pl.longitude)
  }),"}]]]]]]]]")
   const defaultProps = {
   
    zoom: 11
  };  
  return (
    <>
    <div className={classes.mapContainer}>
       <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        defaultZoom={defaultProps.zoom}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
       { 
         places?.map((place,i)=>(
           <div 
           className={classes.markerContainer} 
           lat={Number(place.latitude )}
           lng={Number(place.longitude)}
           key={i}
           >

           {!isMobile
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                </Paper>
              )}   
           </div>
         ))

      } 
        
      </GoogleMapReact>

    </div>
     {/* <GreatPlace 
     text={'A'}
      lat={59.955413} 
      lng={30.337844}
     /> */}
     </>
     
  )
}

export default Map


// { !isMobile ? 
//   <LocationOnOutlinedIcon color="primary" fontSize="large" />
// : (<Paper elevation={3} >
//        <Typography 
//          className={classes.typography} 
//          variant="subtitle2" 
//          gutterBottom
//        > 
//        {place.name}
//        </Typography>
//        <img 
//        src={place.photo 
//        ? place.photo.images.large.url 
//        : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} className={classes.pointer}/>
//    </Paper>)
//    }