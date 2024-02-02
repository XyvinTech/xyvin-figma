import { Box, Typography } from '@mui/material'
import React from 'react'
import Logo from './navbar/logo'

export default function Footer() {
    return (
        <Box sx={{ height: '300px', p: 2 }}>
            <Logo variant='invert' />
            <Box sx={{display:'flex',height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Typography>
                    Footer
                </Typography>
            </Box>
        </Box>
    )
}
