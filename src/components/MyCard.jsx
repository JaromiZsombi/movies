import React from 'react'
import { img_500, img_no } from '../utils'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export const MyCard = ({ poster_path, original_title, release_date, vote_average, title, backdrop_path, overview, type }) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card sx={{ position: "relative", width: 345, bgcolor: "#334155", color: "white" }}>
        <CardMedia onClick={handleOpen}
          sx={{ backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", userSelect: "none" }}
          height="auto" width="auto" component="img"
          image={poster_path ? img_500 + poster_path : img_no}
          title={original_title}
        />
        <div className='rating'>{Math.round(vote_average * 10) / 10}</div>
        <CardContent sx={{ height: "110px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {original_title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'lightgray', textAlign: "right" }}>
            {release_date}
          </Typography>
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            sx={{ backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", userSelect: "none" }}
            height="auto" width="auto" component="img"
            image={backdrop_path ? img_500 + backdrop_path : img_no}
            title={original_title}
          />
          <Typography variant="h6" component="h2">
           <b>{title}</b>  ({release_date})
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {overview}
          </Typography>
        </Box>
      </Modal>
    </div>
    /*Kártya...*/
  )
}
