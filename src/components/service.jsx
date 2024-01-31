import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const servicesList = [
    'IT Consulting',
    'Software Engineering',
    'Application Service',
    'Maintenance & Support',
    'Managed IT Service',
    'DevOps'
]


export default function Service() {
    return (
        <Box sx={{backgroundColor:'#FAFBFF'}}>
            <Grid container>
                <Grid item md='4' p={6}>
                    <Stack sx={{ ml: 5 }} spacing={3}>
                        <Typography sx={{ color: '#0003', fontSize: '30px', fontWeight: 700, borderBottom: '1px solid #0003', px: 2 }}>
                            Services
                        </Typography>
                        {
                            servicesList.map((item) => (
                                <Typography sx={{color:'#3B3B3B',fontSize:'18px',fontWeight:550,px: 2}}>{item}</Typography>
                            )) 
                        }
                    </Stack>
                </Grid>
                <Grid item md='8'>
                </Grid>
            </Grid>
        </Box>
    )
}
