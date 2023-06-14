import React from 'react'
import { connect } from 'react-redux'

const CartPageBody = (props) => {
    return (
        <div>
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
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(CartPageBody)