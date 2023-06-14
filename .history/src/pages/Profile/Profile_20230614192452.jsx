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
                        <div className="col-4 avatar-img" >
                            <img src="https://i.pravatar.cc?u=1" alt="" className='' width={300} height={300} />
                        </div>
                        <div className="col-8 detail-profile">
                            <div className="info">
                                <span>Tên:</span>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <span>Giới Tính:</span>
                                <select name="" id="">
                                    <option value="" selected >Khác</option>
                                    <option value="">Nam</option>
                                    <option value="">Nữ</option>
                                </select>
                            </div>
                            <div className="info">
                                <span>Phone:</span>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <span>Email:</span>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <span>Password:</span>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="update-info">
                            <button class="button">
                                Update
                            </button>
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