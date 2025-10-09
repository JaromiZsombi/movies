import React from 'react'
import { img_500, img_no } from '../utils'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const MyCard = ({poster_path, original_title, release_date, vote_average}) => {
  return (
     <Card sx={{position:"relative",  width: 345, bgcolor:"#334155", color:"white"}}>
      <CardMedia
        sx={{backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center", userSelect:"none"}}
        height="auto" width="auto" component="img"
        image={poster_path? img_500+poster_path : img_no}
        title={original_title}
      />
      <div className='rating'>{Math.round(vote_average*10)/10}</div>
      <CardContent sx={{height:"110px"}}>
        <Typography gutterBottom variant="h5" component="div">
          {original_title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'lightgray', textAlign:"right"}}>
          {release_date}
        </Typography>
      </CardContent>
      
    </Card>
    /*Kártya...*/ 
  )
}
