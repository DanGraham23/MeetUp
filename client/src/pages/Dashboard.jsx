import {Stack, Box} from '@mui/material';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/Topbar';
import Calendar from '../components/Calendar';


function Profile() {

    return (
    <Stack direction='column' spacing={1}>
        <Topbar />
        <Stack direction='row'>
            <Sidebar />
            <Box sx={{flex:9}}>
                <Box sx={{marginRight:'20px', marginTop:'20px'}}>
                    <Calendar />
                </Box>
            </Box>  
        </Stack>
    </Stack>
  )
}

export default Profile;
