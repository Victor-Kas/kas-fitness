import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Kas Fitness App
        </Typography>
        <Typography 
            fontWeight='700'
            sx={{fontSize:{lg: '42px', xs: '38px'}}}
            mb='23px' mt='30px'>
            Hustle For <br/>That Muscle!!!
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Check out our top workouts
        </Typography>
        <Button variant='contained' 
                color='error' 
                href='#exercises'
                sx={{backgroundColor: '#ff2625'}}>
            Explore Workouts
        </Button>
        <Typography 
                    fontWeight={600} 
                    color='#ff2625' 
                    sx={{ 
                        opacity: 0.1,
                        display: {lg: 'block', xs: 'none'}
                    }} fontSize='200px'>
            Workouts
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner