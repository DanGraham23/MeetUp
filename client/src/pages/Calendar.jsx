import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { useContext, useEffect} from 'react';
import {EventContext} from '../context/EventContext';

import {styled} from '@mui/material';

import DashboardView from '../components/DashboardView';

import {getEventsRoute} from '../utils/routes';
import {axiosPrivate} from '../utils/axios';

function Calendar() {
  const {events, setEvents} = useContext(EventContext);

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

    async function fetchEvents(){
      await axiosPrivate.get(getEventsRoute).then((res) => {
          const newEventsData = res.data;
          if (newEventsData.length == 0) return;
          const newEvents = newEventsData.map((newEvent) => {
              return { id: newEvent.id,
              title: newEvent.title,
              start: newEvent.startDate,
              end: newEvent.endDate,
              extendedProps: {
                  location: 'Online',
                  description: newEvent.description,
                  },
              }
          })
          setEvents((prevEvents) => [...prevEvents, ...newEvents])
      }).catch((err) => {
          console.log(err);
      });
  }

  useEffect(() => {
    fetchEvents();
  }, []);

    function handleEventClick(info){
      console.log(info);
    }

  return (
    <DashboardView>
      <StyledFullCalendarWrapper>
        <FullCalendar 
        themeSystem='slate'
        eventClick={(info) => info.event.remove()}
        eventInteractive
        {...configFullCalendar}  
        />
      </StyledFullCalendarWrapper>   
    </DashboardView>
  )
}

export default Calendar;
