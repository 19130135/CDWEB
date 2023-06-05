import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { orderModal, ordersInfo, selectOrderModal, selectOrdersInfo } from '../features/counter/orderSlice';
import ModalDetailItem from './ModalDetailItem';

MyAccount.propTypes = {

};


function MyAccount(props) {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/home");
    }
    const handleLogout = () => {
        localStorage.clear();
        handleNavigate();
    }
    // const [isOpen, setIsOpen] = useState(false);
    let check = false;
    const [showModal, setShowModal] = useState(false);

    const openModal = (billDetail) => {
        setShowModal(true);
        dispatch(orderModal({
                billDetails: { billDetail },
        }))
    };


    const listOrders = useSelector(selectOrdersInfo);
    // console.log(listOrders)
    const dispatch = useDispatch();
    const fetchOrders = async () => {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:8080/api/order/history',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        // console.log(response.data);
        if (response.data) {
            dispatch(ordersInfo({
                orders: response.data
            }))
        }
    }
    useEffect(() => {
        fetchOrders();
    }, [])

    return (
        <main className="main">
            <div className="page-header text-center" style={{ backgroundImage: ' url(assets/images/page-header-bg.jpg)' }}>
                <div className="container">
                    <h1 className="page-title">My Account<span>Shop</span></h1>
                </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Shop</a></li>
                        <li className="breadcrumb-item active" aria-current="page">My Account</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="dashboard">
                    <div className="container">
                        <div className="row">
                            <aside className="col-md-4 col-lg-3">
                                <ul className="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="tab-dashboard-link" data-toggle="tab" href="#tab-dashboard" role="tab" aria-controls="tab-dashboard" aria-selected="true">General</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-orders-link" data-toggle="tab" href="#tab-orders" role="tab" aria-controls="tab-orders" aria-selected="false">Orders History</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-address-link" data-toggle="tab" href="#tab-address" role="tab" aria-controls="tab-address" aria-selected="false">Adresses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-account-link" data-toggle="tab" href="#tab-account" role="tab" aria-controls="tab-account" aria-selected="false">Account Details</a>
                                    </li>
                                    <li onClick={() => { handleLogout() }} className="nav-item">
                                        <a className="nav-link" href="javascript:" >Sign Out</a>
                                    </li>
                                </ul>
                            </aside>

                            <div className="col-md-8 col-lg-9">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-dashboard" role="tabpanel" aria-labelledby="tab-dashboard-link">
                                        <p>Hello <span className="font-weight-normal text-dark">{localStorage.getItem('username')}</span> (not <span className="font-weight-normal text-dark">{localStorage.getItem('username')}</span>? <a href="javascript:" onClick={() => { handleLogout() }}>Log out</a>)
                                            <br />
                                            Từ giao diện này bạn có thể xem được lịch sử đặt hàng, thay đổi mật khẩu và đăng xuất tài khoản của bạn.</p>
                                    </div>

                                    <div className="tab-pane fade" id="tab-orders" role="tabpanel" aria-labelledby="tab-orders-link">
                                        <table >
                                            <tr>
                                                <th style={{ width: '15%' }}>Mã đơn hàng</th>
                                                <th style={{ width: '15%' }}>Thời gian tạo đơn hàng</th>
                                                <th style={{ width: '15%' }}>Địa chỉ giao hàng</th>
                                                <th style={{ width: '15%' }}>Tình trạng đơn hàng</th>
                                                <th style={{ width: '15%' }}>Chi tiết đơn hàng</th>
                                            </tr>
                                            {listOrders?.map((orders, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{orders?.id}</td>
                                                        <td>{orders?.datecreate}</td>
                                                        <td>{orders?.address}</td>
                                                        <td>{orders?.status}</td>
                                                        <td><button onClick={() => { openModal(orders?.billDetails) }}>Chi tiết</button></td>

                                                    </tr>

                                                )
                                            })}
                                            <ModalDetailItem showModal={showModal} setShowModal={setShowModal} />
                                        </table>
                                        <a href="category.html" className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right"></i></a>
                                    </div>

                                    <div className="tab-pane fade" id="tab-downloads" role="tabpanel" aria-labelledby="tab-downloads-link">
                                        <p>No downloads available yet.</p>
                                        <a href="category.html" className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right"></i></a>
                                    </div>

                                    <div className="tab-pane fade" id="tab-address" role="tabpanel" aria-labelledby="tab-address-link">
                                        <p>The following addresses will be used on the checkout page by default.</p>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="card card-dashboard">
                                                    <div className="card-body">
                                                        <h3 className="card-title">Billing Address</h3>

                                                        <p>User Name <br />
                                                            User Company <br />
                                                            John str <br />
                                                            New York, NY 10001 <br />
                                                            1-234-987-6543 <br />
                                                            yourmail@mail.com <br />
                                                            <a href="#">Edit <i className="icon-edit"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="card card-dashboard">
                                                    <div className="card-body">
                                                        <h3 className="card-title">Shipping Address</h3>

                                                        <p>You have not set up this type of address yet. <br />
                                                            <a href="#">Edit <i className="icon-edit"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab-account" role="tabpanel" aria-labelledby="tab-account-link">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label>First Name *</label>
                                                    <input type="text" className="form-control" required />
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Last Name *</label>
                                                    <input type="text" className="form-control" required />
                                                </div>
                                            </div>

                                            <label>Display Name *</label>
                                            <input type="text" className="form-control" required />
                                            <small className="form-text">This will be how your name will be displayed in the account section and in reviews</small>

                                            <label>Email address *</label>
                                            <input type="email" className="form-control" required />

                                            <label>Current password (leave blank to leave unchanged)</label>
                                            <input type="password" className="form-control" />

                                            <label>New password (leave blank to leave unchanged)</label>
                                            <input type="password" className="form-control" />

                                            <label>Confirm new password</label>
                                            <input type="password" className="form-control mb-2" />

                                            <button type="submit" className="btn btn-outline-primary-2">
                                                <span>SAVE CHANGES</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </button>
                                        </form>
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

export default MyAccount;