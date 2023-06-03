import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from './theme/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext';
import { EventProvider } from './context/EventContext';
import { UserProvider } from './context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthProvider>
        <UserProvider>
          <EventProvider>
            <App />
          </EventProvider>
        </UserProvider>
      </AuthProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
