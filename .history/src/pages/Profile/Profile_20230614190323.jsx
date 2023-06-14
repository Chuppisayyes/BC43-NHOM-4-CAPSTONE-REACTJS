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
                            <div className="info">
                                <p>Giới Tính</p>
                                <select name="" id="">
                                    <option value="" selected >Khác</option>
                                    <option value="">Nam</option>
                                    <option value="">Nữ</option>
                                </select>
                            </div>
                            <div className="info">
                                <p>Phone</p>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <p>Email</p>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <p>Password</p>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="update-info">
                        <button class="button">
                            Update
                        </button>
                    </div>
                </div>
            </div>
            .others
            <FooterBasic />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Profile)