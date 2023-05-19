import {CssBaseline} from '@mui/material';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/profile/:username' element={<Profile />}/>
        </Routes>
      </BrowserRouter>
      <CssBaseline />
    </>
  )
}

export default App
