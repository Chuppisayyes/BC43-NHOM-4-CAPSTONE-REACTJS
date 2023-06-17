import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userLogin:{
        email:'',
        accessToken:''
    }
}


const userReducer = createSlice({
  name: userReducer,
  initialState,
  reducers: {
    loginAction: (state,action) => {
        const userLogin = action.payload;
        state.userLogin = userLogin;
    }
  }
});

export const {} = userReducer.actions

export default userReducer.reducer