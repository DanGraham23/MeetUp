import {Box, CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

const theme = createTheme({
  palette: {
    mode:'dark'
  }
})

function App() {

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

