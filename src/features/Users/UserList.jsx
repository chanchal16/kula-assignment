import React from 'react';
import { Box, Spinner,Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux'
import { UserCard } from '../../components/UserCard';

export const UserList = () => {
    const {userList,status} = useSelector(state=>state.users);
    
  return (
    <section className='userlist-container'>
        {
            status === 'loading' ? (
                <Box data-testid='spinner-container' display='flex' flexDirection={'column'} alignItems='center' mx='auto' gap={2}>
                    <Spinner color='blue.500' size='lg' emptyColor='gray.200' thickness='4px' />
                </Box>
            ) 
            : status === 'rejected' ? (
                <Box mx='auto' display='flex' justifyContent='center' alignItems='center' data-testid='err-container'>
                    <Text color='red.500' >Oops. An error occured!</Text>
                </Box>
            ) 
            : (
                <Box display='flex' flexDirection={'column'} alignItems='center' mx='auto' gap={6}>
                    {
                        userList?.map(user=>(
                            <UserCard user={user} key={user.id}/>                           
                        ))
                    }
                </Box>
            )
        }  
    </section>
  )
}
