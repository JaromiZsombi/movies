import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { BsCircle } from "react-icons/bs";
import { Chip } from '@mui/material';

export const SingleChip = ({id, name, selectedGenres, setSelectedGenres}) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleClick = () => {
        setIsSelected(!isSelected)
        if(selectedGenres.indexOf(id)==-1){
            setSelectedGenres(prev=>[...prev,id])
        }else{
            setSelectedGenres(prev=>prev.filter(item=>item!=id))
        }
    };



    return (
        <Stack direction="row" spacing={1} sx={{padding:'5px'}}>
            <Chip
                label={name}
                clickable
                onClick={handleClick}
                color='info'
                icon={isSelected? <CiCircleRemove />: <BsCircle />}
            />
        </Stack>
    );
}