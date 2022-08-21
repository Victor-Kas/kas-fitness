import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {

  return (
    <Box sx={{mt: {lg:'100px', xs: '0px'}}}>
      <Typography variant='h4' mb={4}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='rows' sx={{p: '2px', position: 'relative'}}>
        {
          targetMuscleExercises.length ?
          <HorizontalScrollbar data={targetMuscleExercises}/>
          : <Loader/>
        }
      </Stack>
      <Typography variant='h4' mb={4}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction='rows' sx={{p: '2px', position: 'relative'}}>
        {
          equipmentExercises.length ?
          <HorizontalScrollbar data={equipmentExercises}/>
          : <Loader/>
        }
      </Stack>

    </Box>
  )
}

export default SimilarExercises