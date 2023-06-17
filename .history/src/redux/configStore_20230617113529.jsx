import {configureStore} from '@reduxjs/toolkit';
import appChatReducer from './reducers/appChatReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
    reducer: {
     userReducer:userReducer
    }
})