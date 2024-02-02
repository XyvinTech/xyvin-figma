import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowButton from '../ui/arrowButton';
import { Description } from '@mui/icons-material';

const industryDetailData = [
  {
    title: 'Ed - tech',
    description: 'The purpose of this document is to outline the software requirements for the development of the Xyvin website. The website serves as a digital platform to showcase',
    image: 'https://imgeng.jagran.com/images/2024/jan/EDtechPlatformsForSpecialKids1706598125494.jpg',
    url: ''
  },
  {
    title: 'Cloud Solution',
    description: 'The purpose of this document is to outline the software requirements for the development of the Xyvin website. The website serves as a digital platform to showcase',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww',
    url: ''
  },
  {
    title: 'AeroSpace',
    description: 'The purpose of this document is to outline the software requirements for the development of the Xyvin website. The website serves as a digital platform to showcase',
    image: 'https://www.sustainair.eu/wp-content/uploads/2022/03/shutterstock_1048379746-1-1887x1080.jpg',
    url: ''
  },
  {
    title: 'Automation',
    description: 'The purpose of this document is to outline the software requirements for the development of the Xyvin website. The website serves as a digital platform to showcase',
    image: 'https://www.imec-int.com/sites/default/files/2021-06/Automotive-technologies.jpg',
    url: ''
  },
]

const IndustyDetail = ({ isActive = true, data, ...props }) => {
  return (
    <Grid item sm={3}
      sx={{
        backgroundColor: isActive && '#0007',
        px: 4, pt: isActive ? 25 : 45,
        transition: 'padding 0.7s',
        cursor: !isActive && 'pointer',
        border: '1px solid #fff6',
        ":active": {
          pt: 25
        }
      }}
      {...props}
    >
      <Stack>
        <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '20px' }}>
          {data.title}
        </Typography>
        <Typography sx={{ color: '#fff', fontSize: '12px', my: 2 }}>
          {data.description}
        </Typography>
        <ArrowButton variant='fill'>View More</ArrowButton>
      </Stack>
    </Grid>
  )
}

export default function Industries() {

  const [selectIndex, setSelectedindex] = useState(0)
  
  return (
    <Box sx={{ width: '100%', position: 'relative' }} >
      <Typography sx={{position:'absolute',top:2, right:10, color:'#fff7',fontSize:'70px',fontWeight:600,zIndex:2}}>
        Industries
      </Typography>
      <Stack direction={"row"} sx={{ zIndex: 0, overflowY: 'hidden', height: '400px' }}>
        {
          industryDetailData.map((item, ind) => (
            <img id={`image${ind}`} src={`${item.image}`} style={{flex: '0 0 100%',objectFit: 'cover'}} />
          ))
        }
      </Stack>
      <Grid container sx={{ zIndex: 1, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: "hidden" }}>
        {
          industryDetailData.map((item, ind) => (
            <IndustyDetail data={item} isActive={selectIndex === ind}
              onClick={() => {
                setSelectedindex(ind)
                document.getElementById(`image${ind}`).scrollIntoView({ behavior: 'smooth',block:'nearest',inline:'nearest' })
              }} />
          ))
        }
      </Grid>
    </Box>
  )
}
