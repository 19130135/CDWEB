import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from 'axios';


const Register = () => {
    const [user, setUser] = useState({ username: "", email: "", password: "", phoneNumb: "" })
    const handleChangeUserName = (e) => {
        setUser({ ...user, username: e.target.value })
    }
    const handleChangePassword = (e) => {
        setUser({ ...user, password: e.target.value })
    }
    const dispatch = useDispatch();
    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            const response = await axios({
                method: "POST",
                url: "http://localhost:8080/api/auth/signup",
                data: {
                    userName: user.username,
                    email: user.email,
                    password: user.password,
                    phone: user.phoneNumb
                }
            })
        } catch (err) {
            console.log("----err", err)
        }
    }


    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="register-email-2" >User name *</label>
                    <input type="text" className="form-control" id="register-email-2" name="register-email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="register-email-2" >Your email address *</label>
                    <input type="email" className="form-control" id="register-email-2" name="register-email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="register-password-2">Password *</label>
                    <input type="password" className="form-control" id="register-password-2" name="register-password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="register-email-2" >Your phone number *</label>
                    <input type="phone" className="form-control" id="register-email-2" name="register-email" required />
                </div>

                <div className="form-footer">
                    <button onClick={(e) => { handleSignUp(e) }} className="btn btn-outline-primary-2">
                        <span>SIGN UP</span>
                        <i className="icon-long-arrow-right"></i>
                    </button>

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                        <label className="custom-control-label" htmlFor="register-policy-2">I agree to the <a href="#">privacy policy</a> *</label>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Register;