import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar() {

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
        eventBackgroundColor:'#121212',
        eventBorderColor:'#4e4e4e',
        dayMaxEventRows: true,
    }

  return (
    <FullCalendar 
    themeSystem='slate'
    {...configFullCalendar}    
    />
  )
}

export default Calendar;
