import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk(
  'users/signupUser',
async({name, email, password},thunkAPI ) => {
  try{
    const response = await fetch('',
    {
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    })
  }
  catch(e){
    console.log()
  }
})

export const userSlice = createSlice({
  name:'user',
  initialState:{
    username:'',
    email:'',
    isFetching:false,
    isSuccess:false,
    isError:false,
    errorMessage:''
  },
  reducers:{
    clearState: (state) =>{
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
    
      return state;
    }
  },
  extraReducers:{
    // [signupUser.fulfilled]:
  }
})
export const userSelector = state => state.user