import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userLogin:{
        email:'',
        accessToken:''
    }
}


const userReducer = createSlice({
  name: 'userReducer',
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

// ------------- action async ----------

export const loginActionApi = (userLogin) => { // {email:'',password:''}
    
    return async (dispatch) => {
        try {
            const res = await http.post(`/api/Users/signin`,userLogin);
            //Sau khi kết quả trả về sẽ đưa lên loginAction
            const action = loginAction(res.data.content);
            //const action = {type:'userReducer/loginAction', payload: res.data.content}
            dispatch(action);

            //Thành công thì lưu vào storage
            saveStorageJSON(USER_LOGIN,res.data.content);
        }catch(err) {
            alert(err.response?.data.message);
        }
  
    }
}