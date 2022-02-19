import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({ place, selected, refProp }) => {
 const classes=useStyles()
 console.log(classes,"+++++++++++")
  return (
    <Card>
        <CardMedia
          className={classes.media}
          image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          title={place.name}
      />
       <CardContent>
       <Typography gutterBottom variant="h5">{place.name}</Typography>

       </CardContent>
    </Card>
    // <h1>{place.name}</h1>
  );
};

export default PlaceDetails;
