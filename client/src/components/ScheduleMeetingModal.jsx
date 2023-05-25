import { Box, Typography, Modal, styled } from '@mui/material';
import ScheduleMeeting from '../components/ScheduleMeeting';

const StyledBox = styled(Box)(({theme})=> ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '70%',
  backgroundColor:theme.palette.background.default,  
  border: '2px solid black',
  boxShadow: 24,
  overflowY: 'scroll',
  paddingTop:25,
}));

function ScheduleMeetingModal({open, handleClose}) {
  return (
    <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <StyledBox>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Schedule a meeting!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Fill out this form to let me know about this meeting
          </Typography> */}
          <ScheduleMeeting handleClose={handleClose}/>
        </StyledBox>
      </Modal>
  )
}

export default ScheduleMeetingModal;
