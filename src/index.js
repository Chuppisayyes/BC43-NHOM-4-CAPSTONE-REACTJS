import React from 'react';
import ReactDOM from 'react-dom/client';
//Cấu hình react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Index/Home';


//Cấu hình redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />} >
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

);