import {Avatar, Typography, Stack} from '@mui/material';

function Friend() {
  return (
   <>
    <Stack direction='row' alignItems='center' gap={2}>
      <Avatar 
      alt='John Doe' 
      src="https://material-ui.com/static/images/avatar/1.jpg" 
      sx={{ width: 50, height: 50}}/>
      <Typography>
        John Doe
      </Typography>
      <Typography>
        JohnDoe@Email.com
      </Typography>
      <Typography>
        (123)-456-7890
      </Typography>
      </Stack>
   </>
  )
}

export default Friend;
