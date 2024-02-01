import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as Globe } from '../assets/globe.svg'


const counts = [
    {
        label:'Clients',
        count:'300+'
    },
    {
        label:'Product Innovation',
        count:'100+'
    },
    {
        label:'Industry Experience',
        count:'20 years'
    },
    
]

const CountCard = ({data}) => {
    return (
        <Stack direction={'column'} spacing={0.5}>
            <Typography sx={{ color: '#fff', fontSize: '36px', fontWeight: 1000, fontFamily: 'sans-serif', lineHeight: '36px' }}>
                {data.count}
            </Typography>
            <Typography variant='subtitle1]' sx={{ color: '#6C6C6C', fontWeight: 700 }}>
                {data.label}
            </Typography>
        </Stack>
    )
}

export default function Counts() {
    return (
        <Box sx={{ backgroundColor: '#000' }}>
            <Stack direction={'row'} sx={{justifyContent:'space-between',alignItems:'center'}}>
                <Stack direction={'column'} p={7} spacing={3}>
                    <Typography variant='subtitle1]' sx={{ color: '#6C6C6C', fontWeight: 700 }}>
                        Itransition at a glance
                    </Typography>
                    <Stack direction={'row'} spacing={6}>
                        {
                            counts.map((item)=>(
                                <CountCard data={item}  />
                            ))
                        }
                    </Stack>
                </Stack>
                <Globe style={{ height: '220px' }} />
            </Stack>
        </Box>
    )
}
