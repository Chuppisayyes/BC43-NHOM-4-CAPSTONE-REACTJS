import React from 'react'
import { connect } from 'react-redux'
 import'./';'
const CartPageFooter = (props) => {
    return (
        <div>
                        <div className="cart-page-footer">
                <div className="container">
                    <div className="top-footer">
                        <div className="left-top-footer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ticket" viewBox="0 0 16 16">
                                <path className='icon-ticket' d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5ZM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5h-13Z" />
                            </svg>
                            Tèo Shoes VOUCHER
                        </div>
                        <div className="right-top-footer">
                            <a href="">Chọn hoặc nhập mã</a>
                        </div>
                    </div>
                    <div className="body-footer">
                        <ul className="pay-cart">
                            <li className="uqMJQA">
                                <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                    <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo" />

                                </a>
                            </li>
                            <li className="uqMJQA">
                                <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                    <img src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16" alt="logo" />
                                </a>
                            </li>
                            <li className="uqMJQA">
                                <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                    <img src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" alt="logo" />
                                </a>
                            </li>
                            <li className="uqMJQA">
                                <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                    <img src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c" alt="logo" />
                                </a>
                            </li>
                            <li className="uqMJQA">
                                <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                    <img src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281" alt="logo" />
                                </a>
                            </li>
                            <li className="uqMJQA">
                                <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                    <img src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09" alt="logo" />
                                </a>
                            </li>
                            <li className="uqMJQA">
                                <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                    <img src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06" alt="logo" />
                                </a>
                            </li>
                            <li className="uqMJQA">
                                <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                    <img src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492" alt="logo" />
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="bottom-footer">
                        <div className='left-bottom-footer'>
                            <input type="checkbox" className="ui-checkbox" />
                            <span>Chọn Tất Cả (0)</span>
                            <button className='btn-delete'>Xoá</button>
                        </div>
                        <div className="right-bottom-footer">
                            <span> Tổng thanh toán (0 sản phẩm):
                            </span>
                            <span className='total-number'>0$</span>
                            <button class="btn-shine">
                                <span>Mua Hàng</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(CartPageFooter)