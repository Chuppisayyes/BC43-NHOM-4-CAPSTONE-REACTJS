import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'

const Profile = (props) => {
    return (
        <div>
            .prof
            <FooterBasic/>
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Profile)