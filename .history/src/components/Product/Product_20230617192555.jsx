import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import './product.css';
import { http } from '../../utils/config';

const Product = () => {
    const [arrProduct, setArrProduct] = useState([]);

    useEffect(() => {
        //Call api lúc trang vừa load
        getAllProduct();
    },[]);
    const getAllProduct = async () => {
        const result = await http.get   ("")

        //Đưa dữ liệu lấy tự api về vào state
        setArrProduct(result.data.content);
    }
    return (
        <div>
            <section class="products">
                <div class="container">
                    <h3 class="title">-Featured Products-</h3>
                    <div className='list-item'>
                        {arrProduct.map((prod, index) => {
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
            </section>
        </div>
    )
}

export default Product