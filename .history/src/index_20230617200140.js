import React from 'react';
import ReactDOM from 'react-dom/client';
//Cấu hình react router dom
import { BrowserRouter, unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Index/Home';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Carts/Cart';
//Cấu hình redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import { createBrowserHistory } from 'history';

//tạo ra 1 history tương tự useNavigate
 const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}> 
      <Routes>
        <Route path="" element={<HomeTemplate />} >
          <Route index element={<Home />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="detail" >
              <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="search" element={<Search />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

);