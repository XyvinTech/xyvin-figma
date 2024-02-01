
import { AppBar, Stack, Toolbar,} from '@mui/material'
import React from 'react'
import Logo from './navbar/logo';
import Pages from './navbar/pages';




export default function Navbar({active}) {

return (
    <AppBar sx={{ backgroundColor: active ? '#000' : 'transparent', boxShadow: 'none', color: '#000' }} >
        <Toolbar disableGutters sx={{ px: 2 }}>
            <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Logo />
                <Pages />
            </Stack>
        </Toolbar>
    </AppBar>
)
}
