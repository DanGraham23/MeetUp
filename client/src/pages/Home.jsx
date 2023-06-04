import {Container, Link, Typography} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("meetup-user")!== null){
        navigate('/dashboard/calendar');
    }
    }, []);

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
      <Link href='/dashboard'>
        <Typography>
          Click here to checkout a profile (must login to see actual data)
        </Typography>
      </Link>
    </Container>
  )
}

export default Home;
