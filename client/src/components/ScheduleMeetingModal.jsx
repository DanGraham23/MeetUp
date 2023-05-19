import { Box, Typography, Modal } from '@mui/material';
import ScheduleMeeting from '../components/ScheduleMeeting';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'scroll',
  };

function ScheduleMeetingModal({open, handleClose}) {
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Schedule a meeting!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Fill out this form to let me know about this meeting
          </Typography>
          <ScheduleMeeting handleClose={handleClose}/>
        </Box>
      </Modal>
  )
}

export default ScheduleMeetingModal;
