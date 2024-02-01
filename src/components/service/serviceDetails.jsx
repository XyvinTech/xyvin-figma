import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Service1 from '../../assets/service1.jpeg'
import DescriptionButton from './descriptionButton'

const serviceDescriptionList = [
    {
        title: 'Application Development',
        description: 'We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.'
    },
    {
        title: 'Application Development',
        description: 'We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.'
    },
    {
        title: 'Application Development',
        description: 'We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.'
    },
    {
        title: 'Application Development',
        description: 'We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.'
    },
    {
        title: 'Application Development',
        description: 'We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.'
    },
    {
        title: 'Application Development',
        description: 'We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.'
    },

]

export default function ServiceDetails() {
    return (
        <Box
            sx={{
                borderRadius: '20px',
                boxShadow: '4px 6px 15px 0px #00000055',
                height: '100%', overflow: "hidden"
            }}>
            <Grid container>
                <Grid item xs={4} md={3} sx={{ height: '400px', backgroundImage: `url("${Service1}")`, backgroundSize: 'cover', p: 2 }}>
                    <Typography variant='subtitle1'>
                        IT Consulting
                    </Typography>
                    <Typography variant='subtitle2' sx={{ fontWeight: 500 }}>
                        A visually appealing and informative landing page with the latest company updates
                    </Typography>
                </Grid>
                <Grid item xs={9} sx={{ p: 5 }}>
                    <Grid container spacing={2}>
                        {
                            serviceDescriptionList.map((item) => {
                                return (
                                    <Grid item xs={6}>
                                        <DescriptionButton data={item} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
