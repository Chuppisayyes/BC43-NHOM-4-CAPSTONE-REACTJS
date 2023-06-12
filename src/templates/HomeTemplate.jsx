import React from 'react'
import { connect } from 'react-redux'
//import outlet từ react router dom
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Hometemplate = (props) => {
  return (
    <div>
      <Header />
      <div style={{ minHeight: '80vh' }}>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Hometemplate)