import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'

const Profile = (props) => {
    return (
        <div>
            <div className="profile-page">
            <div className='row' style={{minHeight:400}}>
                    <div className='col-3'>
                        <h3 className='text-center'>{tenSP}</h3> 
                        <img src={hinhAnh} alt='...' className='w-100' />
                    </div>
                    <div className='col-9'>
                        <h3>Thông số kỹ thuật</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <td>{rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            <FooterBasic />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Profile)