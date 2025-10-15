import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FaYoutube } from "react-icons/fa";
import { getDetailsData, img_no } from '../utils';
import { useQuery } from 'react-query';

export const ShowTrailer=({id, type})=> {
     const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
     const {data, isLoading, isError, error} =useQuery({queryKey:['details', urlVideos], queryFn:getDetailsData})

  return (
    <Button
      variant="contained"
      startIcon={<FaYoutube color='red' />}
      href={data && data?.results && data.results.length > 0 ? `https://www.youtube.com/watch?v=${data?.results[0].key}` : img_no}
      target='_blank'
    >
      Watch the trailer

    </Button>
  );
}