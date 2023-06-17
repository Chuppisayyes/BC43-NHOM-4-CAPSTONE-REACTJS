import React from 'react'
import { connect } from 'react-redux'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { http } from '../../utils/config';


import './register.css';
import FooterBasic from '../../components/Footer-basic/FooterBasic';


const Register = (props) => {
    return (
        <div>
            <section id="body">
                <div className="container">
                    <h3>Register</h3>
                    <hr />
                    <div className="form_input">
                        <div className="form">
                            <input type="text" className="form-control" placeholder="Email" id="email" />
                            <span id="error-email" />
                            <span id="error-required-email" />
                        </div>
                        <div className="form">
                            <input type="text" className="form-control" placeholder="Name" id="name" />
                            <span id="error-name" />
                            <span id="error-required-name" />
                        </div>
                        <div className="form">
                            <input type="password" className="form-control" placeholder="Password" id="pass" />
                            <span id="error-pass" />
                            <span id="error-required-pass" />
                        </div>
                        <div className="form">
                            <input type="text" className="form-control" placeholder="Phone" id="phone" />
                            <span id="error-phone" />
                            <span id="error-required-phoneư" />
                        </div>
                        <div className="form">
                            <input type="password" className="form-control" placeholder="Password Confirm" id="pass_confirm" />
                            <span id="error-pass_confirm" />
                            <span id="error-required-pass_confirm" />
                        </div>
                        <div className="gender">
                            <label htmlFor>Gender</label>
                            <label>
                                <input type="radio" defaultChecked="checked" name="radio" defaultValue="true" />
                                <span className="checkmark" />Male
                            </label>
                            <label>
                                <input type="radio" name="radio" defaultChecked="checked" defaultValue="false" />
                                <span className="checkmark" />Female
                            </label>
                            <button className="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
            <FooterBasic />
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Register)