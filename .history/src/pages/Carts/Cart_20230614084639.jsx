import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'


import './cart.css';
import Product from '../../components/Product/Product';
import CartPageHeader from '../../components/Cart-page-header/CartPageHeader';
const Cart = (props) => {
    return (
        <div>
            <CartPageHeader/>
            <div className="cart">
                <div className="container">
                    <table className='table'>
                        <thead className='thead-cart'>
                            <tr>
                                <th>
                                    <input type="checkbox" className="ui-checkbox" />
                                </th>
                                <th>
                                    Mã
                                </th>
                                <th>Sản Phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Đơn giá</th>
                                <th>Số lượng</th>
                                <th>Số tiền</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <div className="space-devide"></div>
                        <tbody className='tbody-cart'>
                            <tr className='item'>
                                <td><input type="checkbox" className="ui-checkbox" /></td>
                                <td className='td-text'>1</td>
                                <td className='td-text'>Nike Air Max 97 Blue</td>
                                <td>
                                    <img src="https://shop.cyberlearn.vn/images/nike-air-max-97-blue.png" alt="..." width={50} height={50} />
                                </td>
                                <td className='td-text'>350$</td>
                                <td>
                                    <div className="btn-up-down">
                                        <button className='btn-up'>+</button>
                                        <div className='show-up-number'>3</div>
                                        <button className='btn-down'>-</button>
                                    </div>
                                </td>
                                <td className='td-text'>1050$</td>
                                <td>
                                    <button className='btn-delete'>Xoá</button>
                                    <div className="more-item">
                                        <a href="">Tìm sản phẩm tương tự</a>
                                    </div>
                                </td>
                            </tr>
                            <tr className='item'>

                                <td><input type="checkbox" className="ui-checkbox" /></td>
                                <td className='td-text'>2</td>
                                <td className='td-text'>Adidas Ultraboost 4</td>
                                <td>
                                    <img src="https://shop.cyberlearn.vn/images/adidas-ultraboost-4.png" alt="..." width={50} height={50} />
                                </td>
                                <td className='td-text'>400$</td>
                                <td>
                                    <div className="btn-up-down">
                                        <button className='btn-up'>+</button>
                                        <div className='show-up-number'>3</div>

                                        <button className='btn-down'>-</button>
                                    </div>
                                </td>
                                <td className='td-text'>2000$</td>
                                <td>
                                    <button className='btn-delete'>Xoá</button>
                                    <div className="more-item">
                                        <a href="">Tìm sản phẩm tương tự</a>
                                    </div>
                                </td>
                            </tr>
                            <tr className='item'>

                                <td><input type="checkbox" className="ui-checkbox" /></td>
                                <td className='td-text'>3</td>
                                <td className='td-text'>Nike Air Max 270 React</td>
                                <td>
                                    <img src="https://shop.cyberlearn.vn/images/nike-air-max-270-react.png" alt="..." width={50} height={50} />
                                </td>
                                <td className='td-text'>350$</td>
                                <td>
                                    <div className="btn-up-down">
                                        <button className='btn-up'>+</button>
                                        <div className='show-up-number'>3</div>
                                        <button className='btn-down'>-</button>
                                    </div>
                                </td>
                                <td className='td-text'>1050$</td>
                                <td>
                                    <button className='btn-delete'>Xoá</button>
                                    <div className="more-item">
                                        <a href="">Tìm sản phẩm tương tự</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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
            <Product />
            <FooterBasic />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Cart)