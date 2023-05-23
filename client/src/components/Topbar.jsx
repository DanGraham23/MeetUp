import {Typography, Avatar, Stack } from '@mui/material';


function Topbar() {
  return (
    <Stack direction='row' alignItems='center' gap='10px' height='80px' borderBottom='1px solid white'>
        <Typography variant='h4' marginLeft='40px'>MeetUp</Typography>
        <Avatar alt='John Doe' src="https://material-ui.com/static/images/avatar/1.jpg" sx={{marginLeft:'auto'}}/>
        <Typography variant='h6' marginRight='20px'>John Doe</Typography>
    </Stack>
  )
}

export default Topbar;
