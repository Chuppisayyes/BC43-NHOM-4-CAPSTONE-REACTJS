import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'

const Profile = (props) => {
    return (
        <div>
            <div className="profile-page">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src="https://i.pravatar.cc?u=1" alt=""  className=''/>
                        </div>
                        <div className="col-9">

                        </div>
                    </div>
                </div>
            </div>
            <FooterBasic />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Profile)