import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'
import './detail.css';
import Footer from '../../components/Footer/Footer'


const Detail = () => {
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
                <div className="container">
                    <h3>Relate products</h3>
                    <div className='row'>
                        {productDetail.relatedProducts?.map((prod, index) => {
                            return <div className='col-4' key={index}>
                                <div className='card'>
                                    <img src={prod.image} alt="..." />
                                    <div className='card-body'>
                                        <h3>{prod.name}</h3>
                                        <p>{prod.price}</p>
                                        <NavLink className={"btn btn-dark"} to={`/detail/${prod.id}`}>
                                            <i className='fa fa-eye'></i>
                                            View detail
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="products-item">
                                    <div className="card">
                                        <div className="item-image">
                                            <img src={prod.image} alt="..." />
                                        </div>
                                        <div className="products-body">
                                            <div className="info">
                                                <h1 className="name">{prod.name}</h1>
                                                <span>${'{'}prod.shortDescription{'}'}</span>
                                            </div>
                                            <div className="products-btn">
                                                <button className="btn-products"><a href="./detail.html?id=${prod.id}">Buy now</a></button>
                                                <p className="price">${'{'}prod.price{'}'}$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Detail