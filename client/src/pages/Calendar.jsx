import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { useContext, useEffect, useState} from 'react';
import {EventContext} from '../context/EventContext';

import {styled} from '@mui/material';

import DashboardView from '../components/DashboardView';
import EventInfoModal from '../components/EventInfoModal';

import {getEventsRoute} from '../utils/routes';
import {axiosPrivate} from '../utils/axios';

function Calendar() {
  const {events, setEvents} = useContext(EventContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

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
                  guest: {
                    id: newEvent.guest_id,
                    email: newEvent.guest_email
                  },
                  host: {
                    id: newEvent.host_id,
                    email: newEvent.host_email
                  }
                },
              }
          });
          setEvents(newEvents);
      }).catch((err) => {
          console.log(err);
      }).finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (events === null || events.length === 0){
      fetchEvents();
    }
  }, []);

    function handleEventClick(info){
      handleOpen();
      setSelectedEvent(info.event);
    }

  return (
    <DashboardView>
      {loading ? <div>Loading...</div> : <><StyledFullCalendarWrapper>
        <FullCalendar 
        themeSystem='slate'
        eventClick={handleEventClick}
        eventInteractive
        {...configFullCalendar}  
        />
      </StyledFullCalendarWrapper>   
      <EventInfoModal open={open} handleClose={handleClose} selectedEvent={selectedEvent}/></>}
    </DashboardView>
  )
}

export default Calendar;
