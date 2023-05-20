import {Box, CssBaseline} from '@mui/material';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Box style={{marginTop:'60px', paddingTop:'20px'}}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile/:username' element={<Profile />}/>
            <Route path='*' element={<Home />}/>  
          </Routes>
        </Box>
      </BrowserRouter>
      <CssBaseline />
    </>
  )
}

export default App;

