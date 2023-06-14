import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'
import './profile.css';
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
                        <div className="col-6 avatar-img" >
                            <img src="https://i.pravatar.cc?u=1" alt="" className='' width={300} height={300} />
                        </div>
                        <div className="col-6 detail-profile">
                            <div className="info">
                                <sp>Tên:</sp>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <sp>Giới Tính:</sp>
                                <select name="" id="">
                                    <option value="" selected >Khác</option>
                                    <option value="">Nam</option>
                                    <option value="">Nữ</option>
                                </select>
                            </div>
                            <div className="info">
                                <sp>Phone:</sp>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <sp>Email:</sp>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <sp>Password:</sp>
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
            <FooterBasic />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Profile)