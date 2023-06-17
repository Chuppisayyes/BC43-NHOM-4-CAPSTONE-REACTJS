import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userLogin:{
        email:'',
        accessToken:''
    }
}

const userReducer = createSlice({
  name: second,
  initialState,
  reducers: {
    loginAction: (state)
  }
});

export const {} = userReducer.actions

export default userReducer.reducer