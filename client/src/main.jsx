import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeContextProvider } from './theme/ThemeContext.jsx';
import { AuthProvider } from './context/AuthContext';
import { EventProvider } from './context/EventContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthProvider>
        <EventProvider>
          <App />
        </EventProvider>
      </AuthProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
