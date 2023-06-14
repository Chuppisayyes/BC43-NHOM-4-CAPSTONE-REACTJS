import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'
import CartPageHeader from '../../components/Cart-page-header/CartPageHeader';


import './cart.css';
import Product from '../../components/Product/Product';
import CartPageBody from '../../components/Cart-page-body/CartPageBody';

const Cart = (props) => {
    return (
        <div>
            <CartPageHeader/>
            <CartPageBody/>
            <CartPageF/>
            <Product />
            <FooterBasic />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Cart)