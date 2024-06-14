import { Box, Typography, Modal, styled, IconButton } from '@mui/material';
import ScheduleMeeting from '../components/ScheduleMeeting';
import CloseIcon from '@mui/icons-material/Close';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '650px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  border: '2px solid black',
  boxShadow: 24,
  paddingTop: 25,
}));

function ScheduleMeetingModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <IconButton
          size="medium"
          onClick={handleClose}
          sx={{ marginLeft: 'auto', marginRight: '10%' }}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
        <Typography variant="h6" component="h2">
          Schedule a meeting
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, marginBottom: '10px' }}
        >
          Fill out this form to let me know about this meeting
        </Typography>
        <ScheduleMeeting handleClose={handleClose} />
      </StyledBox>
    </Modal>
  );
}

export default ScheduleMeetingModal;
