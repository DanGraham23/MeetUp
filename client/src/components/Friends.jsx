import {Box, Stack} from '@mui/material';
import Friend from './Friend';
import { useEffect, useState } from 'react';
import axios, { axiosPrivate } from '../utils/axios';
import { getFriendsRoute } from '../utils/routes';

function Friends() {

  const [friends, setFriends] = useState([]);

  async function fetchFriends(){
    await axiosPrivate.get(getFriendsRoute).then((res) =>{
      setFriends(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchFriends();
  }, [])

  return (
    <Stack gap={2}>
      {friends.length === 0 ?
      <div>Add a friend to see them here!</div> :
      friends.map((friend, idx) => {
        return (
        <Friend
        firstName={friend.firstName}
        lastName={friend.lastName}
        email={friend.email}
        phoneNumber={friend.phoneNumber}
        />)
      })  
    }
    </Stack>
  )
}

export default Friends;
