import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cartProducts, selectCartProducts } from '../features/counter/cartProductsSlice';
import axios from 'axios';
import { useNavigate } from 'react-router';

Checkout.propTypes = {

};

function Checkout(props) {

    const [selectedOption, setSelectedOption] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);
    const ssubmit = () => {
        setIsSubmit(true);
    }

    const handleOptionChange = (e) => {
        console.log("---selected", e.target.value)
        setSelectedOption(e.target.value);
        // Xử lý logic tương ứng
    };
    const navigate = useNavigate();
    const orderSuccess = () => {
        navigate("/cart/checkout/success", { replace: true });
    }
    const orderFailed = () => {
        navigate("/cart/checkout/failed", { replace: true });
    }

    const handleSubmit = () => {
        // Xử lý logic khi submit form
        // console.log(selectedOption);
        // console.log("asdkjkbavsb")
        if (selectedOption == 'option1' && isSubmit) {
            console.log("OPTION 1 SELECTED");
            orderABill();
        } else if (selectedOption == 'option2' && isSubmit) {
            console.log("OPTION 2 SELECTED");
            paymentVNPAY();
        }
    };
    const [address, setAddress] = useState("");

    const handleChangeAddress = (e) => {
        setAddress(e.target.value)
        console.log(e.target.value)
    }
    const [phone, setPhone] = useState("");

    const handleChangePhone = (e) => {
        setPhone(e.target.value)
        console.log(e.target.value)
    }
    const [note, setNote] = useState("");

    const handleChangeNote = (e) => {
        setNote(e.target.value)
        console.log(e.target.value)
    }
    const listCartProducts = useSelector(selectCartProducts);
    // console.log(listCartProducts)
    const dispatch = useDispatch();
    let totalPrice = 0;
    const totalCartPrice = () => {
        listCartProducts.forEach(element => {
            // console.log(element.product.price);
            totalPrice += (element.product.price * element.quantity);
        });
        totalPrice += parseInt(sessionStorage.getItem('shipping'));
    }

    // thanh toan khi nhan hang
    const orderABill = async () => {
        // console.log("done accessed orderABill")
        try {
            const response = await axios({
                method: 'POST',
                url: "http://localhost:8080/api/order",
                data: {
                    price: totalPrice,
                    shipprice: parseInt(sessionStorage.getItem('shipping')),
                    address: address,
                    phone: phone,
                    paid: false,
                    note: note,
                    details: listCartProducts.map((cartProd, index) => (
                        {
                            product: {
                                id: cartProd.product.id,
                            },
                            quantity: cartProd.quantity,
                        }
                    ))
                },
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            });
            console.log("---resORDER", response.status)
            orderSuccess();
        } catch (error) {
            console.log("---err", error)
            orderFailed();
        }
    }

    // Thanh toan VNPAY
    const paymentVNPAY = async () => {

        try {
            console.log("---totalPrice", totalPrice)
            const response = await axios({
                method: 'POST',
                url: "http://localhost:8080/payment",
                data: {
                    price: totalPrice,
                    shipprice: parseInt(sessionStorage.getItem('shipping')),
                    address: address,
                    phone: phone,
                    paid: false,
                    note: note,
                    details: listCartProducts.map((cartProd, index) => (
                        {
                            product: {
                                id: cartProd.product.id,
                            },
                            quantity: cartProd.quantity,
                        }
                    ))
                },
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            });
            console.log("---resORDER", response)

            const url = response.data.url;
            window.open(url, '_blank');
            // orderSuccess();
        } catch (error) {
            console.log("---err", error)
            // orderFailed();
        }
    }

    const fetchCartProducts = async () => {
        console.log("Loading API ...");
        const response = await axios({
            method: "GET",
            url: "http://localhost:8080/api/order/cartproducts",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        console.log("---res", response);
        if (response.data) {
            dispatch(cartProducts({
                cartProducts: response.data
            }))
        }
        // console.log(cartProducts)
    }
    useEffect(() => {
        fetchCartProducts();
    }, [])

    return (
        <div>
            <main className="main">
                <div className="page-header text-center" style={{ backgroundImage: 'url(assets/images/page-header-bg.jpg)' }}>
                    <div className="container">
                        <h1 className="page-title">Checkout<span>Shop</span></h1>
                    </div>
                </div>
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Shop</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="checkout">
                        <div className="container">
                            <div className="checkout-discount">
                                <form action="#">
                                    <input type="text" className="form-control" required id="checkout-discount-input" />
                                    <label htmlFor="checkout-discount-input" className="text-truncate">Have a coupon? <span>Click here to enter your code</span></label>
                                </form>
                            </div>
                            <form >
                                <div className="row">
                                    <div className="col-lg-9">
                                        <h2 className="checkout-title">Billing Details</h2>


                                        <label>Address</label>
                                        <input onChange={handleChangeAddress} type="text" className="form-control" required />

                                        <label>Phone number</label>
                                        <input onChange={handleChangePhone} type="text" className="form-control" required />

                                        <label>Order notes (optional)</label>
                                        <textarea onChange={handleChangeNote} className="form-control" cols="30" rows="4" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                                    </div>
                                    <aside className="col-lg-3">
                                        <div className="summary">
                                            <h3 className="summary-title">Your Order</h3>

                                            <table className="table table-summary">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {listCartProducts?.map((cartProduct, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td><a >{cartProduct?.product?.name}</a></td>
                                                                <td>{cartProduct?.quantity * cartProduct?.product?.price}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                    <tr className="summary-subtotal">
                                                        <td>Subtotal:</td>
                                                        <td onLoad={totalCartPrice()}>{totalPrice - parseInt(sessionStorage.getItem('shipping'))}VND</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shipping:</td>
                                                        <td>{sessionStorage.getItem('shipping')}</td>
                                                    </tr>
                                                    <tr className="summary-total">
                                                        <td>Total:</td>
                                                        <td>{totalPrice}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <form onSubmit={handleSubmit()}>
                                                <div className="accordion-summary" id="accordion-payment">
                                                    <div className="card">
                                                        <div className="card-header" id="heading-1">
                                                            <h2 className="card-title">
                                                                <input type="radio"
                                                                    value="option1"
                                                                    // checked={selectedOption === 'option1'}
                                                                    onChange={handleOptionChange} id="op1" name='checkout' data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1" />
                                                                <h5>Thanh toán khi nhận hàng</h5>

                                                            </h2>
                                                        </div>
                                                        <div id="collapse-1" className="collapse show" aria-labelledby="heading-1" data-parent="#accordion-payment">
                                                            <div className="card-body">
                                                                Thực hiện thanh toán đơn hàng này khi bạn nhận được hàng trên tay bởi shipper.
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-header" id="heading-2">
                                                            <h2 className="card-title">
                                                                <input type="radio"
                                                                    value="option2"
                                                                    checked={selectedOption === 'option2'}
                                                                    onChange={handleOptionChange} id="op2" name='checkout' className="collapsed" href="#collapse-2" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-2" />
                                                                <h5>VN Pay</h5>

                                                            </h2>
                                                        </div>
                                                        <div id="collapse-2" className="collapse" aria-labelledby="heading-2" data-parent="#accordion-payment">
                                                            <div className="card-body">
                                                                Một phương thức thanh toán online thông qua dịch vụ thanh toán trực tuyến của VNPAY.
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                                <a onClick={ssubmit} type="submit" value="Submit" className="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</a>

                                                {/* <button type="submit" value="Submit" className="btn btn-outline-primary-2 btn-order btn-block">
                                                    <span className="btn-text">Place Order</span>
                                                    <span className="btn-hover-text">Proceed to Checkout</span>
                                                </button> */}
                                            </form>
                                        </div>
                                    </aside>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Checkout;