import {Container, Grid, TextField} from '@mui/material';


function ScheduleMeeting() {
  return (
    <Container sx={{backgroundColor:'#e8e8e8', minHeight:'600px'}}>
        <Grid container>
            {/* Get user information */}
            <Grid item xs={6}>
                <TextField fullWidth>

                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth>

                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth>

                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth>

                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth>

                </TextField>
            </Grid>
            {/* Get address information */}
            <Grid item xs={12}>
                <TextField fullWidth>

                </TextField>
            </Grid>
            <Grid item xs={4}>
                <TextField fullWidth>

                </TextField>
            </Grid>
            <Grid item xs={4}>
                <TextField fullWidth>

                </TextField>
            </Grid>
            <Grid item xs={4}>
                <TextField fullWidth>

                </TextField>
            </Grid>

            {/* Get meeting information */}
            <Grid item xs={6}>
                <TextField fullWidth>

                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth>

                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth>

                </TextField>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ScheduleMeeting