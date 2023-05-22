import {Typography, Button, Stack, Box} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ScheduleMeetingModal from '../components/ScheduleMeetingModal';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/Topbar';

function Profile() {
    const {username} = useParams();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <Stack direction="row" spacing={2}>
        <Sidebar />
        <Box sx={{flex:9}}>
            <Topbar />
            <Typography>
                Welcome to {username}'s profile
            </Typography>
            <Button onClick={handleOpen} variant='contained'>Schedule meeting</Button>
            <ScheduleMeetingModal open={open} handleClose={handleClose}/>
        </Box>  
    </Stack>
  )
}

export default Profile;
