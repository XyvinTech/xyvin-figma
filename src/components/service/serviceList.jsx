import { Stack, Typography } from '@mui/material'
import React from 'react'


const servicesList = [
    'IT Consulting',
    'Software Engineering',
    'Application Service',
    'Maintenance & Support',
    'Managed IT Service',
    'DevOps'
]

export default function ServiceList() {
    return (
        <Stack sx={{ ml: 5 }} spacing={2}>
            <Typography sx={{ color: '#0003', fontSize: '24px', fontWeight: 800, borderBottom: '1px solid #0003', px: 2 }}>
                Services
            </Typography>
            {
                servicesList.map((item) => (
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#3B3B3B', borderRadius: '8px',
                            fontSize: '14px', fontWeight: 550,
                            px: 2,
                            py: 1,
                            width:'170px',
                            ":active": {
                                background: "#000",
                                color: '#fff'
                            }
                        }}>
                        {item}
                    </Typography>
                ))
            }
        </Stack>
    )
}
