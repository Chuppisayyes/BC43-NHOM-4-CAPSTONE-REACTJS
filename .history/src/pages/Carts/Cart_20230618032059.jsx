import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'
import CartPageHeader from '../../components/Cart-page-header/CartPageHeader';


import './cart.css';
import Product from '../../components/Product/Product';
import CartPageBody from '../../components/Cart-page-body/CartPageBody';
import CartPageFooter from '../../components/Cart-page-footer/CartPageFooter';

const Cart = (props) => {
    const { userProfile} = useSelector(state => state.userReducer)

    const dispatch = useDispatch();
  
    const getProfileApi = () => {
      //Gọi api getProfile sử dụng redux async action
      const action = getProfileActionApi();
      dispatch(action);
    }
  
    useEffect(() => {
      getProfileApi();
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