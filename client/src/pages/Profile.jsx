import { Box, Typography, Modal, Button } from '@mui/material';
import ScheduleMeeting from '../components/ScheduleMeeting';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Profile() {
    const {username} = useParams();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <Box style={{marginTop:'60px'}}>
        {/* <Button onClick={handleOpen}>Schedule a meeting</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <ScheduleMeeting/>
      </Modal> */}
      <ScheduleMeeting/>
    </Box>
  )
}

export default Profile;
