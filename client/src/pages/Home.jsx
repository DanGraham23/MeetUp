import {Container, Link, Typography} from '@mui/material';

function Home() {
  return (
    <Container >
      <Link href='/profile/bobby'>
        <Typography>
          Click here to checkout a profile
        </Typography>
        
      </Link>
      <Typography>
        Login or register to schedule a meeting
      </Typography>
    </Container>
  )
}

export default Home;
