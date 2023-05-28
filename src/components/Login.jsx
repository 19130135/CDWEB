import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ENDPOINT from '../api/endpoint';
import { useNavigate } from 'react-router';

Login.propTypes = {

};


function Login(props) {
    const [user, setUser] = useState({ username: "", password: "" })
    const handleChangeUserName = (e) => {
        setUser({ ...user, username: e.target.value })

    }
    const handleChangePassword = (e) => {
        setUser({ ...user, password: e.target.value })

    }
    console.log(user)
    // Login thanh cong => Home page
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/home");
    }

    const handleLogin = async () => {
        const response = await axios({
            method: "POST",
            url: "http://localhost:8080/api/auth/login",
            data: user,
        })
        console.log(response)
    }

    return (
        <main className="main">


            <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17" style={{ backgroundImage: ' url(assets/images/backgrounds/login-bg.jpg)' }}>
                <div className="container">
                    <div className="form-box">
                        <div className="form-tab">
                            <ul className="nav nav-pills nav-fill" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Sign In</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2" role="tab" aria-controls="register-2" aria-selected="true">Register</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
                                    <form action="#">
                                        <div className="form-group">
                                            <label htmlFor="singin-email-2">Username or email address *</label>
                                            <input onChange={handleChangeUserName} type="text" className="form-control" id="singin-email-2" name="singin-email" required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="singin-password-2">Password *</label>
                                            <input onChange={handleChangePassword} type="password" className="form-control" id="singin-password-2" name="singin-password" required />
                                        </div>

                                        <div className="form-footer">
                                            <button onClick={() => { handleLogin() }} type="submit" className="btn btn-outline-primary-2">
                                                <span>LOG IN</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </button>


                                            <a href="#" className="forgot-link">Forgot Your Password?</a>
                                        </div>
                                    </form>

                                </div>
                                <div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                                    <form action="#">
                                        <div className="form-group">
                                            <label htmlFor="register-email-2" >Your email address *</label>
                                            <input onChange={handleChangeUserName} type="email" className="form-control" id="register-email-2" name="register-email" required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="register-password-2">Password *</label>
                                            <input onChange={handleChangePassword} type="password" className="form-control" id="register-password-2" name="register-password" required />
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
                                    <div className="form-choice">
                                        <p className="text-center">or sign in with</p>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <a href="#" className="btn btn-login btn-g">
                                                    <i className="icon-google"></i>
                                                    Login With Google
                                                </a>
                                            </div>
                                            <div className="col-sm-6">
                                                <a href="#" className="btn btn-login  btn-f">
                                                    <i className="icon-facebook-f"></i>
                                                    Login With Facebook
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;