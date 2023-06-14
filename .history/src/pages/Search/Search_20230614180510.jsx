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
            <div class="sort  css-lrxey8" role="">
              <div class="dropdown  anchored--right  css-1x1kpj">
                <div class="overlay">
                  </div>
                  <button aria-controls="sort-options" aria-expanded="false" aria-label="Sort By" class="dropdown__btn font-override__body1 css-10h9yp8" id="dropdown-btn" role="listbox" tabindex="0" type="button">
                    <span class="dropdown__btn-text-wrapper">
                      <span class="dropdown__btn-text">
                        Sort By
                        </span>
                        <span class="dropdown__btn-selected-text"> </span></span><div class="icon-chevron  css-304bid"></div><span class="dropdown__btn-symbols"></span></button><div class="dropdown__options-wrapper"><div aria-labelledby="dropdown-btn" class="dropdown__options-list" id="sort-options" role="menu"><button aria-hidden="false" aria-label="Featured" class="dropdown__option font-override__body1 css-10h9yp8" data-ndx="0" role="menuitem" tabindex="-1" type="button" value="">Featured</button><button aria-hidden="false" aria-label="Newest" class="dropdown__option font-override__body1 css-10h9yp8" data-ndx="1" role="menuitem" tabindex="-1" type="button" value="newest">Newest</button><button aria-hidden="false" aria-label="Price: High-Low" class="dropdown__option font-override__body1 css-10h9yp8" data-ndx="2" role="menuitem" tabindex="-1" type="button" value="priceDesc">Price: High-Low</button><button aria-hidden="false" aria-label="Price: Low-High" class="dropdown__option font-override__body1 css-10h9yp8" data-ndx="3" role="menuitem" tabindex="-1" type="button" value="priceAsc">Price: Low-High</button></div></div></div></div>

          </div>
        </div>
      </div>
      <FooterBasic />
    </div>
  )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Search)