import React from 'react'
import { PageLayout } from '../components/PageLayout'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getData } from '../utils'
import { MyCard } from '../components/MyCard'

export const TVSeries = () => {
  const [page, setPage] = React.useState(1)
  const [selectedGenres, setSelectedGenres] = useState([])
  const { data, isLoading, isError, error } = useQuery({ queryKey: ['tvdata', 'tv', page, selectedGenres], queryFn: getData })
  data && console.log(data)
  return (
    <div>
      <PageLayout title="TV series" page={page} setPage={setPage} type="tv"
        selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}
      >
        <Grid sx={{ display: 'flex', flexWrap: 'wrap', gap: "10px", justifyContent: 'center' }}>
          {data && data.results.map(obj =>
            <MyCard key={obj.id} original_title={obj.original_name} title={obj.name} release_date={obj.first_air_date} {...obj} type='tv'/>
          )}
        </Grid>

      </PageLayout>
    </div>
  )
}
