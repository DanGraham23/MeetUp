import {Box, CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

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

