import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


RegInfo.propTypes = {

};

function RegInfo(props) {
    useEffect(() => {
        // Hành động cần thực hiện ngay lập tức khi trang được truy cập

        // Ví dụ: In ra thông báo trong console
        console.log('Trang đã được truy cập');
        console.log(localStorage.getItem('reload'));
        if (localStorage.getItem('reload') === "false") {
            console.log("vo day roi!")
            localStorage.setItem('reload', "true");
            window.location.reload();
        }
        // Hoặc thực hiện các tác vụ khác

        // Hàm cleanup (được gọi khi component bị unmount)
        return () => {
            // Thực hiện các tác vụ cleanup (nếu cần)
        };
    }, []);
    // const checkReload = () => {

    // }

    return (
        <div >
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
                        <h1 className="error-title">{localStorage.getItem('status')}</h1>
                        <p>{localStorage.getItem('note')}</p>
                        <a className="btn btn-outline-primary-2 btn-minwidth-lg">
                            <span><Link to="/home">BACK TO HOMEPAGE</Link></span>
                            <i className="icon-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default RegInfo;