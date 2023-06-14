import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'

const Profile = (props) => {
    return (
        <div>
            <div className="profile-page">
                <div className="container">
                    <div className="header-profile-page">
                        <h3>Hồ Sơ Của Tôi</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <img src="https://i.pravatar.cc?u=1" alt="" className='' width={200} height={200} />
                        </div>
                        <div className="col-9">
                            <div className="info">
                                <p>Tên</p>
                                <input type="text" />
                            </div>
                            <p>Giới Tính</p>
                            <span>Nam</span>
                            <p>Phone</p>
                            <input type="text" />
                            <p>Email</p>
                            <input type="text" />
                            <p>Password</p>
                            <input type="text" />
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