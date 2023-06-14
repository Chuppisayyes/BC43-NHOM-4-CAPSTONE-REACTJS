import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'


import './cart.css';
import Product from '../../components/Product/Product';
const Cart = (props) => {
    return (
        <div>
            <div className="cart-page-header">
                <div className="container">
                    <div className="cart-header-flex">
                        <div className="cart-page-title">
                            <div className="title">
                                <div className="title-bg">
                                    <div className="logo">
                                        <i class="icon-bag fa-sharp fa-light fa-bag-shopping "></i>
                                    </div>
                                    <div className="name-shop">
                                        <h5>Tèo Shoes</h5>
                                    </div>
                                    <div className="title-content">
                                        <p>| Giỏ Hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-page-searchbar">
                            <div className="InputContainer">
                                <input type="text" name="text" className="input" id="input" placeholder="Search" />
                                <label htmlFor="input" className="labelforsearch">
                                    <svg viewBox="0 0 512 512" className="searchIcon">
                                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                    </svg>
                                </label>
                                <div className="border" />
                                <button className="micButton">
                                    <svg viewBox="0 0 384 512" className="micIcon">
                                        <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" />
                                    </svg>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
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
                        <ul className="pay-cart d-flex">
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
                </div>
            </div>
            <Product />
            <FooterBasic />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Cart)