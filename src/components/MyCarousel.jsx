import React from 'react'
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { getDetailsData, img_300, img_no } from '../utils';

export const MyCarousel = ({type, id}) => {

  const urlCredits = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
  const {data, isLoading, isError, error} =useQuery({queryKey:['details', urlCredits], queryFn:getDetailsData}) 


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Slider {...settings}>
      {data && data.cast.map(obj=>
        <div className='actors' key={obj.id}>
          <img className='carousel_img' src={obj.profile_path ? img_300+obj.profile_path: img_no} alt="" />
          <b>{obj?.name}</b>
        </div>
      )}
    </Slider>
  );
}