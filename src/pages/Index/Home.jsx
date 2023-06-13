import React from 'react'
import { connect } from 'react-redux'
import './Home.min.css';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';


const Home = (props) => {
    return (
        <div>
            <Carousel />
            <Product/>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Home)