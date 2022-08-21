import { Button, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, {useEffect, useState} from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
        const bodyPartsData = await fetchData(
            'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
            exerciseOptions
        );
        setBodyParts(['all',...bodyPartsData]);
    };
    fetchExerciseData();
  }, [])



  const handleSearch = async () => {
    if (search) {
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
        console.log(exerciseData);
        const searchedExercises = exerciseData.filter(

            (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
        );
        setSearch('');
        setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography
            fontWeight={700}
            sx={{fontSize:{lg: '44px', xs: '30px'}}}
            mb='50px' textAlign='center'>
            Check Out Our <br/>
            Top Picks
        </Typography>
        <Box position='relative' mb='72px' textAlign='center'>
            <TextField
                sx={{
                    input: {
                        fontWeight: '700', 
                        border: 'none', 
                        borderRaduis: '4px'
                    },
                    width: {
                        lg: '1000px', 
                        xs: '300px',
                        backgroundColor: 'white',
                        borderRadius: '40px'
                    }
                }}
                height='76px'
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder='Search for Exercises'
                type='text'
            />
            <Button 
                className='search-btn'
                onClick={handleSearch}
                sx={{
                    bgcolor: '#ff2625',
                    color: '#fff', 
                    textTransform: 'none', 
                    width: { lg: '175px', xs: '80px' }, 
                    height: '56px',
                    fontSize: { lg: '20px', xs: '14px' },
                    position: 'absolute',
                    right: '0'
                }}
            >
                Search
            </Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts/>
        </Box>
    </Stack>
  )
}

export default SearchExercises