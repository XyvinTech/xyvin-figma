import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'


const descriptionListData = [
    {
        title: 'Ed-tech',
        description: 'A visually appealing and informative landing page with the latest company updates'
    },
    {
        title: 'Automation',
        description: 'A visually appealing and informative landing page with the latest company updates'
    },
    {
        title: 'Blockchain',
        description: 'A visually appealing and informative landing page with the latest company updates'
    },
    {
        title: 'Cloud Solutions',
        description: 'A visually appealing and informative landing page with the latest company updates'
    },
]


const DescriptionData = ({ data }) => {
    const [isActive, setActive] = useState(false)
    return (
        <Box p={2}
            sx={{ borderTop: isActive && '3px solid #fff',width:'150px', maxWidth: '300px', backgroundColor: isActive && '#fff1', cursor: 'pointer',transition:'width 0.5s',":hover":{
                width:'300px',
                overflow:'hidden'
            } }}
            onMouseOver={() => { setActive(true) }}
            onMouseOut={() => { setActive(false) }}
        >
            <Typography variant='h6' noWrap color={'#fff'}>
                {data.title}
            </Typography>
            {isActive &&
                <Typography sx={{ fontSize: '12px', mt: 2 }} color={'#E1E1E1'}>
                    {data.description}
                </Typography>
            }
        </Box>
    )
}

export default function DescriptionList({ ...props }) {
    return (
        <Box sx={{ position: 'absolute', bottom: 0, width: '100%', height: '130px', backgroundColor: '#0004', backdropFilter: 'blur(10px)',overflowX:'scroll' }}>
            <Stack direction={'row'} sx={{ px: 4, height: '100%' }}>
                {
                    descriptionListData.map((item) => (
                        <DescriptionData data={item} />
                    ))
                }
            </Stack>
        </Box>
    )
}
