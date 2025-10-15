import React from 'react'
import { PageLayout } from '../components/PageLayout'
import Grid from '@mui/material/Grid'
import { Box, Button, Stack, Tab, Tabs, TextField } from '@mui/material'
import { useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getSearchedData } from '../utils'
import { MyCard } from '../components/MyCard'

export const SearchPage = () => {
  const [page, setPage] = useState(1)
  const [txt, setText] = useState('')
  const [value, setValue] = useState(0)
  const { data, isError, isLoading, error } = useQuery({ queryKey: ['results', value == 0 ? "movie" : "tv", txt, page], queryFn: getSearchedData, enabled: !!txt })
  const inputRef = useRef()

  console.log(txt)
  console.log(value)
  data && console.log(data)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <div>
      <PageLayout title="Search Page" page={page} setPage={setPage}>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <TextField id="outlined-basic" label="Szörcs" variant="outlined"

            inputRef={inputRef}
          />
          <Button onClick={() => setText(inputRef.current.value)}><FaSearch size={30} /></Button>

        </Box>

        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
            <Tab label="Movies" />
            <Tab label="TV Series" />
          </Tabs>
        </Box>


        <Grid sx={{ display: 'flex', flexWrap: 'wrap', gap: "10px", justifyContent: 'center' }}>
          {data && data.results.map(obj =>
            <MyCard key={obj.id} original_title={obj.original_name} release_date={obj.first_air_date} {...obj} type={value == 0 ? "movie" : "tv"}/>
          )}
        </Grid>

      </PageLayout>
    </div>
  )
}


