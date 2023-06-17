import { connect } from 'react-redux'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom';
import FooterBasic from '../../components/Footer-basic/FooterBasic'
import './search.css';




const Search = () => {
  const keywordRef = useRef('');

  const [arrProductSearch, setArrayProductSearch] = useState([]);

  const [keyword, setKeyword] = useSearchParams();

  useEffect(() => {
    //Lấy ra keyword => khác rổng thì mới gọi api
    const kWord = keyword.get('f');
    if (kWord !== '') {
      getProductByKeyword(kWord);
    }
  }, [keyword.get('f')]) //keyword trên url thay đổi thì useeffect này sẽ chạy
  const getProductByKeyword = async (keyword) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
      method: 'GET'
    });

    setArrayProductSearch(result.data.content);
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    keywordRef.current = value;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //đưa keyword lên param
    setKeyword({
      f: keywordRef.current
    });

  }

  return (
    <div>
      <div>
        <div className="search-page">
          <div className="container">
            <div className="header-search-page">
              <h4>Search</h4>
            </div>
            <form className="search-bar" onSubmit={handleSubmit}>
              <div className="input-container">
                <input type="text" id="keyword" onInput={handleChange} required />
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
            </form>
          </div>
        </div>
      </div>
      <div className="search-result">
        <div className="container">
          <hr />
          <div className="top-result">
            <h4>Kết quả tìm kiếm ({arrProductSearch.length})</h4>
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
                {arrProductSearch.map((item, index) => {
                  return <div className="products-item" key={index}>
                    <div className="card">
                      <div className="item-image">
                        <img src={item.image} alt="..." />
                      </div>
                      <div className="products-body">
                        <div className="info">
                          <h1 className="name">{item.name}</h1>
                          <span>{item.shortDescription}</span>
                        </div>
                        <div className="products-btn">
                          <NavLink className={"btn-products nav-link text-center"} to={`/detail/${item.id}`}>
                            <span className='text-btn'>Buy now</span>
                          </NavLink>
                          <p className="price">{item.price}$</p>
                        </div>
                      </div>
                    </div>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBasic />
    </div>
  )
}

export default Search