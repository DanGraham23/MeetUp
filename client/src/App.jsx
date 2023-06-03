import {Box} from '@mui/material';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useContext } from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useThemeContext } from './theme/ThemeContext';
import {CssBaseline, ThemeProvider} from '@mui/material';
import { UserContext } from './context/UserContext';

import Calendar from './pages/Calendar';
import Friends from './pages/Friends';
import Settings from './pages/Settings';
import HelpCenter from './pages/HelpCenter';

import { axiosPrivate } from './utils/axios';
import { getUserRoute } from './utils/routes';

function App() {
  const {setUser} = useContext(UserContext);
  const {theme} = useThemeContext();
  
  async function fetchUser(){
    await axiosPrivate.get(getUserRoute).then((res) => {
        setUser(res.data);
    }).catch((err) => {
        console.log(err);
    });
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard/calendar' element={<Calendar />}/>
            <Route path='/dashboard/friends' element={<Friends />}/>
            <Route path='/dashboard/settings' element={<Settings />}/>
            <Route path='/dashboard/help' element={<HelpCenter />}/>
            <Route path='*' element={<Home />}/>  
          </Routes>
        </Box>
      </BrowserRouter>
      <CssBaseline enableColorScheme/>
    </ThemeProvider>
  )
}

export default App;

