import React from 'react'
import { connect } from 'react-redux'
import '';
const SearchResult = (props) => {
    return (
        <div>
            <div className="search-result">
                <div className="container">
                    <hr />
                    <div className="top-result">
                        <h4>Kết quả tìm kiếm</h4>
                    </div>
                    <div className="body-result">
                        <div className="filter">
                            <select name="" id="">
                                <option value="" selected >Sort By</option>
                                <option value="">Price: High-Low</option>
                                <option value="">Price: Low-High</option>
                            </select>
                        </div>
                        <div className="show-result">
                            <div class="list-item">
                                <div className="products-item">
                                    <div className="card">
                                        <div className="item-image">
                                            <img src="https://shop.cyberlearn.vn/images/nike-air-max-97-blue.png" alt="..." />
                                        </div>
                                        <div className="products-body">
                                            <div className="info">
                                                <h1 className="name">Nike Air Max 97 Blue</h1>
                                                <span>Paul George is the rare high-percentage shooter</span>
                                            </div>
                                            <div className="products-btn">
                                                <button className="btn-products"><a href="./detail.html?id=${prod.id}">Buy now</a></button>
                                                <p className="price">350$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="products-item">
                                    <div className="card">
                                        <div className="item-image">
                                            <img src="https://shop.cyberlearn.vn/images/nike-air-max-97-blue.png" alt="..." />
                                        </div>
                                        <div className="products-body">
                                            <div className="info">
                                                <h1 className="name">Nike Air Max 97 Blue</h1>
                                                <span>Paul George is the rare high-percentage shooter</span>
                                            </div>
                                            <div className="products-btn">
                                                <button className="btn-products"><a href="./detail.html?id=${prod.id}">Buy now</a></button>
                                                <p className="price">350$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="products-item">
                                    <div className="card">
                                        <div className="item-image">
                                            <img src="https://shop.cyberlearn.vn/images/nike-air-max-97-blue.png" alt="..." />
                                        </div>
                                        <div className="products-body">
                                            <div className="info">
                                                <h1 className="name">Nike Air Max 97 Blue</h1>
                                                <span>Paul George is the rare high-percentage shooter</span>
                                            </div>
                                            <div className="products-btn">
                                                <button className="btn-products"><a href="./detail.html?id=${prod.id}">Buy now</a></button>
                                                <p className="price">350$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(SearchResult)