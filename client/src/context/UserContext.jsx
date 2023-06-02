import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        country: '',
    });

    return (
        <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
    )
};
