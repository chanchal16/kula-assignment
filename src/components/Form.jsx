import React,{useState} from 'react';
import {Input } from '@chakra-ui/react';
import{SearchIcon} from '@chakra-ui/icons'
import { useDispatch } from 'react-redux';
import { getUsers } from '../features/Users/usersSlice';

export const Form = () => {
    const[skill,setSkill] = useState('');
    const[location,setLocation] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e)=>{
        let query = `language:${skill}+location:${location}`;      
          e.preventDefault();
          console.log('get',query)
          dispatch(getUsers({searchQuery:query}))
    }
  return (
    <form  onSubmit={submitHandler}>
        <Input type={'text'} placeholder='skills' value={skill} onChange={(e)=>setSkill(e.target.value)} />
        <Input type={'text'} placeholder='location' value={location} onChange={(e)=>setLocation(e.target.value)} />
        {/* <IconButton colorScheme='blue' aria-label='Search users' icon={<SearchIcon />}/>  */}
        <button className='search-btn'><SearchIcon /></button>
    </form>
  )
}
