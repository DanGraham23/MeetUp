import { Box, Typography, Avatar, Stack  } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Topbar() {
  return (
    <Stack direction='row' alignItems='center' gap='10px' height='60px'>
        <Typography variant='h5'>MeetUp</Typography>
        <NotificationsNoneIcon sx={{marginLeft:'auto'}}/>
        <Avatar alt='John Doe'/>
        <Typography variant='h6' marginRight='100px'>John Doe</Typography>
    </Stack>
  )
}

export default Topbar;
