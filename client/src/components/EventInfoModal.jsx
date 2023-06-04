import { Box, Typography, Modal, styled, IconButton  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const StyledBox = styled(Box)(({theme})=> ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '600px',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  backgroundColor:theme.palette.background.default,  
  border: '2px solid black',
  boxShadow: 24,
  paddingTop:25,
}));

function EventInfoModal({open, handleClose, selectedEvent}) {
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <IconButton size='medium' onClick={handleClose} sx={{marginLeft:'auto', marginRight:'10%'}}>
            <CloseIcon fontSize='medium'/>
          </IconButton>
        {selectedEvent && <Box>
            <Typography variant="h6" component="h2">
                {'Meeting: ' + selectedEvent.title}
            </Typography>
            <Typography variant="h6" component="h2">
                {'Start time: ' + selectedEvent.start}
            </Typography>
            <Typography variant="h6" component="h2">
                {'End time: ' + selectedEvent.end}
            </Typography>
            <Typography>
                {'Guest: ' + selectedEvent.extendedProps.guest.email}
            </Typography>
            <Typography>
                {'Description: ' + selectedEvent.extendedProps.description}
            </Typography>
            </Box>}
        </StyledBox>
      </Modal>
  )
}

export default EventInfoModal;