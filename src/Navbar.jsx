import { Box, Typography } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <>
        <Box sx={{p:2, bgcolor:'#2196f3', display: 'flex', justifyContent:'space-around'}}>
            <Typography sx={{
                fontWeight: 600,
                color: 'white'
            }}>
                Logo
            </Typography>
            <Box sx={{ display: 'flex', columnGap: '30px', color:'white'}}>
                <Typography>Home</Typography>
                <Typography>About</Typography>
                <Typography>Contact</Typography>
            </Box>
        </Box>
    </>
  )
}

export default Navbar