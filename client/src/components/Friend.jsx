import {Avatar, Typography, Stack} from '@mui/material';

function Friend({firstName, lastName, email, phoneNumber}) {
  return (
   <>
    <Stack direction='row' alignItems='center' gap={2}>
      <Avatar 
      alt='John Doe' 
      src="https://material-ui.com/static/images/avatar/1.jpg" 
      sx={{ width: 50, height: 50}}/>
      <Typography variant='h6'>
        {firstName} {lastName}
      </Typography>
      <Typography>
        {email}
      </Typography>
      <Typography>
        {phoneNumber}
      </Typography>
      </Stack>
   </>
  )
}

export default Friend;
