import { Box, Button, Typography, Divider, MenuItem, ListItemText, styled } from '@mui/material';
import { axiosPrivate } from '../../utils/axios';
import { addFriendRoute } from '../../utils/routes';

const StyledBox = styled(Box)(({theme}) => ({
  padding: '8px 16px',
  minHeight: '48px',
  whiteSpace: 'nowrap',
  fontWeight: '400',
  lineHeight: '1.5',
  color: theme.palette.text.primary,
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap:'10px',
}));

function DropdownMenuItem({id, email}) {

  async function addFriend(e){
    await axiosPrivate.post(`${addFriendRoute}/${id}`).then((res) => {
      console.log("friend added");
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
    <StyledBox>
        <ListItemText>
            {email}
        </ListItemText>
        <Button 
        variant='contained' 
        onClick={addFriend} 
        sx={{maxWidth: '40px', maxHeight: '30px', minWidth: '40px', minHeight: '30px', fontSize:'14px'}}>Add</Button>
    </StyledBox>
    </>
  );
}

export default DropdownMenuItem;