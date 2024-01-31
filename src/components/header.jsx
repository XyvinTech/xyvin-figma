import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import BgImage from '../assets/Header-bg.jpeg'
import ArrowButton from '../ui/arrowButton'
import DescriptionList from './header/descriptionList'

export default function Header() {
  return (

    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 10.95%, rgba(0, 0, 0, 0.05) 100%),url('${BgImage}')`,
        backgroundRepeat: 'no-repeat',
        overflow:'hidden',
        backgroundSize: 'cover',
        backgroundPosition: {xs:'75%'}
      }}>
      <Container maxWidth="xl">
        <Box sx={{ width: {xs:'100%',md:'60%'},mt:40 }}>
          <Typography sx={{ color: "#fff", fontSize: {xs:'45px',md:'60px'},lineHeight: {xs:'50px',md:'70px'} }}>
            Making the development for future possibilities
          </Typography>
          <ArrowButton variant='fill' mt={1} >View Case Studies</ArrowButton>
        </Box>
      </Container>
      <DescriptionList/>
    </Box >
  )
}
