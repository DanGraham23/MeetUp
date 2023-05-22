import {
    Box, 
    styled, 
    List, ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Divider,
} from '@mui/material';

import Search from './Search';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeSwitch from './DarkModeSwitch';

const StyledBox = styled(Box)(({theme}) => ({
    backgroundColor: '#fffff7',
    flex: 2,
    padding: 20,
    height: '100vh',
}));

function Sidebar() {
  return (
    <StyledBox>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding sx={{padding:'8px 16px 8px 16px'}}>
            <Search />
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ViewQuiltIcon/>
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
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
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HelpCenterIcon/>
              </ListItemIcon>
              <ListItemText primary="Help Center" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </StyledBox>
  )
}

export default Sidebar;
