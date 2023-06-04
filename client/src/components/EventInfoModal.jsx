import { Box, Typography, Modal, styled, IconButton, Stack, Button  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { axiosPrivate } from '../utils/axios';
import { deleteEventRoute } from '../utils/routes';

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

const StyledButton = styled(Button)(({theme}) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  }));

function EventInfoModal({open, handleClose, selectedEvent}) {

    async function handleDeleteEvent(){
        if (selectedEvent){
            await axiosPrivate.delete(`${deleteEventRoute}/${selectedEvent.id}`).then((res) => {
                console.log("event removed");
            }).catch((err) => {
                console.log(err);
            });
        }
    }

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
        {selectedEvent && <Stack gap={2}>
            <Typography variant="h4" component='h2' textAlign='center'>
                {selectedEvent.title}
            </Typography>
            <Typography>
                {'Guest: ' + selectedEvent.extendedProps.guest.email}
            </Typography>
            <Typography>
                {'Description: ' + selectedEvent.extendedProps.description}
            </Typography>
            <Typography>
                {'Start time: ' + selectedEvent.start}
            </Typography>
            <Typography>
                {'End time: ' + selectedEvent.end}
            </Typography>
            <Stack direction='row' gap={2} alignItems='center'>
                <Typography>
                    Do you need to cancel this meeting?
                </Typography>
                <StyledButton variant='contained' onClick={handleDeleteEvent}>Cancel</StyledButton>
            </Stack>
            </Stack>}
        </StyledBox>
      </Modal>
  )
}

export default EventInfoModal;