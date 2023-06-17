import axios from 'axios'
import {history} from '../index';
//cấu hình hệ thống
export const DOMAIN = 'https://shop.cyberlearn.vn';
export const USER_LOGIN = 'userLogin';
export const TOKEN ='accessToken';

//Cấu hình api gửi đi 
//Tạo ra 1 đối tượng axios 
export const http = axios.create({
    baseURL: DOMAIN, //domain của tất cả request
    timeout: 30000 //thời gian request tồn tại
});
export const {saveStorageJSON,getStorageJSON,clearStorage} = {
    saveStorageJSON: (name,data) => {
        const string = JSON.stringify(data);
        localStorage.setItem(name,string);
    },
    getStorageJSON: (name) => {
        if(localStorage.getItem(name)) {
            const data = JSON.parse(localStorage.getItem(name));
            return data;
        }
        return undefined;
    },
    clearStorage: (name) => {
        localStorage.removeItem(name)
    }
}

//Cấu hình dùng chung cho tất cả request (yêu cầu gửi lên api)
http.interceptors.request.use((config) => {
    
    //headers: (dev định nghĩa)
    //data (body): (lấy từ các input hoặc tham số từ phía client)
    config.headers = {...config.headers}
    let token = getStorageJSON(USER_LOGIN)?.accessToken;
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.tokenCybersoft = `CybersoftDemo`;


    return config;
}, (err) => {
    return Promise.reject(err);
})

//Cấu hình cho response (kết quả trả về từ api)
http.interceptors.response.use((res)=>{ 
    return res;
},(err)=> {
    //Xử lý lỗi cho api bị lỗi theo status code 
    console.log(err);
    if(err.response?.status === 401) {
        alert('Đăng nhập để vào trang này !');
        history.push('/login');
    }
    return Promise.reject(err);
});

