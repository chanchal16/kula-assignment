import React,{useState} from 'react';
import {Input } from '@chakra-ui/react';
import{SearchIcon} from '@chakra-ui/icons'
import { useDispatch} from 'react-redux';
import { getUsers } from '../features/Users/usersSlice';

export const Form = () => {
    const[skill,setSkill] = useState('');
    const[location,setLocation] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e)=>{
      let query = `language:${skill}+location:${location}`;        
        e.preventDefault();
        dispatch(getUsers({queryText:query}))      
    }
    
  return (
    <form data-testid='form'  onSubmit={submitHandler}>
        <Input data-testid='skill' type={'text'} placeholder='skills' value={skill} onChange={(e)=>setSkill(e.target.value)} />
        <Input data-testid='location' type={'text'} placeholder='location' value={location} onChange={(e)=>setLocation(e.target.value)} />
        <button type='submit' data-testid='submit-btn' className='search-btn'><SearchIcon /></button>
    </form>
  )
}
