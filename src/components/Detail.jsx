import React from 'react'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'
import { Button, Stack, Typography } from '@mui/material'

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
          icon: BodyPartImage,
          name: bodyPart,
        },
        {
          icon: TargetImage,
          name: target,
        },
        {
          icon: EquipmentImage,
          name: equipment,
        },
      ];
    
  return (
    <Stack gap='60px' sx={{flexDirection: {lg: 'row'}, p:'20px', alignItems: 'center'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
            <Typography sx={{ fontSize: { lg: '56px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
                {name}
            </Typography>
            <Typography sx={{ fontSize: { lg: '20px', xs: '18px' } }} color="#4F4C4C">
                  Exercises keep you strong.{' '}
                  <span style={{ textTransform: 'capitalize' }}>{name}</span> is a
                  great workout to target your {target}. It will help you improve your{' '}
                  stamina and get you in shape.
            </Typography>
              {extraDetail?.map((item) => (
                  <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                      <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                          <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                      </Button>
                      <Typography textTransform="capitalize" sx={{ fontSize: { lg: '26px', xs: '20px' } }}>
                          {item.name}
                      </Typography>
                  </Stack>
              ))}
        </Stack>
    </Stack>
  )
}

export default Detail