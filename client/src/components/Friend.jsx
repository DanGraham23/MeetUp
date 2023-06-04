import {Avatar, Typography, Stack, Button, styled, Divider, Grid} from '@mui/material';

import { convertPhoneNumber } from '../common/convert';

import { axiosPrivate } from '../utils/axios';
import { deleteFriendRoute } from '../utils/routes';

const StyledButton = styled(Button)(({theme}) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.error.main,
  color: theme.palette.error.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
}));

function Friend({id, firstName, lastName, email, phoneNumber,friends, setFriends}) {


  async function handleRemoveFriend(e){
    const updatedFriends = friends.filter((friend) => friend.id != id);
    setFriends(updatedFriends);
    await axiosPrivate.delete(`${deleteFriendRoute}/${id}`).then((res) => {
      console.log("removed friend");
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
   <>
   <Grid container sx={{width:'70%'}} alignItems='center'>
      <Grid item xs={1}>
      <Avatar 
      alt='John Doe' 
      src="https://material-ui.com/static/images/avatar/1.jpg" 
      sx={{ width: 50, height: 50}}/>
      </Grid>
      <Grid item xs={2}>
      <Typography variant='h6'>
        {firstName} {lastName}
      </Typography>
      </Grid>
      <Grid item xs={2}>
      <Typography>
        {email}
      </Typography>
      </Grid>
      <Grid item xs={2}>
      <Typography>
        {convertPhoneNumber(phoneNumber)}
      </Typography>
      </Grid>
      <Grid item xs={2}>
      <StyledButton variant='contained' onClick={handleRemoveFriend}>Remove</StyledButton>
      </Grid>
   </Grid>
   <Divider/>
   </>
  )
}

export default Friend;
