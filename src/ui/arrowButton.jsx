import { ArrowOutward } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function ArrowButton({variant='outline',children, ...props}) {
    return (
        <Stack direction={'row'}
            sx={{
                justifyContent: 'space-between',
                border: variant == 'outline' && '2px solid #fff',
                borderRadius: '12px', p: 1,
                alignItems: 'center',
                minWidth: '140px',
                maxWidth:'250px',
                cursor: 'pointer',
                backgroundColor : variant == 'fill' && '#fff'
            }} 
            {...props}
            >
            <Typography sx={{ color: variant == 'outline' ? '#fff' : '#000', fontSize: 14,fontWeight:600}}>{children}</Typography>
            <ArrowOutward sx={{ color: variant == 'outline' ? '#fff' : '#000' }} />
        </Stack>
    )
}
