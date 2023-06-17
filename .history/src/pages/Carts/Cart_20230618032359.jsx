import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getCartActionApi } from '../../redux/reducers/userReducer';
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'
import CartPageHeader from '../../components/Cart-page-header/CartPageHeader';


import './cart.css';
import Product from '../../components/Product/Product';
import CartPageBody from '../../components/Cart-page-body/CartPageBody';
import CartPageFooter from '../../components/Cart-page-footer/CartPageFooter';

const Cart = (props) => {
    const { userCart} = useSelector(state => state.userReducer)

    const dispatch = useDispatch();
  
    const getCartApi = () => {
      //Gọi api getProfile sử dụng redux async action
      const action = getCartActionAPI();
      dispatch(action);
    }
  
    useEffect(() => {
        getCartApi();
    },[])
    return (
        <div>
            <CartPageHeader/>
            <CartPageBody/>
            <CartPageFooter/>
            <Product />
            <FooterBasic />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Cart)