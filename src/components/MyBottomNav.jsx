import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { MdMovie } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router';

export const MyBottomNav=()=> {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate

  const handleChange=(event, newValue)=>{
    setValue(newValue)
    console.log(newValue)
    if(newValue==0) navigate('/')
    if(newValue==1) navigate('/tvseries')
    if(newValue==2) navigate('/search')
  }

  return (
    <Box sx={{ maxWidth: 500, position:'fixed', bottom:"0"}}>
      <BottomNavigation sx={{backgroundColor:"#6366f1"}} showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction sx={{color:"black"}} label="Movies" icon={<MdMovie />} />
        <BottomNavigationAction sx={{color:"black"}} label="TVSeries" icon={<FaTv />} />
        <BottomNavigationAction sx={{color:"black"}} label="Search" icon={<FaSearch />} />
      </BottomNavigation>
    </Box>
  );
}