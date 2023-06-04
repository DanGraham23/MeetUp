import {Avatar, Typography, Stack, Button, styled} from '@mui/material';

import { convertPhoneNumber } from '../common/convert';

import axios, { axiosPrivate } from '../utils/axios';
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
        {convertPhoneNumber(phoneNumber)}
      </Typography>
      <StyledButton variant='contained' onClick={handleRemoveFriend}>Remove</StyledButton>
      </Stack>
   </>
  )
}

export default Friend;
