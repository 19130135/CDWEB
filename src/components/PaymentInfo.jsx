import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { paymentDetail } from '../features/counter/orderSlice';

PaymentInfo.propTypes = {

};

function PaymentInfo(props) {
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
    return (
        <div>
            <main className="main">
                <div className="error-content text-center" style={{ backgroundImage: ' url(assets/images/backgrounds/done.jpg)' }}>
                    <div className="container">
                        <h1 className="error-title">Order through VNPAY successfully! </h1>
                        <p>Đơn hàng đã đặt thành công.</p>
                        <tr>
                            <th style={{ width: '15%' }}>Mã đơn hàng</th>
                            <th style={{ width: '15%' }}>Thời gian đặt</th>
                            <th style={{ width: '15%' }}>Địa chỉ giao hàng</th>
                            <th style={{ width: '15%' }}>Tình trạng đơn hàng</th>
                            <th style={{ width: '15%' }}>Notes</th>
                        </tr>
                        <tr>
                            <td style={{ width: '15%' }}>{sessionStorage.getItem('id')}</td>
                            <td style={{ width: '15%' }}>{sessionStorage.getItem('date')}</td>
                            <td style={{ width: '15%' }}>{sessionStorage.getItem('address')}</td>
                            <td style={{ width: '15%' }}>{sessionStorage.getItem('status')}</td>
                            <td style={{ width: '15%' }}>{sessionStorage.getItem('note')}</td>
                        </tr>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>Vui lòng kiểm tra lại chi tiết đơn hàng tại phần "Order History" của bạn.</p>
                        <a href="index.html" className="btn btn-outline-primary-2 btn-minwidth-lg">
                            <span style={{ color: 'black' }}><Link to="/home">BACK TO HOMEPAGE</Link></span>
                            <i className="icon-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default PaymentInfo;