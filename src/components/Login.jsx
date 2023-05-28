import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ENDPOINT from '../api/endpoint';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAccount } from '../features/counter/accountSlice';
import Register from './Form/Register';
import LoginForm from './Form/LoginForm';

Login.propTypes = {

};


function Login(props) {
    

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
                                    <LoginForm />
                                </div>
                                <div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                                    <Register />
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