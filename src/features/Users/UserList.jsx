import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux'
import { UserCard } from '../../components/UserCard';

export const UserList = () => {
    const {userList,status} = useSelector(state=>state.users)
  return (
    <section className='userlist-container'>
        {
            status === 'loading' ? (
                <Box display='flex' flexDirection={'column'} alignItems='center' mx='auto' gap={2}>
                    <h3>loading...</h3>
                </Box>
            ) 
            : (
                <Box display='flex' flexDirection={'column'} alignItems='center' mx='auto' gap={6}>
                    {
                        userList?.map(user=>(
                            <UserCard user={user}/>                           
                        ))
                    }
                </Box>
            )
        }  
    </section>
  )
}
