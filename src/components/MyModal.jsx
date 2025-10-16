import { Box, CardMedia, colors, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import React from 'react'
import { getDetailsData, img_300, img_500, img_no } from '../utils';
import { useQuery } from 'react-query';
import { MyCarousel } from './MyCarousel'
import { ShowTrailer } from './ShowTrailer';

export const MyModal = ({ id, open, setOpen, type }) => {
    if (!type) return <h1>hiba</h1>
    if (!id) return <h1>hiba</h1>
    const urlDetails = `https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
    const { data, isLoading, isError, error } = useQuery({ queryKey: ['details', urlDetails], queryFn: getDetailsData })

    const style = {
        maxWidth: '1000px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#404040',
        color: "whitesmoke",
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleClose = () => setOpen(false)

    if (isLoading) return <h1>Loading</h1>

    return (
        <div className='modalSizing'>
            <Modal
            className='modalSizing'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='modalSizing'>
                    <CardMedia className="modalImageSizing"
                        sx={{ backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", userSelect: "none" }}
                        height="auto" width="auto" component="img"
                        image={data?.backdrop_path ? img_500 + data?.backdrop_path : img_no}
                        title={data?.original_title}
                    />
                    <Typography variant="h6" component="h2">
                        <b>{type == "movie" ? data?.title : data?.name}</b>  ({type == "movie" ? data?.release_date : data?.first_air_date})
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {data?.overview}
                    </Typography>

                    
                    <Box className='carouselBox' sx={{padding:4, width:"100%", justifyContent:'center'}}>
                        {<MyCarousel id={id} type={type} />}
                    </Box>
                    <Box sx={{display:"flex", justifyContent:'center'}}>
                        {<ShowTrailer id={id} type={type} />}
                    </Box>
                    
                </Box>
            </Modal>
        </div>

    )
}