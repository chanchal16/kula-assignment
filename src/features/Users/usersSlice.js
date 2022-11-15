import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    userList: [],
    status:'idle', 
}

export const getUsers = createAsyncThunk("users/getUsers",async({queryText})=>{
    let searchQuery = `${queryText}&sort=followers`
    try{       
       const {data}= await axios.get(`https://api.github.com/search/users?q=${searchQuery}`,{
        headers: {
            Accept: "application/vnd.github.v3+json"
          }
       } )
        return data.items       
    }catch(err){console.error(err)}
})

export const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getUsers.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(getUsers.fulfilled,(state,action)=>{
            state.status = 'fulfilled';
            state.userList= action.payload
        })
        .addCase(getUsers.rejected,(state)=>{
            state.status = 'rejected'
        })
    }
})
export default usersSlice.reducer