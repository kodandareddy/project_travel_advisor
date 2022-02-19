import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Input } from '@material-ui/core';
import useStyles from './styles.js';
import PlaceDetails from '../PlaceDetails/PlaceDetails.js'
const List = ({places}) => {
 const classes= useStyles()
 const[name,setName]=useState('')
 const [rating,setRating]=useState('')
 const [type,setType]=useState('restaurants')
 const handleChange=(e)=>{
   setType(e.target.value)
 }

  return (
    <div className={classes.container}>
        <Typography variant="h4">Food & Dining around you</Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"
            onChange={handleChange}
            value={type}
          >
             <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
             <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3} className={classes.list}>
           {
             places?.map((place,i)=>( 
               <Grid item  key={i} xs={12}>
                  <PlaceDetails place={place}/>
              </Grid>
                ))
           }
        </Grid>
    </div>
  )
}

export default List