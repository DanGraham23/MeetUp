import { useState, createContext } from "react";

export const EventContext = createContext();

export const EventProvider = ({children}) => {
    const [events, setEvents] = useState([]);

    return (
        <EventContext.Provider value={{events, setEvents}}>{children}</EventContext.Provider>
    )
};