import { Box, Stack, Typography, colors } from '@mui/material'
import React from 'react'

const logoStyle = {
    height: '100px',
    width: '100px',
    objectFit: 'contain'
}

export default function Partners() {
    return (
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',p:12}}>
            <Typography sx={{color:'#0006',fontSize:'20px',fontWeight:600}}>
                Trusted Clients
            </Typography>
            <Typography sx={{fontSize:'30px',fontWeight:800}}>
                Our Partners in Innovation
            </Typography>
            <Stack direction={"row"} spacing={6} sx={{mt:3}}>
                <img style={logoStyle} src='https://s3-alpha-sig.figma.com/img/91fb/52cf/60d6bf2c8aa2bfad87988373fe498a45?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gc0i5CDMMHG2xmnkeS-KZXOZM~4tpZMu4HXjMlmbgDNk5gFoYdHBEGtK-YjKc5Kkd4NffwX1dzLGnukU3zYOjy8b1ruOoOO6R3bouTJdxJ~rv8-tSHIcn3P2R~HIKWmw2b2LBwlCyGP1CvP12xQnwd4tQ~xUkUIuJ2aFkPhIjdS3lfzUTZVXcHjLlx27uJd-BrdXJgr6sZasxFS7JI5Y-sH-QWWKjI3nIXA5d9qxLkis-zDPeU~OQnNCVHHL9-XEcorBSZcZhfw-ofFEw1DgE3stmaFAvXRhuY-wxv~hCpw4sFVIDgbqzS5XlXOu0ApXtqe5hXqynsSj-go6yroZRA__' />
                <img style={logoStyle} src='https://s3-alpha-sig.figma.com/img/edb9/b548/6e79faec39e3746a21467a495595c21c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ir5bHI0HDb1AUZ8MnoMq4Nb22nc6HFS-5k-nnWg03hvdIVvbRVbw4~5Kmnz7UzVhVdMlyZSCeCfCmfe66ybxfFNHjtWRdcMFNG8j3-NPSYd3pGipthS2c~gAuUmLVZTcaFVuirXZ5kHyPNG5DbZfMq1UAA9dr~on5O5MtTDZFHdsR442Bj1Eab~8jwWUmus9jzSs6d-jhwupX6tIA6JEJj1pla8AW6jHJ5Rc~9SRs7arAUyjrz~d6bAxQjsWkfayfYEWUfHauMJRDB927sYT0k~64wGMPn8Lkpl4qguKt9~ZY9bjkHV~dGRZaRlPJ~VW5ByAr5rcLj1yqa6gUgTvLg__' />
                <img style={logoStyle} src='https://s3-alpha-sig.figma.com/img/cfc0/9e3a/8a478225ed0cec6f54741a6d44ee0320?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YzYQ89cOh9pKCGBJEvaeoxigyQGiC7kV-oY2vwH4570UtyAlBzJLoZ2Ly4Bqn1eTTfyOHPBCPZf9O9CDNdGgrUR-52BCck2LCfI1eUufog13p-coqg0raR-VNu9D~K7d-T~N~WzwPkjgj6FPgdyzVojjHspQSxwrF4MRYF3EQOcjPxtmKiWj382ReTCVPRiEfhjdL~nPPQ3rnfqouqpMV36NwND9-jGi7clyTkcKlWLEY7GOf2LgVHwMWU1rZHrw1w0vCCCx5da1DfbfJP3upvtdMDJd-paDqIbjKDgJB-UjaFQPQrUNqwVR76jyz63zPpSeLPaPLxZGuQZgahjyfg__' />
                <img style={logoStyle} src='https://s3-alpha-sig.figma.com/img/a24d/f9ca/89ec9002294126ffd6df87fc248be3a2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fSU4CBdxK-ZKqLWraa24Enamf94AMyl5~7TDPhYtgX9ghWOXUEsCh54CJWKTkLtWOVEJJgzB9SZUy-gQz1WEPtfJ5kMSQkfTCFR8JAaP7qW0wNg5PDZv2TEQneVHvTUeGVCLH1Wh~~~~oCNx9wLCT-OxEnf9mdD1nZRBbnisnqiAZdRPmVmvBlDLoqaFB8VD6tz8Nu-lAtZfy1YY9eQp2Fa7CmS2G6Kko4eF8gJsBNrGyPm53fk55IPgVbO~~Cj2-NX4gBKQWkWJZGKoC0w-8iKXvlst~49eaOD5s9go3zpDzxXgWhp05hTVOgbLWxMeLhKSCne1IZtxLBZVLb7lZg__' />
                <img style={logoStyle} src='https://s3-alpha-sig.figma.com/img/edb9/b548/6e79faec39e3746a21467a495595c21c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ir5bHI0HDb1AUZ8MnoMq4Nb22nc6HFS-5k-nnWg03hvdIVvbRVbw4~5Kmnz7UzVhVdMlyZSCeCfCmfe66ybxfFNHjtWRdcMFNG8j3-NPSYd3pGipthS2c~gAuUmLVZTcaFVuirXZ5kHyPNG5DbZfMq1UAA9dr~on5O5MtTDZFHdsR442Bj1Eab~8jwWUmus9jzSs6d-jhwupX6tIA6JEJj1pla8AW6jHJ5Rc~9SRs7arAUyjrz~d6bAxQjsWkfayfYEWUfHauMJRDB927sYT0k~64wGMPn8Lkpl4qguKt9~ZY9bjkHV~dGRZaRlPJ~VW5ByAr5rcLj1yqa6gUgTvLg__' />
            </Stack>

            <Stack direction={"row"} spacing={6}>
                <img style={logoStyle} src='https://s3-alpha-sig.figma.com/img/91fb/52cf/60d6bf2c8aa2bfad87988373fe498a45?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gc0i5CDMMHG2xmnkeS-KZXOZM~4tpZMu4HXjMlmbgDNk5gFoYdHBEGtK-YjKc5Kkd4NffwX1dzLGnukU3zYOjy8b1ruOoOO6R3bouTJdxJ~rv8-tSHIcn3P2R~HIKWmw2b2LBwlCyGP1CvP12xQnwd4tQ~xUkUIuJ2aFkPhIjdS3lfzUTZVXcHjLlx27uJd-BrdXJgr6sZasxFS7JI5Y-sH-QWWKjI3nIXA5d9qxLkis-zDPeU~OQnNCVHHL9-XEcorBSZcZhfw-ofFEw1DgE3stmaFAvXRhuY-wxv~hCpw4sFVIDgbqzS5XlXOu0ApXtqe5hXqynsSj-go6yroZRA__' />
                <img style={logoStyle} src='https://s3-alpha-sig.figma.com/img/edb9/b548/6e79faec39e3746a21467a495595c21c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ir5bHI0HDb1AUZ8MnoMq4Nb22nc6HFS-5k-nnWg03hvdIVvbRVbw4~5Kmnz7UzVhVdMlyZSCeCfCmfe66ybxfFNHjtWRdcMFNG8j3-NPSYd3pGipthS2c~gAuUmLVZTcaFVuirXZ5kHyPNG5DbZfMq1UAA9dr~on5O5MtTDZFHdsR442Bj1Eab~8jwWUmus9jzSs6d-jhwupX6tIA6JEJj1pla8AW6jHJ5Rc~9SRs7arAUyjrz~d6bAxQjsWkfayfYEWUfHauMJRDB927sYT0k~64wGMPn8Lkpl4qguKt9~ZY9bjkHV~dGRZaRlPJ~VW5ByAr5rcLj1yqa6gUgTvLg__' />
                <img style={logoStyle} src='https://s3-alpha-sig.figma.com/img/cfc0/9e3a/8a478225ed0cec6f54741a6d44ee0320?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YzYQ89cOh9pKCGBJEvaeoxigyQGiC7kV-oY2vwH4570UtyAlBzJLoZ2Ly4Bqn1eTTfyOHPBCPZf9O9CDNdGgrUR-52BCck2LCfI1eUufog13p-coqg0raR-VNu9D~K7d-T~N~WzwPkjgj6FPgdyzVojjHspQSxwrF4MRYF3EQOcjPxtmKiWj382ReTCVPRiEfhjdL~nPPQ3rnfqouqpMV36NwND9-jGi7clyTkcKlWLEY7GOf2LgVHwMWU1rZHrw1w0vCCCx5da1DfbfJP3upvtdMDJd-paDqIbjKDgJB-UjaFQPQrUNqwVR76jyz63zPpSeLPaPLxZGuQZgahjyfg__' />
                <img style={logoStyle} src='https://s3-alpha-sig.figma.com/img/a24d/f9ca/89ec9002294126ffd6df87fc248be3a2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fSU4CBdxK-ZKqLWraa24Enamf94AMyl5~7TDPhYtgX9ghWOXUEsCh54CJWKTkLtWOVEJJgzB9SZUy-gQz1WEPtfJ5kMSQkfTCFR8JAaP7qW0wNg5PDZv2TEQneVHvTUeGVCLH1Wh~~~~oCNx9wLCT-OxEnf9mdD1nZRBbnisnqiAZdRPmVmvBlDLoqaFB8VD6tz8Nu-lAtZfy1YY9eQp2Fa7CmS2G6Kko4eF8gJsBNrGyPm53fk55IPgVbO~~Cj2-NX4gBKQWkWJZGKoC0w-8iKXvlst~49eaOD5s9go3zpDzxXgWhp05hTVOgbLWxMeLhKSCne1IZtxLBZVLb7lZg__' />
                <img style={logoStyle} src='https://s3-alpha-sig.figma.com/img/edb9/b548/6e79faec39e3746a21467a495595c21c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ir5bHI0HDb1AUZ8MnoMq4Nb22nc6HFS-5k-nnWg03hvdIVvbRVbw4~5Kmnz7UzVhVdMlyZSCeCfCmfe66ybxfFNHjtWRdcMFNG8j3-NPSYd3pGipthS2c~gAuUmLVZTcaFVuirXZ5kHyPNG5DbZfMq1UAA9dr~on5O5MtTDZFHdsR442Bj1Eab~8jwWUmus9jzSs6d-jhwupX6tIA6JEJj1pla8AW6jHJ5Rc~9SRs7arAUyjrz~d6bAxQjsWkfayfYEWUfHauMJRDB927sYT0k~64wGMPn8Lkpl4qguKt9~ZY9bjkHV~dGRZaRlPJ~VW5ByAr5rcLj1yqa6gUgTvLg__' />
            </Stack>
        </Box>
    )
}
