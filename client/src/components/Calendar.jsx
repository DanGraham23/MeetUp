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
    '--fc-border-color': theme.palette.text.primary,
    '--fc-button-text-color': theme.palette.text.primary,
    '--fc-button-bg-color': theme.palette.background.default,
    '--fc-button-border-color': theme.palette.text.primary,
    '--fc-button-hover-bg-color': theme.palette.primary.main,
    '--fc-button-hover-text-color': theme.palette.text.primary,
    '--fc-button-hover-border-color': theme.palette.background.default,
    '--fc-button-active-bg-color': theme.palette.primary.dark,
    '--fc-button-active-border-color': theme.palette.text.primary,
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
      eventClick={(info) => info.event.remove()}
      eventInteractive
      {...configFullCalendar}  
      />
    </StyledFullCalendarWrapper>
    
  )
}

export default Calendar;
