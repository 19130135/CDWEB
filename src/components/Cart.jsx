import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { cartProducts, selectCartProducts } from '../features/counter/cartProductsSlice';
import { Link, useFormAction } from 'react-router-dom';

Cart.propTypes = {

};

function Cart(props) {

    const dispatch = useDispatch();
    const listCartProducts = useSelector(selectCartProducts);

    const [quantity, setQuantity] = useState();
    const [prevQuantity, setPrevQuantity] = useState();

    const [active, setActive] = useState(null);
    const tdRef = useRef(null);

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        // Xử lý logic tương ứng
    };

    const handleSubmit = () => {
        // Xử lý logic khi submit form
        console.log(selectedOption)
        if (selectedOption == 'option1') {
            sessionStorage.setItem('shipping', 0)
        } else if (selectedOption == 'option2') {
            sessionStorage.setItem('shipping', 25000)
        } else {
            sessionStorage.setItem('shipping', 70000)
        }
    };
    let totalPrice = 0;
    const totalCartPrice = () => {
        listCartProducts.forEach(element => {
            console.log(element.product.price);
            totalPrice += (element.product.price * element.quantity);
        });
    }

    let price1Product = 0;

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
        console.log(cartProducts)
    }
    useEffect(() => {
        fetchCartProducts();
    }, [])

    const handleChange = async (event, param1) => {
        console.log("asdsadsa")
        try {
            const response = await axios({
                method: 'PUT',
                url: 'http://localhost:8080/api/order/cartproduct',
                data: {
                    product: {
                        id: param1.id,
                    },
                    quantity: event.target.value,
                },
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            })
            console.log("---res", response)
            if (response.data) {
                dispatch(cartProducts({
                    cartProducts: response.data
                }))
            }
        } catch (error) {
            console.log("---err", error)
        }

        // setQuantity(event.target.value)
        // setActive(param1.id)
        // console.log(event.target.value);

    };


    const handleTotal = (list) => {
        if (list.id === active) {
            return list.price * quantity;
        } else {
            // setPrevQuantity(quantity);
            return list.price * prevQuantity;
        }
    }


    return (
        <body>
            <div className="page-wrapper">

                <main className="main">
                    <div className="page-header text-center" style={{ backgroundImage: 'url(assets/images/page-header-bg.jpg)' }}>
                        <div className="container">
                            <h1 className="page-title">Shopping Cart<span>Shop</span></h1>
                        </div>
                    </div>
                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Shop</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                            </ol>
                        </div>
                    </nav>

                    <div className="page-content">
                        <div className="cart">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <table className="table table-cart table-mobile">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {listCartProducts?.map((cartProduct, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="product-col">
                                                                <div className="product">
                                                                    <figure className="product-media">
                                                                        <a>
                                                                            <img src={cartProduct?.product?.images[0]?.url} alt="Product image" />
                                                                        </a>
                                                                    </figure>

                                                                    <h3 className="product-title">
                                                                        <a>{cartProduct?.product?.name}</a>
                                                                    </h3>
                                                                </div>
                                                            </td>
                                                            <td className="price-col">{cartProduct?.product?.price} VND</td>
                                                            <td className="quantity-col">
                                                                <div className="cart-product-quantity">
                                                                    <input name={cartProduct?.product?.id}
                                                                        // onChange={e=>{handleChangeQuantity(cartProduct?.product)}} 
                                                                        onChange={event => handleChange(event, cartProduct.product)}
                                                                        type="number" n className="form-control"
                                                                        placeholder={cartProduct?.quantity} min="1" step="1" data-decimals="0" required />
                                                                </div>
                                                            </td>

                                                            <td ref={tdRef} name={cartProduct?.product?.id} className="total-col">
                                                                {cartProduct?.product?.price * cartProduct.quantity} VND
                                                            </td>
                                                            <td className="remove-col"><button className="btn-remove"><i className="icon-close"></i></button></td>
                                                        </tr>
                                                    )
                                                })}

                                            </tbody>
                                        </table>

                                        <div className="cart-bottom">
                                            <div className="cart-discount">
                                                <form action="#">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" required placeholder="coupon code" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-outline-primary-2" type="submit"><i className="icon-long-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                    <aside className="col-lg-3">
                                        <div className="summary summary-cart">
                                            <form onSubmit={handleSubmit()}>
                                                <h3 className="summary-title">Cart Total</h3>

                                                <table className="table table-summary">
                                                    <tbody>
                                                        <tr className="summary-subtotal">
                                                            <td>Subtotal:</td>
                                                            <td onLoad={totalCartPrice()}>{totalPrice}</td>
                                                        </tr>
                                                        <tr className="summary-shipping">
                                                            <td>Shipping:</td>
                                                            <td>&nbsp;</td>
                                                        </tr>

                                                        <tr className="summary-shipping-row">
                                                            <td>
                                                                <div className="custom-control custom-radio">
                                                                    <input type="radio"
                                                                        value="option1"
                                                                        checked={selectedOption === 'option1'}
                                                                        onChange={handleOptionChange} id="free-shipping" name="shipping" className="custom-control-input" />
                                                                    <label className="custom-control-label" htmlFor="free-shipping">Miễn phí giao hàng (8 - 10 ngày)</label>
                                                                </div>
                                                            </td>
                                                            <td>0VND</td>
                                                        </tr>

                                                        <tr className="summary-shipping-row">
                                                            <td>
                                                                <div className="custom-control custom-radio">
                                                                    <input type="radio"
                                                                        value="option2"
                                                                        checked={selectedOption === 'option2'}
                                                                        onChange={handleOptionChange} id="standart-shipping" name="shipping" className="custom-control-input" />
                                                                    <label className="custom-control-label" htmlFor="standart-shipping">Bưu điện (5 -7 ngày)</label>
                                                                </div>
                                                            </td>
                                                            <td>25000VND</td>
                                                        </tr>

                                                        <tr className="summary-shipping-row">
                                                            <td>
                                                                <div className="custom-control custom-radio">
                                                                    <input type="radio"
                                                                        value="option3"
                                                                        checked={selectedOption === 'option3'}
                                                                        onChange={handleOptionChange} id="express-shipping" name="shipping" className="custom-control-input" />
                                                                    <label className="custom-control-label" htmlFor="express-shipping">Hỏa tốc (1 - 3 ngày)</label>
                                                                </div>
                                                            </td>
                                                            <td>70000VND</td>
                                                        </tr>

                                                        <tr className="summary-total">
                                                            <td>Total :</td>
                                                            <td>{totalPrice}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="summary-total">*Lưu ý: </td>
                                                            <td style={{ width: '60%' }}>Chưa gồm phí ship</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <a type="submit" value="Submit" className="btn btn-outline-primary-2 btn-order btn-block"><Link to="/cart/checkout">PROCEED TO CHECKOUT</Link></a>
                                            </form>
                                        </div>

                                        <a href="category.html" className="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i className="icon-refresh"></i></a>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button>


            <div className="mobile-menu-overlay"></div>

            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close"></i></span>

                    <form action="#" method="get" className="mobile-search">
                        <label htmlFor="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                    </form>


                </div>
            </div>





        </body>
    );
}

export default Cart;