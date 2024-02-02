import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as XyvinLogo } from '../../assets/logo.svg';

export default function Logo({variant="simple"}) {
    return (
        <Stack direction={'row'}
            component="a"
            href="#index"
            sx={{
                textDecoration: 'none',
                filter: variant=='invert' && 'invert()'
            }}
        >
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <XyvinLogo style={{ height: 50, width: 70 }} />
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <XyvinLogo style={{ height: 30, width: 50 }} />
            </Box>
            <Typography
                variant="h6"
                noWrap
                sx={{
                    mr: 2,
                    mt: 0,
                    fontFamily: 'Michroma',
                    fontWeight: 400,
                    fontSize: { xs: '15px', md: '20px' },
                    lineHeightL: '35px',
                    color: '#fff',

                }}
            >
                Xyvin
            </Typography>
        </Stack>
    )
}
