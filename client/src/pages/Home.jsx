import { Container, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Link href="/register">
        <Typography>Click here to register</Typography>
      </Link>
      <Link href="/login">
        <Typography>Click here to login</Typography>
      </Link>
      <Link href="/dashboard/calendar">
        <Typography>
          Click here to checkout your profile (must be logged in with valid JWT,
          if you cannot seem to access data, try logging in again!)
        </Typography>
      </Link>
    </Container>
  );
}

export default Home;
