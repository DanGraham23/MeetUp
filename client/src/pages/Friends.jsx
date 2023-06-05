import {Stack} from '@mui/material';
import Friend from '../components/Friend';
import { useEffect, useState } from 'react';
import { axiosPrivate } from '../utils/axios';
import { getFriendsRoute } from '../utils/routes';
import DashboardView from '../components/DashboardView';

function Friends() {

  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  
  async function fetchFriends(){
    await axiosPrivate.get(getFriendsRoute).then((res) =>{
      setFriends(res.data);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    fetchFriends();
  }, [])

  return (
    <DashboardView>
      {loading ? <div>Loading...</div> :  <Stack gap={2}>
        {friends.length === 0 ?
          <div>Add a friend to see them here!</div> :
          friends.map((friend) => {
            return (
            <Friend
            key={friend.id}
            id={friend.id}
            firstName={friend.firstName}
            lastName={friend.lastName}
            email={friend.email}
            phoneNumber={friend.phoneNumber}
            friends={friends}
            setFriends={setFriends}
            />)
          })  
        } 
      </Stack>}
    </DashboardView>
    
  )
}

export default Friends;
