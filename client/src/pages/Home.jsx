import {Container, Link, Typography} from '@mui/material';

function Home() {
  return (
    <Container >
      <Link href='/register'>
        <Typography>
          Click here to register
        </Typography>
      </Link>
      <Link href='/login'>
        <Typography>
          Click here to login
        </Typography>
      </Link>
      <Link href='/dashboard/bobby'>
        <Typography>
          Click here to checkout a profile
        </Typography>
      </Link>
    </Container>
  )
}

export default Home;
