import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'
import './detail.css';
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer'


const Detail = (props) => {
    const [productDetail, setProductDetail] = useState({})
    //Lấy tham số trên url
    const params = useParams();
    useEffect(() => {
        //Call api lúc trang vừa load
        getProductDetailApi(params.id);
    }, [params.id]);
    const getProductDetailApi = async (id) => {
        const result = await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
            method: 'GET'
        });
        //Đưa dữ liệu lấy tự api về vào state
        setProductDetail(result.data.content);
    }
    return (
        <div>
            <section id="products_detail">
                <div className="container">
                    <div className="content_left">
                        <img src={productDetail.image} alt="..." />
                    </div>
                    <div className="content_right">
                        <div className="info">
                            <h3>{productDetail.name}</h3>
                            <p>{productDetail.description}</p>
                        </div>
                        <div className="size_products">
                            <span>Available size</span>
                            <br />
                            <button className="sizes">38</button>
                            <button className="sizes">39</button>
                            <button className="sizes">40</button>
                            <button className="sizes">41</button>
                            <button className="sizes">42</button>
                        </div>
                        <div className="cost">
                            <span>85$</span>
                        </div>
                        <div className="push_cart">
                            <button className="except"><span>-</span></button>
                            <span className="num">1</span>
                            <button className="add"><span>+</span></button> <br />
                            <button className="add_cart"><span>Add to cart</span></button>
                        </div>
                    </div>
                </div>
            </section>
            <section id='relate-product'>

            </section>
            <Product />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Detail)