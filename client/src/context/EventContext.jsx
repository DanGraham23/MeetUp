import { useState, createContext } from "react";

export const EventContext = createContext();

export const EventProvider = ({children}) => {
    const [events, setEvents] = useState([
        // { id: '1',
        // title: 'Advisor Meeting',
        // start: '2023-05-28T10:00:00',
        // end: '2023-05-28T10:30:00',
        // extendedProps: {
        //     location: 'Online',
        //     description: 'Discuss project updates',
        //     },
        // },
    ]);

    return (
        <EventContext.Provider value={{events, setEvents}}>{children}</EventContext.Provider>
    )
};