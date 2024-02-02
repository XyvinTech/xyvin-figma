import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

import colorLogo from '../assets/colorLogo.png'

export default function Subscribe() {
    return (
        <Box sx={{ height: '300px',overflow:'hidden' }} >
            <Grid container sx={{ backgroundColor: '#1E1E1E' }}>
                <Grid item xs={5} sx={{ width: '100%',overflow:'hidden' }}>
                    <img src={`${colorLogo}`} style={{ width: '100%', objectFit: 'cover', objectPosition: '-100px' }} />
                </Grid>
                <Grid item xs={7} sx={{ backgroundColor: '#1E1E1E' }}>
                    <Stack pr={10} sx={{ justifyContent: 'center', height: '100%' }}>
                        <Typography sx={{ textAlign: 'right', color: '#fff', fontSize: '20px', fontWeight: 600 }}>
                            Subscribe our news letter now
                        </Typography>
                        <Typography sx={{ textAlign: 'right', color: '#fff' }}>
                            Get More Updates on the Current tech revolutions
                        </Typography>
                        <Stack direction={'row'} sx={{ justifyContent: 'end', pt: 3 }} spacing={2}>
                            <TextField
                                sx={{  }}
                                inputProps={
                                    {
                                        
                                        sx: {
                                            border: '1px solid #fff', borderRadius: '8px', color: '#fff', outline: 'none', width: '300px',
                                            height:'15px',
                                            color:'#fff',
                                            
                                            '&::placeholder': {
                                                color: '#fff',
                                                opacity: 1,
                                            },
                                        },
                                    }
                                }
                                placeholder='Enter Email Address' />
                            <Button variant='contained' sx={{ borderRadius: '10px', backgroundColor: '#fff', color: '#000' }} >Subscribe</Button>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}
