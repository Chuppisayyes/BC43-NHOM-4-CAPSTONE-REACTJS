import React from 'react'
import { connect } from 'react-redux'
import FooterBasic from '../../components/Footer-basic/FooterBasic'

const Profile = (props) => {
    return (
        <div>
            <div className="profile-page">
                <form className='card' >
                    <div className='card-header bg-dark text-white'>Product info</div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>Id</p>
                                    <input data-type="number" className='form-control' id="idProduct" name="idProduct" />
                                    <p className='text text-danger'></p>
                                </div>
                                <div className='form-group'>
                                    <p>name</p>
                                    <input data-type="string" className='form-control' id="name" name="name" />
                                    <p className='text text-danger'></p>
                                </div>
                                <div className='form-group'>
                                    <p>price</p>
                                    <input data-type="number" className='form-control' id="price" name='price' />
                                    <p className='text text-danger'></p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>img</p>
                                    <input className='form-control' id="img" name='img' />
                                    <p className='text text-danger'></p>
                                </div>
                                <div className='form-group'>
                                    <p>type</p>
                                    <select id="type" name='type' className='form-control' >
                                        <option value="phone">Phone</option>
                                        <option value="tablet">Tablet</option>
                                        <option value="laptop">Laptop</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <p>desc</p>
                                    <input data-minlength='6' data-maxlength='32' className='form-control' id="desc" name='desc' onInput={this.handleChangeInput} value={desc} />
                                    <p className='text text-danger'></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-success' type='button'>Update</button>
                    </div>
                </form>
            </div>
            <FooterBasic />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Profile)