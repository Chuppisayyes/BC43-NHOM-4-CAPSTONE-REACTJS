import { createSlice } from '@reduxjs/toolkit'
import { USER_LOGIN, getStorageJSON, http, saveStorageJSON } from '../../utils/config';



const initStateUserLogin = () => {
    let userLoginInit = {
        email:'',
        accessToken:''
    }
    if(getStorageJSON(USER_LOGIN)) {
        userLoginInit = getStorageJSON(USER_LOGIN);
    }
    return userLoginInit;
}

const initialState = {
    userLogin: initStateUserLogin(),
    userProfile: {
      }
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
      loginAction : (state,action) => {
          const userLogin = action.payload;
          state.userLogin = userLogin;
      },
      getProfileAction : (state,action) => {
          const userProfile = action.payload;
          state.userProfile = userProfile;
      }
    }
  });

export const {} = userReducer.actions

export default userReducer.reducer

// ------------- action async ----------
export const loginActionApi = (userLogin) => {
    return async (dispatch) => {
        try {
            const res = await http.post(`/api/Users/signin`,userLogin);
            //Sau khi kết quả trả về sẽ đưa lên loginAction
            const action = loginAction(res.data.content);
            //const action = {type:'userReducer/loginAction', payload: res.data.content}
            dispatch(action);
            navigate('/profile');
            //Thành công thì lưu vào storage
            saveStorageJSON(USER_LOGIN,res.data.content);
        }catch(err) {
            alert(err.response?.data.message);
        }
  
    }
}