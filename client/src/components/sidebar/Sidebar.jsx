import {
    Box, 
    styled, 
    List, ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Divider,
} from '@mui/material';

import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

import ScheduleMeetingModal from '../ScheduleMeetingModal';
import Search from './Search';
import DarkModeSwitch from './DarkModeSwitch';

const StyledBox = styled(Box)(({theme}) => ({
    flex: 2,
    padding: 20,
    height: '100vh',
}));

function Sidebar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <StyledBox>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding sx={{padding:'8px 16px 8px 16px'}}>
            <Search />
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOpen}>
              <ListItemIcon>
                <EditCalendarOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Schedule New Meeting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/dashboard/friends")}>
              <ListItemIcon>
                <PeopleIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/dashboard/calendar")}>
              <ListItemIcon>
                <CalendarMonthIcon/>
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding sx={{padding:'8px 16px 8px 16px'}}>
          <ListItemIcon>
              <DarkModeIcon/>
            </ListItemIcon>
            <ListItemText primary="Dark mode" />
            <DarkModeSwitch />
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="tertiary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton  onClick={() => navigate("/dashboard/settings")}>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onClick={() => {localStorage.removeItem('meetup-user'); navigate("/")}}>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/dashboard/help")}>
              <ListItemIcon>
                <HelpCenterIcon/>
              </ListItemIcon>
              <ListItemText primary="Help Center" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <ScheduleMeetingModal open={open} handleClose={handleClose}/>
    </StyledBox>
  )
}

export default Sidebar;
