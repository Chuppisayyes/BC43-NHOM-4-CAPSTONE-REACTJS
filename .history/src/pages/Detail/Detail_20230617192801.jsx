import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
import './detail.css';
import Footer from '../../components/Footer/Footer'
import { http } from '../../utils/config';


const Detail = () => {
    const [productDetail, setProductDetail] = useState({})
    //Lấy tham số trên url

    const params = useParams();
    useEffect(() => {
        //Call api lúc trang vừa load
        getProductDetailApi(params.id);
    }, [params.id]);

    const getProductDetailApi = async (id) => {
        const result = await http.get()
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
                        {productDetail.size?.map((prod, index) => {
                            return <button class="sizes">{prod}</button>
                        })}
                            
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
            <section className='relate-product'>
                <div className="container">
                    <h3 className='title'>Relate products</h3>
                    <div className='list-item'>
                        {productDetail.relatedProducts?.map((prod, index) => {
                            return <div className="products-item" key={index}>
                                <div className="card">
                                    <div className="item-image">
                                        <img src={prod.image} alt="..." />
                                    </div>
                                    <div className="products-body">
                                        <div className="info">
                                            <h1 className="name">{prod.name}</h1>
                                            <span>{prod.shortDescription}</span>
                                        </div>
                                        <div className="products-btn">
                                            <NavLink className={"btn-products nav-link text-center"} to={`/detail/${prod.id}`}>
                                                <span className='text-btn'>Buy now</span>
                                            </NavLink>
                                            <p className="price">{prod.price}$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section >
            <Footer />
        </div >
    )
}
export default Detail