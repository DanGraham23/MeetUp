import {AppBar, Typography, Toolbar, Link} from '@mui/material';

function Navbar() {
  return (
    <AppBar
    position='fixed'
    sx={{height:'64px', display:'flex', alignItems:'center', justifyContent:'center'}}
    >
      <Toolbar>
        <Link href='/' color='inherit' underline='none'>
          <Typography variant='h5' component='h1'>
            MeetUp
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
