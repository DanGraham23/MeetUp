import {Box, CssBaseline, ThemeProvider} from '@mui/material';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { useThemeContext } from './theme/ThemeContext';

function App() {

  const {theme} = useThemeContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Box>
              <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/' element={<Home />}/>
                <Route path='/dashboard/:username' element={<Dashboard />}/>
                <Route path='*' element={<Home />}/>  
              </Routes>
            </Box>
          </BrowserRouter>
          <CssBaseline />
      </ThemeProvider>
    </>
  )
}

export default App;

