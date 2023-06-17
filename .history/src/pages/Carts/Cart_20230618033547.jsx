import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getCartActionAPI } from '../../redux/reducers/userReducer';
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'
import CartPageHeader from '../../components/Cart-page-header/CartPageHeader';


import './cart.css';
import Product from '../../components/Product/Product';
import CartPageBody from '../../components/Cart-page-body/CartPageBody';
import CartPageFooter from '../../components/Cart-page-footer/CartPageFooter';

const Cart = (props) => {
    const [arrGioHang, setArrayGioHang] = useState({})
    tangGiamSoLuong = (maSP,soLuong)=>{
        console.log(maSP,soLuong);
        //Tìm ra sản phẩm được click dựa vào mã
        let spGH = this.state.arrGioHang.find(item => item.maSP === maSP);
        if(spGH){
            spGH.soLuong += soLuong;

            if(spGH.soLuong <1){
               if( window.confirm('Bạn có muốn xoá không') ){
                    this.xoaSanPham(spGH.maSP);
                    return;
                }else {
                    spGH.soLuong -= soLuong;
                }
            }


        }

        //Cập nhật state
        this.setState({
            arrGioHang: this.state.arrGioHang
        })

    }

    // const { userCart} = useSelector(state => state.userReducer)

    // const dispatch = useDispatch();
  
    // const getCartApi = () => {
    //   //Gọi api getProfile sử dụng redux async action
    //   const action = getCartActionAPI();
    //   dispatch(action);
    // }
  
    // useEffect(() => {
    //     getCartApi();
    // },[])
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