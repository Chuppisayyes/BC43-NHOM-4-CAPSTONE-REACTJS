import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'

const Profile = (props) => {
    return (
        <div>
            .Pro
            <FooterBasic/>
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Profile)