import {Box, Stack, Typography} from '@mui/material'

function HelpCenter() {
  return (
    <Stack gap={4}>
      <Typography variant='h4'>
        Need help navigating MeetUp?
      </Typography>
      <Typography variant='h6'>
        Search for users to add to your friends list by using the 'Search...' field.
      </Typography>
      <Typography variant='h6'>
        Schedule a meeting with a friend using the 'Schedule New Meeting' modal.
      </Typography>
      <Typography variant='h6'>
        The 'Friends' tab will allow you to view your current friends list.
      </Typography>
      <Typography variant='h6'>
        The 'Calendar' display will show your current event calendar with all scheduled events. Feel free to schedule more events or delete current ones!
      </Typography>
      <Typography variant='h6'>
        Dark mode will allow you to style the site theme according to your preference.
      </Typography>
      <Typography variant='h6'>
        Settings will allow you to change your account details if you need to update your personal or login information.
      </Typography>
    </Stack>
  )
}

export default HelpCenter;
