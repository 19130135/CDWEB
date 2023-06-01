import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, selectProducts } from '../features/counter/productsSlice';
import axios from 'axios';

ProductDetail.propTypes = {

};

function ProductDetail(props) {
    //Lay params = id sau url
    const { id } = useParams();
    console.log(id);
    const [productDetail, setProductDetail] = useState();

    const dispatch = useDispatch();

    const handleAddToCart = async (item) => {
        if (!localStorage.getItem('token')) {
            alert("Bạn phải đăng nhập trước khi sử dụng tính năng này!");
        } else {
            console.log("---item", item)
            const response = await axios({
                method: "POST",
                url: "http://localhost:8080/api/order/cartproduct",
                data: {
                    product: {
                        id: item.id,
                    },
                    quantity: 1,
                },
                headers: {
                    'Authorization': `Basic ${localStorage.getItem('token')}`,
                },
            })
            console.log("Added !" + response)
        }
    }
    const fetchAPIProducts = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: `http://localhost:8080/api/product/productId/${id}`,
            })
            if (response.status === 200) {
                setProductDetail(response.data);
            }
            console.log("---response", response)
        } catch (err) {
            console.log("--errors", err)
        }

    }
    console.log("----PD", productDetail)
    useEffect(() => {
        fetchAPIProducts()
    }, [])
    return (

        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container d-flex align-items-center">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a><Link to="/home">Home</Link></a></li>
                        <li className="breadcrumb-item"><a><Link to="/productList">Products</Link></a></li>
                        <li className="breadcrumb-item active" aria-current="page"></li>
                    </ol>


                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="product-details-top">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="product-gallery product-gallery-vertical">
                                    <div className="row">

                                        <figure className="product-main-image">
                                            <img id="product-zoom" src={productDetail?.images[0]?.url} data-zoom-image="assets/images/products/single/1-big.jpg" alt="product image" />

                                            <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                                                <i className="icon-arrows"></i>
                                            </a>
                                        </figure>

                                        <div id="product-zoom-gallery" className="product-image-gallery">
                                            {productDetail?.images?.map((image, index) => {
                                                return (
                                                    <a className="product-gallery-item active" data-image={image.url} data-zoom-image={image.url}>
                                                        <img src={image.url} alt="product side" />
                                                    </a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="product-details">
                                    <h1 className="product-title">{productDetail?.name}</h1>

                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{ width: `80%` }}></div>
                                        </div>
                                        <a className="ratings-text" href="#product-review-link" id="review-link">( {productDetail?.feedbacks?.length} Reviews )</a>
                                    </div>

                                    <div className="product-price">
                                        {productDetail?.price}VND
                                    </div>

                                    <div className="product-content">
                                        <p>Điền cái gì đó ở đây nè!</p>
                                    </div>
                                    <div className="details-filter-row details-row-size">
                                        <label htmlFor="qty">Quantity: </label>
                                        <div className="product-details-quantity">
                                            <input type="number" id="qty" className="form-control" placeholder='1' min="1" max="10" step="1" data-decimals="0" required />
                                        </div>
                                    </div>

                                    <div className="product-details-action">
                                        <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                    </div>

                                    <div className="product-details-footer">
                                        <div className="product-cat">
                                            <span>Category:</span>
                                            <a href="#">{productDetail?.category}</a>
                                        </div>

                                        <div className="social-icons social-icons-sm">
                                            <span className="social-label">Share:</span>
                                            <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                            <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                            <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                            <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-details-tab">
                        <ul className="nav nav-pills justify-content-center" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="product-info-link" data-toggle="tab" href="#product-info-tab" role="tab" aria-controls="product-info-tab" aria-selected="false">Additional information</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="product-shipping-link" data-toggle="tab" href="#product-shipping-tab" role="tab" aria-controls="product-shipping-tab" aria-selected="false">Shipping & Returns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="product-review-link" data-toggle="tab" href="#product-review-tab" role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews ({productDetail?.feedbacks?.length})</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                                <div className="product-desc-content">
                                    <h3>Product Information</h3>
                                    <p>{productDetail?.decription}</p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="product-info-tab" role="tabpanel" aria-labelledby="product-info-link">
                                <div className="product-desc-content">
                                    <h3>Information</h3>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="product-shipping-tab" role="tabpanel" aria-labelledby="product-shipping-link">
                                <div className="product-desc-content">
                                    <h3>Delivery & returns</h3>

                                </div>
                            </div>
                            <div className="tab-pane fade" id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
                                <div className="reviews">
                                    <h3>Reviews ({productDetail?.feedbacks?.length || 0})</h3>
                                    {productDetail?.feedbacks.map((feedback, index) => {
                                        return (
                                            <div className="review">
                                                <div className="row no-gutters">
                                                    <div className="col-auto">
                                                        <h4><a href="#">{feedback?.userName}</a></h4>
                                                        <div className="ratings-container">
                                                            <div className="ratings">
                                                                <div className="ratings-val" style={{ width: `${feedback.star}*20%` }}></div>
                                                            </div>
                                                        </div>
                                                        <span className="review-date">6 days ago</span>
                                                    </div>
                                                    <div className="col">
                                                        <h4>Sản phẩm: {feedback?.product}</h4>

                                                        <div className="review-content">
                                                            <p>{feedback?.comment || "Khách hàng không viết gì"}</p>
                                                        </div>

                                                        <div className="review-action">
                                                            <a href="#"><i className="icon-thumbs-up"></i>Helpful (0)</a>
                                                            <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="title text-center mb-4">You May Also Like</h2>

                    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                        data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                },
                                "1200": {
                                    "items":4,
                                    "nav": true,
                                    "dots": false
                                }
                            }
                        }'>
                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <span className="product-label label-new">New</span>
                                <a href="product.html">
                                    <img src="assets/images/products/product-4.jpg" alt="Product image" className="product-image" />
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a onClick={() => { handleAddToCart(productDetail) }} className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Women</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Brown paperbag waist <br />pencil skirt</a></h3>
                                <div className="product-price">
                                    $60.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{ width: ' 20%' }}></div>
                                    </div>
                                    <span className="ratings-text">( 2 Reviews )</span>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="assets/images/products/product-4-thumb.jpg" alt="product desc" />
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/products/product-4-2-thumb.jpg" alt="product desc" />
                                    </a>

                                    <a href="#">
                                        <img src="assets/images/products/product-4-3-thumb.jpg" alt="product desc" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <span className="product-label label-out">Out of Stock</span>
                                <a href="product.html">
                                    <img src="assets/images/products/product-6.jpg" alt="Product image" className="product-image" />
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Jackets</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Khaki utility boiler jumpsuit</a></h3>
                                <div className="product-price">
                                    <span className="out-price">$120.00</span>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{ width: ' 80%' }}></div>
                                    </div>
                                    <span className="ratings-text">( 6 Reviews )</span>
                                </div>
                            </div>
                        </div>

                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <span className="product-label label-top">Top</span>
                                <a href="product.html">
                                    <img src="assets/images/products/product-11.jpg" alt="Product image" className="product-image" />
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Shoes</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Light brown studded Wide fit wedges</a></h3>
                                <div className="product-price">
                                    $110.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{ width: ' 80%' }}></div>
                                    </div>
                                    <span className="ratings-text">( 1 Reviews )</span>
                                </div>

                                <div className="product-nav product-nav-thumbs">
                                    <a href="#" className="active">
                                        <img src="assets/images/products/product-11-thumb.jpg" alt="product desc" />
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/products/product-11-2-thumb.jpg" alt="product desc" />
                                    </a>

                                    <a href="#">
                                        <img src="assets/images/products/product-11-3-thumb.jpg" alt="product desc" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/products/product-10.jpg" alt="Product image" className="product-image" />
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Jumpers</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Yellow button front tea top</a></h3>
                                <div className="product-price">
                                    $56.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{ width: ' 0%' }}></div>
                                    </div>
                                    <span className="ratings-text">( 0 Reviews )</span>
                                </div>
                            </div>
                        </div>

                        <div className="product product-7 text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/products/product-7.jpg" alt="Product image" className="product-image" />
                                </a>

                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                            </figure>

                            <div className="product-body">
                                <div className="product-cat">
                                    <a href="#">Jeans</a>
                                </div>
                                <h3 className="product-title"><a href="product.html">Blue utility pinafore denim dress</a></h3>
                                <div className="product-price">
                                    $76.00
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{ width: ' 20%' }}></div>
                                    </div>
                                    <span className="ratings-text">( 2 Reviews )</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetail;