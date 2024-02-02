import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowButton from '../ui/arrowButton'

export default function CaseStudies() {
    return (
        <Box sx={{ backgroundColor: '#000',overflow:'hidden' }}>
            <Grid container sx={{ pt: { xs: 10, md: 20 } }} spacing={0}>
                {/* 1st section of case Study */}
                <Grid item md={5}>
                    <Stack direction={'column'} p={5}>
                        <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '40px' }}>
                            Case Studies
                        </Typography>
                        <Typography sx={{ color: '#fff', fontSize: '12px', my: 2 }}>
                            The purpose of this document is to outline the software requirements for the development of the Xyvin website. The website serves as a digital platform to showcase
                        </Typography>
                        <ArrowButton width={'180px'} variant='fill'>View All</ArrowButton>
                    </Stack>
                </Grid>
                <Grid item md={7}>
                    <Grid container >
                        <Grid item md={6} >
                            <Box sx={{ width: '100%', height: '300px' }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'cover', margin: 0, overflowClipMargin: 'none' }} src='https://s3-alpha-sig.figma.com/img/3909/ea18/f7f28b14ea44951b320c1d39a2f82b59?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WUiPNwKEfCbCP~Ulm51rcBCP5TNQ2y97jKsyCBV66Vtld1wcANlGAw1HWD8Yf~J9nJK8rsxNwCD7heuI97KgPFjA71rdxwzpznf13gG-wVSjFHet50aSBmG3uP4Cf8tcIW5JeZ94n4vc9vuWKC7XzPUEnHGPrKi0W0kTehj~YVmNao~81Ig98q~g1aMvSCaqV5UsxrZArZwJEmdd6D~xpnWtRcX18a20USA1wszJVIDY3~JtLtfenl6Xoe49OA16ung~y-kZnPpxRi03yIL4V~Lr9uJLqUxUfytEi79OaoMbndm8Nr13fG9YfR7X7DNTx4xUPKwuQ-yxpaK9g~79~Q__' />
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Stack direction={'column'} p={6} sx={{ backgroundColor: '#0F0F0F', height: '100%' }}>
                                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '18px', lineHeight: '20px' }}>
                                    Case Studies of an example with old man
                                </Typography>
                                <Typography sx={{ color: '#fff', fontSize: '10px', my: 2 }}>
                                    The purpose of this document is to outline the software requirements for the development of the Xyvin website. The website serves as a digital platform to showcase
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

                {/* 2nd section of case Study */}
                <Grid item md={5} sx={{
                    backgroundImage: `url('https://s3-alpha-sig.figma.com/img/c69e/4951/920cc52a609d4f628dc2c96cd51da571?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z9TeKZ10ncA9o~IB9GJ5hkocKuDqS3bCZC1E~JjSkxxPextc08wvRm4MVVdq2pPx0HFowVI~Dk9fkV2PTv2CTFCaLMpNtMbsttRQI1lBSVKrWeJUd9T8r9wQPhPf7Xh-4hgDLbQeeQrUIXsxASvnikWwrKMo6fjjXTHJ3-~38OqD1dN0WfZpbMk1aeR9D0MOsNLSFSGbkF755LoBc6i9TRagWmBMhGF373su~8OGENPOAp4dDdKjhaZUWddChNinxZ64E7Pypp9gk-SKlMm3p6MI~UEfO4698A3Pyzi4sHBf4ATctz12r1eUqosT1KUdojMoP5eEnd7vcoHmR7GZtA__')`,
                    backgroundSize: '100% 100%',
                }}>
                    <Stack direction={'column'} p={6} sx={{
                        backgroundColor: '#fff8',
                        height: '100%'
                    }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '18px', lineHeight: '20px' }}>
                            Case Studies of an example with old man
                        </Typography>
                        <Typography sx={{ fontSize: '10px', my: 2 }}>
                            The purpose of this document is to outline the software requirements for the development of the Xyvin website. The website serves as a digital platform to showcase
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item md={7}>
                    <Grid container >
                        <Grid item md={6}>
                            <Stack direction={'column'} p={6} sx={{ backgroundColor: '#fff', height: '100%' }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '18px', lineHeight: '20px' }}>
                                    Case Studies of an example with old man
                                </Typography>
                                <Typography sx={{ fontSize: '10px', my: 2 }}>
                                    The purpose of this document is to outline the software requirements for the development of the Xyvin website. The website serves as a digital platform to showcase
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item md={6}>
                            <Box sx={{ width: '100%', height: '300px' }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'cover', margin: 0, overflowClipMargin: 'none' }}
                                    src='https://s3-alpha-sig.figma.com/img/6472/3752/0bce1c11781f089bc86e9d936892e3a5?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GC~oinZXhaRIyQ73UlOM-DpelqPALBVeEOq0WRXqXU8SOshXJDZ1TguVoUUZazxW5qcEa0xT~nM01abHSBVuYsfh3efzaPhCSiZbsTp09rMREmSlapbpggvU-zkteNc3sBjbyw1sdJeUdkk0cEzC3-OBZrJuNJ67eYj6gkmAfv3csz3ujp3dfWVX5-53wAKqik03Yi7hkh3svQLuAynnivHz9M~DUikM6OtbVFP6PtiyPKlTdGSOO5eK2zQwWMLF3ShHgFOr9q9-9vO4Nz72ZZp1C-UXm0NUyPTSvHd3KJqkwq7Ll0BAEU6MCMgn-i1VqeVEigD3qcR832GeEYkaxA__' />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>


                {/* 3rd section of case Study */}
                <Grid item md={5}>
                    <Grid container>
                        <Grid item md={4} >
                            <Box sx={{ width: '100%', height: '300px' }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'cover', margin: 0, overflowClipMargin: 'none' }}
                                    src='https://s3-alpha-sig.figma.com/img/f98e/3371/5ada70462ca95f0df462a51744e387d8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cOvu6h3XpO-iBG-WsT9e~o5GIrZbLNimnSrjieu6jEFrh9BTCwSZfCEifRoEe68Y7wtZF~eylcLyqBVMTBo2hhpntFENAoqTZu8tswYWHpRsW19aoaBtOrrGt8NodmFoRj-5T~sH-ruQex1hYni5VsCfa1UpH19IUrfaWz6vBpHHM5Q0Rmx9yb-zjhEKswag33xEjKJAam3bqlE85s-LV4sFsJH8RfwicjSfW-NCOZLLSqjbEA40rAPTx1WdsqIOmbHgq4Zf8cUKlbv-o8N~uHKk2fYtbVfVgRa2Ygc1HEC5yOfVdpahnckqW4V6Bjo3j5kWDdQWiKL9VQxhcmDaKw__' />
                            </Box>
                        </Grid>
                        <Grid item md={8} >
                            <Stack direction={'column'} pl={8} py={3} pr={3} sx={{ backgroundColor: '#fff', height: '100%' }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '18px', lineHeight: '20px' }}>
                                    Case Studies of an example with old man
                                </Typography>
                                <Typography sx={{ fontSize: '10px', my: 2 }}>
                                    The purpose of this document is to outline the software requirements for the development of the Xyvin website. The website serves as a digital platform to showcase
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={7} sx={{
                    backgroundImage: `url('https://s3-alpha-sig.figma.com/img/7347/d9e6/ff5e5ce00682a94154a56f0160272bc3?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ip~oI8vk-MnUhGq8rOiVlLjIHPaT3OK84RNbRCScuUcdur7FFzLjArqpV0Ugs6jYVXN~rHZ~BHGuSKU2uviPRxgVZQ3tTDkOHsxHnLpbAYB1X8Wi9ffZK4T6-63zg90emkb5o1q6Flp8hJ3wqQ2~fK0VlGlGVZJ99zTXvPtW7DShtms6ktHOBlZOM20NLi9k9LrTtP7ySEzAWxhm1f~Ne~LnVLT9wwoICrmkefPtyzD~tcv7f9dTZN19uQeNS81zqLzSc8aFf~SjXGzpy9Bwym5BYn~aar-UCKI0qU2~0SP3MVcGeFAptTHNpEeiyDwWPDtkhHNmYYHhv7HYK72MkQ__')`,
                    backgroundSize: '100% 100%',
                }}>
                    <Grid container sx={{height:'100%'}}>
                        <Grid item md={4} sx={{ backgroundColor: '#0009'}}></Grid>
                        <Grid item md={8}>
                            <Stack direction={'column'} pl={15} py={3} pr={3} sx={{ backgroundColor: '#0009', height: '100%' }}>
                                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '18px', lineHeight: '20px', textAlign: 'right' }}>
                                    Case Studies of an example with old man
                                </Typography>
                                <Typography sx={{ color: '#fff', fontSize: '10px', my: 2, textAlign: 'right' }}>
                                    The purpose of this document is to outline the software requirements for the development of the Xyvin website. The website serves as a digital platform to showcase
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>



            </Grid>
        </Box>
    )
}
