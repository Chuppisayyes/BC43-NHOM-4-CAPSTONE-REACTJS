import { createSlice } from '@reduxjs/toolkit'
import { USER_LOGIN, getStorageJSON, http, saveStorageJSON } from '../../utils/config';
import {history} from '../../index';
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

export const {loginAction,getProfileAction} = userReducer.actions

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

            //SAu khi đăng nhập thành công thì chuyển hướng trang sang profile

            history.push('/profile');

        }catch(err) {
            alert(err.response?.data.message);
        }
  
    }
}


export const getProfileActionApi = () => {

    return async (dispatch,getState) => {

        const accessToken = getState().userReducer.userLogin.accessToken;

        //Gọi api getprofile
        const res = await http.post(`/api/Users/getProfile`,{},{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }

        });

        const action = getProfileAction(res.data.content);
        dispatch(action);

    }
}