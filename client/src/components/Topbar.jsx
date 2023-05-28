import {Typography, Avatar, Stack, styled } from '@mui/material';

const StyledStack = styled(Stack)(({theme})=> ({
  borderBottom: `1px solid ${theme.palette.text.primary}`,
}));

function Topbar() {
  return (
    <StyledStack direction='row' alignItems='center' gap='10px' height='80px'>
        <Typography variant='h4' marginLeft='40px'>MeetUp</Typography>
        <Avatar alt='John Doe' src="https://material-ui.com/static/images/avatar/1.jpg" sx={{marginLeft:'auto'}}/>
        <Typography variant='h6' marginRight='20px'>John Doe</Typography>
    </StyledStack>
  )
}

export default Topbar;
