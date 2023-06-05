import { Box, Button, Typography, Divider } from '@mui/material';
import { axiosPrivate } from '../../utils/axios';
import { addFriendRoute } from '../../utils/routes';

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
    <Box 
    sx={{width:'100%', backgroundColor:'white', height:'50px', display:'flex', alignItems:'center', justifyContent:'center',gap:'10px'}}>
        <Typography>
            {email}
        </Typography>
        <Button variant='contained' onClick={addFriend}>Add</Button>
    </Box>
    <Divider />
    </>
  );
}

export default DropdownMenuItem;