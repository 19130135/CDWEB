import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalDetailItem from '../ModalDetailItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts, setAllProducts } from '../../features/counter/productsSlice';
import axios from 'axios';

AdminPage.propTypes = {

};

function AdminPage(props) {
    const dispatch = useDispatch();
    const listAllProducts = useSelector(selectAllProducts);
    const fetchAllProducts = async () => {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:8080/api/product/products',
        })
        console.log(response)
        if (response.data) {
            dispatch(setAllProducts({
                products: response.data
            }))
        }
    }
    useEffect(() => {
        fetchAllProducts();
    }, [])
    return (
        <main className="main">
            <div className="page-header text-center" style={{ backgroundImage: ' url(assets/images/page-header-bg.jpg)' }}>
                <div className="container">
                    <h1 className="page-title">Admin Page<span>TechShop</span></h1>
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
                                        <a className="nav-link" id="tab-orders-link" data-toggle="tab" href="#tab-orders" role="tab" aria-controls="tab-orders" aria-selected="false">Products Management</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-address-link" data-toggle="tab" href="#tab-address" role="tab" aria-controls="tab-address" aria-selected="false">Accounts Management</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-account-link" data-toggle="tab" href="#tab-account" role="tab" aria-controls="tab-account" aria-selected="false">Orders Management</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="javascript:" >Sign Out</a>
                                    </li>
                                </ul>
                            </aside>

                            <div className="col-md-8 col-lg-9">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-dashboard" role="tabpanel" aria-labelledby="tab-dashboard-link">
                                        <p>Hello <span className="font-weight-normal text-dark">{localStorage.getItem('username')}</span> (not <span className="font-weight-normal text-dark">{localStorage.getItem('username')}</span>? <a href="javascript:" >Log out</a>)
                                            <br />
                                            Từ giao diện này bạn có thể xem được lịch sử đặt hàng, thay đổi mật khẩu và đăng xuất tài khoản của bạn.</p>
                                    </div>

                                    <div className="tab-pane fade" id="tab-orders" role="tabpanel" aria-labelledby="tab-orders-link">
                                        <table >
                                            <tr>
                                                <th style={{ width: '15%' }}>Mã sản phẩm</th>
                                                <th style={{ width: '15%' }}>Tên sản phẩm</th>
                                                <th style={{ width: '15%' }}>Phân loại</th>
                                                <th style={{ width: '15%' }}>Số lượng trong kho</th>
                                                <th style={{ width: '15%' }}>Đơn giá</th>
                                            </tr>
                                            {listAllProducts?.map((product, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{product?.id}</td>
                                                        <td>{product?.name}</td>
                                                        <td>{product?.category}</td>
                                                        <td>{product?.quantity}</td>
                                                        <td>{product?.price}</td>
                                                    </tr>

                                                )
                                            })}
                                            {/* <ModalDetailItem showModal={showModal} setShowModal={setShowModal} /> */}
                                        </table>
                                        <a href="category.html" className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right"></i></a>
                                    </div>

                                    <div className="tab-pane fade" id="tab-downloads" role="tabpanel" aria-labelledby="tab-downloads-link">
                                        <p>No downloads available yet.</p>
                                        <a href="category.html" className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right"></i></a>
                                    </div>

                                    <div className="tab-pane fade" id="tab-address" role="tabpanel" aria-labelledby="tab-address-link">
                                        <table >
                                            <tr>
                                                <th style={{ width: '15%' }}>Mã sản phẩm</th>
                                                <th style={{ width: '15%' }}>Tên sản phẩm</th>
                                                <th style={{ width: '15%' }}>Phân loại</th>
                                                <th style={{ width: '15%' }}>Số lượng trong kho</th>
                                                <th style={{ width: '15%' }}>Đơn giá</th>
                                            </tr>
                                            {listAllProducts?.map((product, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{product?.id}</td>
                                                        <td>{product?.name}</td>
                                                        <td>{product?.category}</td>
                                                        <td>{product?.quantity}</td>
                                                        <td>{product?.price}</td>
                                                    </tr>

                                                )
                                            })}
                                            {/* <ModalDetailItem showModal={showModal} setShowModal={setShowModal} /> */}
                                        </table>
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
export default AdminPage;