import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { useContext} from 'react';
import {EventContext} from '../context/EventContext';

import {styled} from '@mui/material';

function Calendar() {
  const {events} = useContext(EventContext);


  const StyledFullCalendarWrapper = styled('div')(({theme}) => ({
    '.fc-toolbar button' : {
      color:theme.palette.text.primary,
      backgroundColor:theme.palette.background.default,
      '&:hover': {
        backgroundColor:theme.palette.action.hover,
      },
      '&:focus': {
        backgroundColor:theme.palette.action.selected,
      },
      '&:active': {
        backgroundColor:theme.palette.action.hover,
        color:'red'
      },
    }
  }));

    const configFullCalendar = {
        plugins: [dayGridPlugin, timeGridPlugin,interactionPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
            start: 'title',
            center: '',
            end: 'prev,next dayGridMonth,timeGridWeek,timeGridDay',
          },
        height:'80vh',
        events,
        dayMaxEventRows: true,
    }

    function handleEventClick(info){
      console.log(info);
    }

  return (
    <StyledFullCalendarWrapper>
      
      <FullCalendar 
      themeSystem='slate'
      eventClick={handleEventClick}
      eventInteractive
      {...configFullCalendar}  
      />
    </StyledFullCalendarWrapper>
    
  )
}

export default Calendar;
