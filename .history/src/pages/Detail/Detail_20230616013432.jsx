import React from 'react'
import { connect } from 'react-redux'
import './detail.css';
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer'

const Detail = (props) => {
    return (
        <div>
            <section id="products_detail">
                <div className="container">
                    <div className="content_left">
                        <img src="https://shop.cyberlearn.vn/images/nike-air-max-97-blue.png" alt="..." />
                    </div>
                    <div className="content_right">
                        <div className="info">
                            <h3>Product name</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                                pariatur sequi esse ducimus veritatis aspernatur totam inventore,
                                tempore rem impedit illum qui a quae aperiam officiis, error
                                repellat sunt nulla! ( Thuộc tính Description)
                            </p>
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
            <Product />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Detail)
