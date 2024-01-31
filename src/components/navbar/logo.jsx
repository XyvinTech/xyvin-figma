import { Stack, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as XyvinLogo } from '../../assets/logo.svg';

export default function Logo() {
    return (
        <Stack direction={'row'}
            component="a"
            href="#index"
            sx={{
                textDecoration: 'none',
            }}
        >
            <XyvinLogo style={{ height: 50, width: 70 }} />
            <Typography
                variant="h6"
                noWrap
                sx={{
                    mr: 2,
                    mt: 0,
                    fontFamily: 'Michroma',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeightL: '35px',
                    color: '#fff',
                    
                }}
            >
                Xyvin
            </Typography>
        </Stack>
    )
}
