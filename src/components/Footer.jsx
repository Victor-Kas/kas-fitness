import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '264px', height: '67px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '25px', xs: '16px' } }} mt="41px" textAlign="center" pb="40px">Powered By AuroraTech</Typography>
  </Box>
);

export default Footer;
