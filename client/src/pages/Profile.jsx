import {Typography, Button, Container} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ScheduleMeetingModal from '../components/ScheduleMeetingModal';

function Profile() {
    const {username} = useParams();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <Container>
        <Typography>
            Welcome to {username}'s profile
        </Typography>
        <Button onClick={handleOpen} variant='contained'>Schedule meeting</Button>
        <ScheduleMeetingModal open={open} handleClose={handleClose}/>
    </Container>
  )
}

export default Profile;
