import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'

const Search = (props) => {
  return (
    <div>
      .Search-page
      <FooterBasic/>
    </div>
  )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Search)