import {Container, Link, Typography} from '@mui/material';

function Home() {
  return (
    <Container >
      <Typography>
        Login or register to schedule a meeting
      </Typography>
      <Link href='/dashboard/bobby'>
        <Typography>
          Click here to checkout a profile
        </Typography>
      </Link>
    </Container>
  )
}

export default Home;
