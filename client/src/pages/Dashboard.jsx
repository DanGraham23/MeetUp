import {Stack, Box} from '@mui/material';

import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/Topbar';
import Calendar from '../components/Calendar';
import Settings from '../components/Settings';
import Friends from '../components/Friends';
import HelpCenter from '../components/HelpCenter';

import { useState, useEffect, useContext } from 'react';

import {axiosPrivate} from '../utils/axios';
import { getEventsRoute, getUserRoute } from '../utils/routes';
import { UserContext } from '../context/UserContext';
import { EventContext } from '../context/EventContext';

function Profile() {
    const [dashboardView, setDashboardView] = useState("calendar");
    const {user, setUser} = useContext(UserContext);
    const {events, setEvents} = useContext(EventContext);

    async function fetchUser(){
        await axiosPrivate.get(getUserRoute).then((res) => {
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }
    async function fetchEvents(){
        await axiosPrivate.get(getEventsRoute).then((res) => {
            setEvents((prevEvents) => [...prevEvents, res.data])
        }).catch((err) => {
            console.log(err);
        });
    }
    useEffect(() => {
        if (user){
            fetchEvents();
        }
    }, [user]);

    useEffect(() => {
        fetchUser();
    }, []);

    return (
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
  )
}

export default Profile;
