import {CssBaseline, Grid} from '@mui/material';
import ScheduleMeeting from './components/ScheduleMeeting';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <ScheduleMeeting />
      <CssBaseline />
    </>
  )
}

export default App
