import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';


const Register = () => {
    const [user, setUser] = useState({ username: "", email: "", password: "", phoneNumb: "" })
    const handleChangeUserName = (e) => {
        setUser({ ...user, username: e.target.value })
    }
    const handleChangeEmail = (e) => {
        setUser({ ...user, email: e.target.value })
    }
    const handleChangePassword = (e) => {
        setUser({ ...user, password: e.target.value })
    }
    const handleChangePhoneNumb = (e) => {
        setUser({ ...user, phoneNumb: e.target.value })
    }
    const navigate = useNavigate();
    const registerSuccess = () => {
        navigate("/register/success", { replace: true });
    }
    const registerFailed = () => {
        navigate("/register/failed", { replace: true });
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
                    phone: user.phoneNumb,
                }
            })
            console.log(response)
            alert("Đã gửi email xác nhận đăng kí tài khoản! Vui lòng kiểm tra email của bạn!");
        } catch (err) {
            if (err.code == "ERR_BAD_REQUEST") {
                alert("Email bạn đang dùng để đăng kí đã được đăng kí trước bởi 1 tài khoản khác! Vui lòng kiểm tra lại.")
            }
        }
    }


    return (
        <>
            <form onSubmit={(e) => { handleSignUp(e) }}>
                <div className="form-group">
                    <label htmlFor="register-email-2" >User name *</label>
                    <input onChange={handleChangeUserName} type="text" className="form-control" id="register-email-2" name="register-email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="register-email-2" >Your email address *</label>
                    <input onChange={handleChangeEmail} type="email" className="form-control" id="register-email-2" name="register-email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="register-password-2">Password *</label>
                    <input onChange={handleChangePassword} type="password" className="form-control" id="register-password-2" name="register-password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="register-email-2" >Your phone number *</label>
                    <input onChange={handleChangePhoneNumb} type="phone" className="form-control" id="register-email-2" name="register-email" required />
                </div>

                <div className="form-footer">
                    <button type="submit" className="btn btn-outline-primary-2">
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