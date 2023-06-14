import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'

const Search = (props) => {
  return (
    <div>
      <div className="search-page">
        <div className="container">
          <div className="header-search-page">
            <h4>Search</h4>
          </div>
          <div className="search-bar">
            <div class="input-container">
              <input type="text" id="input" required="">
                <label for="input" class="label">Enter Text</label>
                <div class="underline"></div>
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