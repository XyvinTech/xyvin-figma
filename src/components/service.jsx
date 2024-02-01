import { Box, Container, Grid, Hidden, Stack, Typography } from '@mui/material'
import React from 'react'

import ServiceList from './service/serviceList'
import ServiceDetails from './service/serviceDetails'



export default function Service() {
    return (
        <Box sx={{ backgroundColor: '#FAFBFF',py:4 }}>
            <Grid container>
                <Grid item lg={3} py={6} pl={6}>
                    <ServiceList />
                </Grid>
                <Grid item lg={9} py={6} pr={6}>
                    <ServiceDetails/>
                </Grid>
            </Grid>
        </Box>
    )
}

