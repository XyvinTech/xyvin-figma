import { ArrowDropDown, ArrowOutward } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowButton from '../../ui/arrowButton';

const pages = [
    {
        label: 'Services',
        extendable: true
    },
    {
        label: 'Case Studies',
        extendable: true
    },
    {
        label: 'Blog',
        extendable: false
    },
    {
        label: 'Company',
        extendable: true
    }];



export default function Pages() {
    return (
        <Stack direction={'row'} spacing={5} sx={{ alignItems: 'center' }}>
            {
                pages.map((item) => {
                    return (
                        <Stack direction={'row'} sx={{ alignItems: 'center',cursor:"pointer" }}>
                            <Typography sx={{ color: '#fff', fontSize: 14 }}>
                                {item.label}
                            </Typography>
                            {item.extendable && <ArrowDropDown sx={{ color: '#fff' }} />}
                        </Stack>
                    )
                })
            }
            <ArrowButton>Contact us</ArrowButton>
        </Stack>
    )
}
