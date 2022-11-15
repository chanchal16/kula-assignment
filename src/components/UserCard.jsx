import React from 'react';
import { Box,Flex,WrapItem, Button,Text,Image, Link } from '@chakra-ui/react';

export const UserCard = ({user}) => {
  return (
    <Box data-testid={`${user.login}-card`} key={user.id}  w='2xl' p={2} m={2} border='1.5px' borderStyle='solid' borderColor='gray.200' borderRadius='5px'>
        <Flex align="center" justify="flex-start" gap={8}>
            <WrapItem>
                <Image boxSize='150px' alt={user.login} src={user.avatar_url} />{' '}
            </WrapItem>
            <Box>
                <Text data-testid='username' as='b' fontSize='xl'>{user?.login}</Text>                                 
                <Flex gap={8}>
                    <Text  fontSize='2xl'>{user?.repos_url?.length} <span  fontSize='xl'>Repos</span></Text>
                    <Text fontSize='2xl'>{user?.followers_url?.length} <span fontSize='xl'>Followers</span></Text>
                    <Text fontSize='2xl'>{user?.following_url?.length} <span fontSize='xl'>Following</span></Text>
                    <Text fontSize='2xl'>{user?.gists_url?.length} <span fontSize='xl'>Gists</span></Text>
                </Flex>
                <Link href={user.html_url} isExternal><Button size='sm' my='5px'>Github</Button></Link> 
            </Box>
        </Flex>                              
    </Box>
  )
}
