import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

RegisterSuccess.propTypes = {

};

function RegisterSuccess(props) {
    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active" aria-current="page">DONE !</li>
                    </ol>
                </div>
            </nav>

            <div className="error-content text-center" style={{ backgroundImage: ' url(assets/images/backgrounds/error-bg.jpg)' }}>
                <div className="container">
                    <h1 className="error-title">Registered successfully! </h1>
                    <p>Vui lòng đăng nhập vào tài khoản của bạn để tiếp tục sử dụng website!.</p>
                    <a href="index.html" className="btn btn-outline-primary-2 btn-minwidth-lg">
                        <span><Link to="/home">BACK TO HOMEPAGE</Link></span>
                        <i className="icon-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </main>
    );
}

export default RegisterSuccess;