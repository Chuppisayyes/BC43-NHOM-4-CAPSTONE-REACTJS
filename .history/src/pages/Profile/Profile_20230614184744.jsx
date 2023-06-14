import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'

const Profile = (props) => {
    return (
        <div>
            <div className="profile-page">
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>
            <FooterBasic />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Profile)