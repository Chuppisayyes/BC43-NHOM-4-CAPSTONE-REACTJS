import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'

const Search = (props) => {
  return (
    <div>
      <div className="search-page">
        
      </div>
      <FooterBasic/>
    </div>
  )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Search)