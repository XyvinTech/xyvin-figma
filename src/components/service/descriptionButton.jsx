import { Box, Collapse, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import LearnMoreIcon from '../../assets/ServiceLearnMore.png'

export default function DescriptionButton({ data }) {
    const [isHover, setHover] = useState(false)
    return (
        <Stack
            spacing={isHover && 1}
            sx={{ border: isHover ? '1px solid #000' : '2px solid #7E7E7E', borderRadius: isHover ? '15px' : '10px', backgroundColor: isHover && "#000" }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <Typography sx={{ color: isHover ? '#fff' : '#7E7E7E', fontWeight: 600, p: 1 }}>
                {data.title}
            </Typography>
            <Collapse in={isHover} >
                <Typography variant='subtitle2' sx={{ color: '#fff', lineHeight: '14px', px: 1 }}>
                    {data.description}
                </Typography>
                <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center',pt:2, pl: 1 }}>
                    <Typography variant='subtitle2' sx={{ color: '#fff', lineHeight: '14px' }}>
                        Learn More
                    </Typography>
                    <img src={`${LearnMoreIcon}`} style={{ width: '40px' }} />
                </Stack>
            </Collapse>
        </Stack>
    )
}
