import React from 'react'
import { connect } from 'react-redux'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { http } from '../../utils/config';
import { useNavigate } from 'react-router-dom';
import './register.css';
import FooterBasic from '../../components/Footer-basic/FooterBasic';


const Register = (props) => {
    const navigate = useNavigate()
    const registerFrm = useFormik({
        initialValues: {
            email: '',
            password: '',
            gender: '',
            name: '',
            phone: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('email cannot be blank!').email('Email is invalid !'),
            password: yup.string().required('password cannot be blank!').min(6, '6 - 32 characters').max(32, '6 - 32 characters'),
            name: yup.string().required('name cannot be blank'),
            phone: yup.string().required('phone cannot be blank').matches(/\d$/, 'phone is numbers')
        }),
        onSubmit: async (values) => {
            console.log(values);
            try {
                //Lấy dữ liệu từ form => call api gửi dữ liệu đi
                const res = await http.post('/api/Users/signup', values);
                alert(res.data?.message);
                navigate('/login')

            } catch (err) {
                alert(err.response.data.message);

            }


        }
    })
    return (
        <div>
            <section id="body">
                <div className="container">
                    <h3>Register</h3>
                    <hr />
                    <div className="form_input">
                        <div className="form">
                            <input type="text" className="form-control" placeholder="Email" id="email" name='email' />
                            <span id="error-email" />
                            <span id="error-required-email" />
                        </div>
                        <div className="form">
                            <input type="text" className="form-control" placeholder="Name" id="name" name='name' />
                            <span id="error-name" />
                            <span id="error-required-name" />
                        </div>
                        <div className="form">
                            <input type="password" className="form-control" placeholder="Password" name='password' id="pass" />
                            <span id="error-pass" />
                            <span id="error-required-pass" />
                        </div>
                        <div className="form">
                            <input type="text" className="form-control" placeholder="Phone" id="phone" name='phone' />
                            <span id="error-phone" />
                            <span id="error-required-phoneư" />
                        </div>
                        {/* <div className="form">
                            <input type="password" className="form-control" placeholder="Password Confirm" id="pass_confirm" name='phone' />
                            <span id="error-pass_confirm" />
                            <span id="error-required-pass_confirm" />
                        </div> */}
                        <div className="gender">
                            <label htmlFor>Gender</label>
                            <label>
                            <input className='form-check-input' id="gender1" name='gender' type='radio' value={true} onInput={registerFrm.handleChange} />
                                <span className="checkmark" />Male
                            </label>
                            <label>
                                <input type="radio" type="radio" defaultChecked="checked" defaultValue="false" />
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