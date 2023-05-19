import {AppBar, Typography} from '@mui/material';

function Navbar() {
  return (
    <AppBar
    position='absolute'
    sx={{height:'64px', display:'flex', alignItems:'center', justifyContent:'center'}}
    >
        <Typography variant='h5' component='h1'>
            MeetUp
        </Typography>
    </AppBar>
  )
}

export default Navbar