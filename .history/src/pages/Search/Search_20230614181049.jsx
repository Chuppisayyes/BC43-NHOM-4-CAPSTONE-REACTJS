import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'
import './search.css';
const Search = (props) => {
  return (
    <div>
      <div className="search-page">
        <div className="container">
          <div className="header-search-page">
            <h4>Search</h4>
          </div>
          <div className="search-bar">
            <div className="input-container">
              <input type="text" id="input" required />
              <label htmlFor="input" className="label">Product name ...</label>
              <div className="underline" />
            </div>
            <div className="button-search">
              <button class="btn-search">
                <button class="btn-search ">
                  Search
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="search-result">
        <div className="container">
          <hr />
          <div className="top-result">
            <h4>Kết quả tìm kiếm</h4>
          </div>
          <div className="body-result">
            <div className="filter">
              <select name="" id=""> Sort By
                <option value="">Price:</option>
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
      <FooterBasic />
    </div>
  )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Search)