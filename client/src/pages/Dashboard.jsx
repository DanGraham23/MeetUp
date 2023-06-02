import {Stack, Box} from '@mui/material';

import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/Topbar';
import Calendar from '../components/Calendar';
import Settings from '../components/Settings';
import Friends from '../components/Friends';
import HelpCenter from '../components/HelpCenter';

import { useState, useEffect, useContext } from 'react';
import { EventProvider } from '../context/EventContext';

import {axiosPrivate} from '../utils/axios';
import { getUserRoute } from '../utils/routes';
import { UserContext } from '../context/UserContext';

function Profile() {
    const [dashboardView, setDashboardView] = useState("calendar");
    const {user, setUser} = useContext(UserContext);
    async function fetchUser(){
        await axiosPrivate.get(getUserRoute).then((res) => {
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
    <EventProvider>
    <Stack direction='column' spacing={1}>
        <Topbar />
        <Stack direction='row'>
            <Sidebar setDashboardView={setDashboardView}/>
            {
            dashboardView === "calendar" &&   
            <Box sx={{flex:9}}>
                <Box sx={{marginRight:'20px', marginTop:'20px'}}>
                    <Calendar/>
                </Box>
            </Box>}
            {
            dashboardView === "settings" &&
            <Box sx={{flex:9}}>

                <Settings />
            </Box>
            }
            {
            dashboardView === "help" &&
            <Box sx={{flex:9}}>

                <HelpCenter />
            </Box>
            }
            {
            dashboardView === "friends" &&
            <Box sx={{flex:9}}>

                <Friends />
            </Box>
            }
        </Stack>
    </Stack>
    </EventProvider>
  )
}

export default Profile;
