import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'
import './search.css';
import SearchPage from '../../components/Search-page/SearchPage';
const Search = (props) => {
  return (
    <div>
      <SearchPage />
      <S
      <FooterBasic />
    </div>
  )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Search)