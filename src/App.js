import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData, getWeatherData } from './api/travelAdvisorAPI';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

 useEffect(()=>{
  navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
     console.log(isNaN(latitude),isNaN(longitude))
     setCoords({ lat:latitude, lng:longitude });
  });
 },[])
 
  useEffect(()=>{
   if(bounds){
    getPlacesData(bounds.sw,bounds.ne).then((data)=>{
      setPlaces(data)
    })
   }
   
  },[coords,bounds])

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    // const lat = autocomplete.getPlace().geometry.location.lat();
    // const lng = autocomplete.getPlace().geometry.location.lng();

    // setCoords({ lat, lng });
  };

  return (
    <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoords={setCoords} setBounds={setBounds} coords={coords}/>
        </Grid>
       
      </Grid>
     
    </>
  );
};

export default App;
