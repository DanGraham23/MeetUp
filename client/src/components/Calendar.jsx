import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import {styled} from '@mui/material';

function Calendar() {

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
        events: [
            { title: 'Advisor Meeting', date: '2023-05-24' },
            { title: 'Client Meeting', date: '2023-05-25' },
            { title: 'Class', date: '2023-05-24' },
            { title: 'Class 2', date: '2023-05-24' },
            { title: 'Class 3', date: '2023-05-24' },
            { title: 'Class 4', date: '2023-05-24' },
            { title: 'Class 5', date: '2023-05-24' },
            { title: 'Class 6', date: '2023-05-24' },
            { title: 'Class 7', date: '2023-05-25' }
        ],
        dayMaxEventRows: true,
    }

  return (
    <StyledFullCalendarWrapper>
      
      <FullCalendar 
      themeSystem='slate'
      {...configFullCalendar}    
      />
    </StyledFullCalendarWrapper>
    
  )
}

export default Calendar;
