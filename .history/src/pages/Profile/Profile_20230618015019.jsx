import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getProfileActionApi     } from '../../redux/reducers/userReducer';
import FooterBasic from '../../components/Footer-basic/FooterBasic'
import './profile.css';
const Profile = (props) => {
    const { userProfile} = useSelector(state => state.userReducer)

    const dispatch = useDispatch();
  
    const getProfileApi = () => {
      //Gọi api getProfile sử dụng redux async action
      const action = getProfileActionApi();
      dispatch(action);
    }
  
    useEffect(() => {
      getProfileApi();
    },[])
  
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
                            <img src={userProfile.avatar} alt="" className='' width={300} height={300} />
                        </div>
                        <div className="col-8 detail-profile">
                            <div className="info">
                                <span>Tên:</span>
                                <input type="text" value={userProfile.name}/>
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
                                <input type="text"  value={userProfile.phone} />
                            </div>
                            <div className="info">
                                <span>Email:</span>
                                <input type="text" value={userProfile.email} />
                            </div>
                            <div className="info">
                                <span>Password:</span>
                                <input type="text" value={userProfile.phone} />
                            </div>
                            <div className="update-info">
                                <button class="button-update">
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBasic />
        </div>
    )
}

export default Profile