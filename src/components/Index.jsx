import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { increment, selectProducts } from '../features/counter/productsSlice';

Index.propTypes = {

};

function Index(props) {

    const [listProducts, setListProducts] = useState([]);

    const navigate = useNavigate();
    const handleNavigate = (id) => {
        console.log("----id", id)
        navigate(`/productDetail/${id}`);
    }


    // console.log(listProducts);
    const fetchAPIProducts = async () => {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:8080/api/product/available_products',
        })
        console.log(response)
        if (response.data && response.data.length > 0) {
            setListProducts(response.data)
        }
    }
    useEffect(() => {
        fetchAPIProducts();
    }, [])


    return (
        <body>

            <div className="page-wrapper">
                <main className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <div className="intro-slider-container mt-2">
                                    <div className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl"
                                        data-owl-options='{
                                    "dots": true,
                                    "nav": true,
                                    "responsive": {
                                        "1200": {
                                            "nav": true,
                                            "dots": true
                                        }
                                    }
                                }'>
                                        <div className="intro-slide banner-lg" style={{ backgroundImage: ' url(assets/images/demos/demo-22/slider/slide-1.jpg)' }}>
                                            <div className="intro">
                                                <div className="title">
                                                    <a>deal of the day</a>
                                                </div>
                                                <div className="content">
                                                    <h3><span>up to</span> 20% <span>off</span></h3><h4>heavy duty deals</h4>
                                                </div>
                                                <div className="action">
                                                    <a href="category.html">discover now</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="intro-slide banner-lg" style={{ backgroundImage: ' url(assets/images/demos/demo-22/slider/slide-2.jpg)' }}>
                                            <div className="intro">
                                                <div className="title">
                                                    <a>clearance</a>
                                                </div>
                                                <div className="content">
                                                    <h3>power tools  <br />up to <span>30% off</span></h3>
                                                </div>
                                                <div className="action">
                                                    <a href="category.html">discover now</a>
                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                    <span className="slider-loader"></span>
                                </div>
                            </div>
                            <div className="col-lg-4 banner">
                                <div className="col-12" style={{ backgroundImage: ' url(assets/images/demos/demo-22/slider/banner-1.jpg)' }}>
                                    <div className="intro">
                                        <div className="title">
                                            <h3>New arrivals</h3>
                                        </div>
                                        <div className="content">
                                            <h3>up to </h3> <h3 className="highlight">&nbsp;40% off</h3>
                                        </div>
                                        <div className="action">
                                            <a href="category.html">shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12" style={{ backgroundImage: ' url(assets/images/demos/demo-22/slider/banner-2.jpg)' }}>
                                    <div className="intro">
                                        <div className="title">
                                            <h2>outdoor</h2>
                                        </div>
                                        <div className="content">
                                            <h4>power equipment</h4>
                                        </div>
                                        <div className="action">
                                            <a href="category.html">shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12" style={{ backgroundImage: ' url(assets/images/demos/demo-22/slider/banner-3.jpg)' }}>
                                    <div className="intro">
                                        <div className="title">
                                            <h3 className="highlight">save 20%</h3><h3>&nbsp;or more</h3>
                                        </div>
                                        <div className="content">
                                            <h3>deals & savings</h3>
                                        </div>
                                        <div className="action">
                                            <a href="category.html">shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container text-center shop">
                        <h2 className="title mt-4 mb-5"> Shop by Brands </h2>
                        <div className="owl-carousel mb-5 owl-simple" data-toggle="owl"
                            data-owl-options='{
                        "nav": true,
                        "dots": false,
                        "margin": 30,
                        "loop": false,
                        "responsive": {
                            "0": {
                                "items":2
                            },
                            "420": {
                                "items":3
                            },
                            "600": {
                                "items":4
                            },
                            "900": {
                                "items":5
                            },
                            "1024": {
                                "items":6
                            }
                        }
                    }'>
                            <a href="#" className="brand">
                                <img src="assets/images/brands/1.png" alt="Brand Name" />
                            </a>

                            <a href="#" className="brand">
                                <img src="assets/images/brands/2.png" alt="Brand Name" />
                            </a>

                            <a href="#" className="brand">
                                <img src="assets/images/brands/3.png" alt="Brand Name" />
                            </a>

                            <a href="#" className="brand">
                                <img src="assets/images/brands/4.png" alt="Brand Name" />
                            </a>

                            <a href="#" className="brand">
                                <img src="assets/images/brands/5.png" alt="Brand Name" />
                            </a>

                            <a href="#" className="brand">
                                <img src="assets/images/brands/6.png" alt="Brand Name" />
                            </a>

                            <a href="#" className="brand">
                                <img src="assets/images/brands/7.png" alt="Brand Name" />
                            </a>
                        </div>
                    </div>

                    <div className="featured-back" style={{ backgroundImage: ' url(assets/images/demos/demo-22/featured/background.jpg)' }}>
                        <div className="container">
                            <div className="section-title">
                                <ul className="nav nav-pills nav-border-anim" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="tab-featured-link" data-toggle="tab" href="#tab-featured" role="tab" aria-controls="tab-featured" aria-selected="true"><span>Featured</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-best-link" data-toggle="tab" href="#tab-best" role="tab" aria-controls="tab-best" aria-selected="false"><span>Bestsellers</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-sale-link" data-toggle="tab" href="#tab-sale" role="tab" aria-controls="tab-sale" aria-selected="false"><span>Sale</span></a>
                                    </li>
                                </ul>


                                <a className="link" href="#">All Featured Products</a>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    {listProducts?.slice(0, 1).map((product, index) => {
                                        return (
                                            <div className="product-lg">
                                                <figure className="product-media">
                                                    <span className="product-label label-limited">limited time sale</span>
                                                    <a href="product.html">
                                                        <img src={listProducts[2].images[0].url} alt="Product image" className="product-image" />
                                                    </a>

                                                </figure>

                                                <div className="product-body">
                                                    <h3 className="save-price"><span>Save ...</span></h3>
                                                    <h3 className="product-title"><a href="product.html">{listProducts[2].name}</a></h3>
                                                    <div className="product-price">
                                                        <span className="new-price">{listProducts[2].price}VND</span>
                                                        <span className="old-price">Was ...VND</span>
                                                    </div>
                                                    <div className="action">
                                                        <a href="category.html">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="tab-featured" role="tabpanel" aria-labelledby="tab-featured-link">
                                            <div className="row products all">
                                                {listProducts?.map((product, index) => {
                                                    return (
                                                        <div className="col-lg-4 col-6">
                                                            <div className="product product-3 text-center">
                                                                <figure className="product-media">
                                                                    <span className="product-label label-sale">Sale</span>
                                                                    <a href="product.html">
                                                                        <img src={product.images[0].url} alt="Product image" className="product-image" />
                                                                    </a>
                                                                    <div className="product-action-vertical">
                                                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                                    </div>
                                                                </figure>

                                                                <div className="product-body">
                                                                    <div className="product-cat">
                                                                        <a href="#">Woodworking</a>
                                                                    </div>
                                                                    <h3 className="product-title"><a href="product.html">{product.name}</a></h3>
                                                                    <div className="product-price">
                                                                        <span className="new-price">{product.price} VND</span>
                                                                        <br></br>
                                                                        <span className="old-price">Was ...</span>
                                                                    </div>
                                                                </div>

                                                                <div className="product-footer">
                                                                    <div className="ratings-container">
                                                                        <div className="ratings">
                                                                            <div className="ratings-val" style={{ width: '60%' }} />
                                                                        </div>
                                                                        <span className="ratings-text">( 4 Reviews )</span>
                                                                    </div>
                                                                    <div className="product-action">
                                                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab-best" role="tabpanel" aria-labelledby="tab-best-link">
                                            <div className="row products">
                                                <div className="col-lg-4 col-6">
                                                    <div className="product product-3 text-center">
                                                        <figure className="product-media">
                                                            <span className="product-label label-sale">Sale</span>
                                                            <a href="product.html">
                                                                <img src="assets/images/demos/demo-22/featured/product-2.jpg" alt="Product image" className="product-image" />
                                                            </a>

                                                            <div className="product-action-vertical">
                                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                            </div>
                                                        </figure>

                                                        <div className="product-body">
                                                            <div className="product-cat">
                                                                <a href="#">Woodworking</a>
                                                            </div>
                                                            <h3 className="product-title"><a href="product.html">DEWALT DWARA 100</a></h3>
                                                            <div className="product-price">
                                                                <span className="new-price">$23.35</span>
                                                                <span className="old-price">Was $40.99</span>
                                                            </div>
                                                        </div>

                                                        <div className="product-footer">
                                                            <div className="ratings-container">
                                                                <div className="ratings">
                                                                    <div className="ratings-val" style={{ width: '60%' }} />
                                                                </div>
                                                                <span className="ratings-text">( 4 Reviews )</span>
                                                            </div>

                                                            <div className="product-action">
                                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-6">
                                                    <div className="product product-3 text-center">
                                                        <figure className="product-media">
                                                            <a href="product.html">
                                                                <img src="assets/images/demos/demo-22/featured/product-4.jpg" alt="Product image" className="product-image" />
                                                            </a>

                                                            <div className="product-action-vertical">
                                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                            </div>
                                                        </figure>

                                                        <div className="product-body    ">
                                                            <div className="product-cat">
                                                                <a href="#">Power Tools</a>
                                                            </div>
                                                            <h3 className="product-title"><a href="product.html">DEWALT Hammer Drill</a></h3>
                                                            <div className="product-price">
                                                                $79.00
                                                            </div>
                                                        </div>

                                                        <div className="product-footer">
                                                            <div className="ratings-container">
                                                                <div className="ratings">
                                                                    <div className="ratings-val" style={{ width: '60%' }} />
                                                                </div>
                                                                <span className="ratings-text">( 4 Reviews )</span>
                                                            </div>

                                                            <div className="product-action">
                                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-6">
                                                    <div className="product product-3 text-center">
                                                        <figure className="product-media">
                                                            <a href="product.html">
                                                                <img src="assets/images/demos/demo-22/featured/product-5.jpg" alt="Product image" className="product-image" />
                                                            </a>

                                                            <div className="product-action-vertical">
                                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                            </div>
                                                        </figure>

                                                        <div className="product-body">
                                                            <div className="product-cat">
                                                                <a href="#">Air Tools</a>
                                                            </div>
                                                            <h3 className="product-title"><a href="product.html">Makita XBU02PT1</a></h3>
                                                            <div className="product-price">
                                                                $302.20
                                                            </div>
                                                        </div>

                                                        <div className="product-footer">
                                                            <div className="ratings-container">
                                                                <div className="ratings">
                                                                    <div className="ratings-val" style={{ width: '60%' }} />
                                                                </div>
                                                                <span className="ratings-text">( 4 Reviews )</span>
                                                            </div>

                                                            <div className="product-action">
                                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab-sale" role="tabpanel" aria-labelledby="tab-sale-link">
                                            <div className="row products">
                                                <div className="col-lg-4 col-6">
                                                    <div className="product product-3 text-center">
                                                        <figure className="product-media">
                                                            <a href="product.html">
                                                                <img src="assets/images/demos/demo-22/featured/product-4.jpg" alt="Product image" className="product-image" />
                                                            </a>

                                                            <div className="product-action-vertical">
                                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                            </div>
                                                        </figure>

                                                        <div className="product-body">
                                                            <div className="product-cat">
                                                                <a href="#">Power Tools</a>
                                                            </div>
                                                            <h3 className="product-title"><a href="product.html">DEWALT Hammer Drill</a></h3>
                                                            <div className="product-price">
                                                                $79.00
                                                            </div>
                                                        </div>

                                                        <div className="product-footer">
                                                            <div className="ratings-container">
                                                                <div className="ratings">
                                                                    <div className="ratings-val" style={{ width: '60%' }} />
                                                                </div>
                                                                <span className="ratings-text">( 4 Reviews )</span>
                                                            </div>

                                                            <div className="product-action">
                                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-6">
                                                    <div className="product product-3 text-center">
                                                        <figure className="product-media">
                                                            <a href="product.html">
                                                                <img src="assets/images/demos/demo-22/featured/product-5.jpg" alt="Product image" className="product-image" />
                                                            </a>

                                                            <div className="product-action-vertical">
                                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                            </div>
                                                        </figure>

                                                        <div className="product-body">
                                                            <div className="product-cat">
                                                                <a href="#">Air Tools</a>
                                                            </div>
                                                            <h3 className="product-title"><a href="product.html">Makita XBU02PT1</a></h3>
                                                            <div className="product-price">
                                                                $302.20
                                                            </div>
                                                        </div>

                                                        <div className="product-footer">
                                                            <div className="ratings-container">
                                                                <div className="ratings">
                                                                    <div className="ratings-val" style={{ width: '60%' }} />
                                                                </div>
                                                                <span className="ratings-text">( 4 Reviews )</span>
                                                            </div>

                                                            <div className="product-action">
                                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-6">
                                                    <div className="product product-3 text-center">
                                                        <figure className="product-media">
                                                            <span className="product-label label-sale">Sale</span>
                                                            <a href="product.html">
                                                                <img src="assets/images/demos/demo-22/featured/product-6.jpg" alt="Product image" className="product-image" />
                                                            </a>

                                                            <div className="product-action-vertical">
                                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                            </div>
                                                        </figure>

                                                        <div className="product-body">
                                                            <div className="product-cat">
                                                                <a href="#">Hand Tools</a>
                                                            </div>
                                                            <h3 className="product-title"><a href="product.html">DEWALT DWASHRIR</a></h3>
                                                            <div className="product-price">
                                                                <span className="new-price">$70.95</span>
                                                                <span className="old-price">Was $90.00</span>
                                                            </div>
                                                        </div>

                                                        <div className="product-footer">
                                                            <div className="ratings-container">
                                                                <div className="ratings">
                                                                    <div className="ratings-val" style={{ width: '60%' }} />
                                                                </div>
                                                                <span className="ratings-text">( 4 Reviews )</span>
                                                            </div>

                                                            <div className="product-action">
                                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-6">
                                                    <div className="product product-3 text-center">
                                                        <figure className="product-media">
                                                            <a href="product.html">
                                                                <img src="assets/images/demos/demo-22/featured/product-7.jpg" alt="Product image" className="product-image" />
                                                            </a>

                                                            <div className="product-action-vertical">
                                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                            </div>
                                                        </figure>

                                                        <div className="product-body">
                                                            <div className="product-cat">
                                                                <a href="#">Power Tools</a>
                                                            </div>
                                                            <h3 className="product-title"><a href="product.html">Milwaukee 2648-20</a></h3>
                                                            <div className="product-price">
                                                                $151.75
                                                            </div>
                                                        </div>

                                                        <div className="product-footer">
                                                            <div className="ratings-container">
                                                                <div className="ratings">
                                                                    <div className="ratings-val" style={{ width: '60%' }} />
                                                                </div>
                                                                <span className="ratings-text">( 4 Reviews )</span>
                                                            </div>

                                                            <div className="product-nav product-nav-dots">
                                                                <a href="#" className="active" style={{ background: ' #af5f23' }}><span className="sr-only">Color name</span></a>
                                                                <a href="#" style={{ background: ' #806f55' }}><span className="sr-only">Color name</span></a>
                                                                <a href="#" style={{ background: ' #333333' }}><span className="sr-only">Color name</span></a>
                                                            </div>

                                                            <div className="product-action">
                                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                                <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="mb-2"></div>
                        </div>
                    </div>

                    <div className="newsletter" style={{ backgroundImage: ' url(assets/images/demos/demo-22/newsLetter/background.jpg)' }}>
                        <div className="container">
                            <div className="subscribe text-center">
                                <div className="intro">
                                    <h3 className="title">Subscribe for Our Newsletter</h3>
                                    <h4 className="content">Learn about new offers and get more deals by joining our newsletter</h4>
                                </div>
                                <div className="subscribe action">
                                    <form action="#">
                                        <div className="input-group">
                                            <input type="email" placeholder="Enter your Email Address" aria-label="Email Adress" required="" />
                                            <div className="input-group-append">
                                                <button className="btn btn-subscribe" type="submit"><span>Subscribe now</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container banner-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 banner-lg">
                                <a href="category.html">
                                    <img src="assets/images/demos/demo-22/banner/banner-1.jpg" />
                                </a>
                                <div className="banner-content">
                                    <div className="title">
                                        <a href="category.html">save up to 30%</a>
                                    </div>
                                    <div className="content">
                                        <a href="category.html">
                                            <h3 className="highlight">Premium Brands</h3>
                                            <h4>htmlFor the Toughest Jobs</h4>
                                        </a>
                                    </div>
                                    <div className="action">
                                        <a href="category.html">discover now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 banner-lg">
                                <a href="category.html">
                                    <img src="assets/images/demos/demo-22/banner/banner-2.jpg" />
                                </a>
                                <div className="banner-content">
                                    <div className="title">
                                        <a href="category.html">best sellers in tools</a>
                                    </div>
                                    <div className="content">
                                        <a href="category.html">
                                            <h3>Pro-level tools</h3>
                                            <h4 className="highlight">Save on Bestsellers</h4>
                                        </a>
                                    </div>
                                    <div className="action">
                                        <a href="category.html">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container service">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-rocket"></i>
                                    </span>

                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Free Shipping</h3>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-rotate-left"></i>
                                    </span>

                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Free Returns</h3>
                                        <p>Within 30 days</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-info-circle"></i>
                                    </span>

                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                                        <p>When you sign up</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-life-ring"></i>
                                    </span>

                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">We Support</h3>
                                        <p>24/7 amazing services</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container popular">
                        <hr className="mb-5" />

                        <div className="section-title">
                            <div><p className="title"><span>Popular Products</span></p></div>

                            <a className="link" href="#">See All Products</a>
                        </div>

                        <div className="row products">
                            {listProducts.map((product, index) => {
                                return (
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                        <div className="product product-3 text-center">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src={product.images[0].url} alt="Product image" className="product-image" />
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">{product.category}</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">{product.name}</a></h3>
                                                <div className="product-price">
                                                    <span className="new-price">{product.price}VND</span>
                                                    <span className="old-price">Was ...VND</span>
                                                </div>
                                            </div>

                                            <div className="product-footer">
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '60%' }} />
                                                    </div>
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>

                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: ' #af5f23' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: ' #806f55' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: ' #333333' }}><span className="sr-only">Color name</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>



                    <div className="container post">

                        <div className="section-title">
                            <div><p className="title"><span>Our Blog Posts</span></p></div>

                            <a className="link" href="#">See All Posts</a>
                        </div>

                        <div className="owl-carousel owl-simple mb-4" data-toggle="owl"
                            data-owl-options='{
                        "nav": true,
                        "dots": false,
                        "items": 3,
                        "margin": 20,
                        "loop": false,
                        "responsive": {
                            "0": {
                                "items":1,
                                "dots":true
                            },
                            "520": {
                                "items":2,
                                "dots":true
                            },
                            "768": {
                                "items":3
                            }
                        }
                    }'>
                            <article className="entry">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-22/post/post-1.jpg" alt="image desc" />
                                    </a>
                                </figure>

                                <div className="entry-body text-center">
                                    <div className="entry-meta">
                                        <a href="#">Nov 22, 2018</a>, 0 Comments
                                    </div>

                                    <h3 className="entry-title">
                                        <a href="single.html">Sed adipiscing ornare.</a>
                                    </h3>

                                    <div className="entry-content">
                                        <a href="single.html" className="read-more">Continue Reading</a>
                                    </div>
                                </div>
                            </article>

                            <article className="entry">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-22/post/post-2.jpg" alt="image desc" />
                                    </a>
                                </figure>

                                <div className="entry-body text-center">
                                    <div className="entry-meta">
                                        <a href="#">Nov 22, 2018</a>, 0 Comments
                                    </div>

                                    <h3 className="entry-title">
                                        <a href="single.html">Aenean dignissim pellentesque.</a>
                                    </h3>

                                    <div className="entry-content">
                                        <a href="single.html" className="read-more">Continue Reading</a>
                                    </div>
                                </div>
                            </article>

                            <article className="entry">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-22/post/post-3.jpg" alt="image desc" />
                                    </a>
                                </figure>

                                <div className="entry-body text-center">
                                    <div className="entry-meta">
                                        <a href="#">Nov 22, 2018</a>, 2 Comments
                                    </div>

                                    <h3 className="entry-title">
                                        <a href="single.html">Quisque volutpat mattis.</a>
                                    </h3>

                                    <div className="entry-content">
                                        <a href="single.html" className="read-more">Continue Reading</a>
                                    </div>
                                </div>
                            </article>

                            <article className="entry">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-22/post/post-2.jpg" alt="image desc" />
                                    </a>
                                </figure>

                                <div className="entry-body text-center">
                                    <div className="entry-meta">
                                        <a href="#">Nov 22, 2018</a>, 0 Comments
                                    </div>

                                    <h3 className="entry-title">
                                        <a href="single.html">Aenean dignissim pellentesque.</a>
                                    </h3>

                                    <div className="entry-content">
                                        <a href="single.html" className="read-more">Continue Reading</a>
                                    </div>
                                </div>
                            </article>

                        </div>

                    </div>

                </main>

                <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button>


                <div className="mobile-menu-overlay"></div>
                <div className="mobile-menu-container mobile-menu-light">
                    <div className="mobile-menu-wrapper">
                        <span className="mobile-menu-close"><i className="icon-close"></i></span>

                        <form action="#" method="get" className="mobile-search">
                            <label htmlFor="mobile-search" className="sr-only">Search</label>
                            <input type="search" className="htmlForm-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                            <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                        </form>

                        <nav className="mobile-nav">
                            <ul className="mobile-menu">
                                <li className="active">
                                    <a href="index.html">Home</a>

                                    <ul>
                                        <li><a href="index-1.html">01 - furniture store</a></li>
                                        <li><a href="index-2.html">02 - furniture store</a></li>
                                        <li><a href="index-3.html">03 - electronic store</a></li>
                                        <li><a href="index-4.html">04 - electronic store</a></li>
                                        <li><a href="index-5.html">05 - fashion store</a></li>
                                        <li><a href="index-6.html">06 - fashion store</a></li>
                                        <li><a href="index-7.html">07 - fashion store</a></li>
                                        <li><a href="index-8.html">08 - fashion store</a></li>
                                        <li><a href="index-9.html">09 - fashion store</a></li>
                                        <li><a href="index-10.html">10 - shoes store</a></li>
                                        <li><a href="index-11.html">11 - furniture simple store</a></li>
                                        <li><a href="index-12.html">12 - fashion simple store</a></li>
                                        <li><a href="index-13.html">13 - market</a></li>
                                        <li><a href="index-14.html">14 - market fullwidth</a></li>
                                        <li><a href="index-15.html">15 - lookbook 1</a></li>
                                        <li><a href="index-16.html">16 - lookbook 2</a></li>
                                        <li><a href="index-17.html">17 - fashion store</a></li>
                                        <li><a href="index-18.html">18 - fashion store (with sidebar)</a></li>
                                        <li><a href="index-19.html">19 - games store</a></li>
                                        <li><a href="index-20.html">20 - book store</a></li>
                                        <li><a href="index-21.html">21 - sport store</a></li>
                                        <li><a href="index-22.html">22 - tools store</a></li>
                                        <li><a href="index-23.html">23 - fashion left navigation store</a></li>
                                        <li><a href="index-24.html">24 - extreme sport store</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="category.html">Shop</a>
                                    <ul>
                                        <li><a href="category-list.html">Shop List</a></li>
                                        <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
                                        <li><a href="category.html">Shop Grid 3 Columns</a></li>
                                        <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
                                        <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></a></li>
                                        <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
                                        <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
                                        <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="#">Lookbook</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="product.html" className="sf-with-ul">Product</a>
                                    <ul>
                                        <li><a href="product.html">Default</a></li>
                                        <li><a href="product-centered.html">Centered</a></li>
                                        <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                        <li><a href="product-gallery.html">Gallery</a></li>
                                        <li><a href="product-sticky.html">Sticky Info</a></li>
                                        <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                        <li><a href="product-fullwidth.html">Full Width</a></li>
                                        <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                    <ul>
                                        <li>
                                            <a href="about.html">About</a>

                                            <ul>
                                                <li><a href="about.html">About 01</a></li>
                                                <li><a href="about-2.html">About 02</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>

                                            <ul>
                                                <li><a href="contact.html">Contact 01</a></li>
                                                <li><a href="contact-2.html">Contact 02</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="faq.html">FAQs</a></li>
                                        <li><a href="404.html">Error 404</a></li>
                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog.html">Blog</a>

                                    <ul>
                                        <li><a href="blog.html">classNameic</a></li>
                                        <li><a href="blog-listing.html">Listing</a></li>
                                        <li>
                                            <a href="#">Grid</a>
                                            <ul>
                                                <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                                <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                                <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                                <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Masonry</a>
                                            <ul>
                                                <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                                <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                                <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                                <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Mask</a>
                                            <ul>
                                                <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                                <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Single Post</a>
                                            <ul>
                                                <li><a href="single.html">Default with sidebar</a></li>
                                                <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                                                <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="elements-list.html">Elements</a>
                                    <ul>
                                        <li><a href="elements-products.html">Products</a></li>
                                        <li><a href="elements-typography.html">Typography</a></li>
                                        <li><a href="elements-titles.html">Titles</a></li>
                                        <li><a href="elements-banners.html">Banners</a></li>
                                        <li><a href="elements-product-category.html">Product Category</a></li>
                                        <li><a href="elements-video-banners.html">Video Banners</a></li>
                                        <li><a href="elements-buttons.html">Buttons</a></li>
                                        <li><a href="elements-accordions.html">Accordions</a></li>
                                        <li><a href="elements-tabs.html">Tabs</a></li>
                                        <li><a href="elements-testimonials.html">Testimonials</a></li>
                                        <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                                        <li><a href="elements-portfolio.html">Portfolio</a></li>
                                        <li><a href="elements-cta.html">Call to Action</a></li>
                                        <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        <div className="social-icons">
                            <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                            <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                            <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                            <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="icon-close"></i></span>
                            </button>

                            <div className="htmlForm-box">
                                <div className="htmlForm-tab">
                                    <ul className="nav nav-pills nav-fill" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="tab-content-5">
                                        <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                            <form action="#">
                                                <div className="htmlForm-group">
                                                    <label htmlFor="singin-email">Username or email address *</label>
                                                    <input type="text" className="htmlForm-control" id="singin-email" name="singin-email" required />
                                                </div>

                                                <div className="htmlForm-group">
                                                    <label htmlFor="singin-password">Password *</label>
                                                    <input type="password" className="htmlForm-control" id="singin-password" name="singin-password" required />
                                                </div>

                                                <div className="htmlForm-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>LOG IN</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="signin-remember" />
                                                        <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>
                                                    </div>

                                                    <a href="#" className="htmlForgot-link">htmlForgot Your Password?</a>
                                                </div>
                                            </form>
                                            <div className="htmlForm-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Login With Google
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                            <form action="#">
                                                <div className="htmlForm-group">
                                                    <label htmlFor="register-email">Your email address *</label>
                                                    <input type="email" className="htmlForm-control" id="register-email" name="register-email" required />
                                                </div>

                                                <div className="htmlForm-group">
                                                    <label htmlFor="register-password">Password *</label>
                                                    <input type="password" className="htmlForm-control" id="register-password" name="register-password" required />
                                                </div>

                                                <div className="htmlForm-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SIGN UP</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="register-policy" required />
                                                        <label className="custom-control-label" htmlFor="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="htmlForm-choice">
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
                </div>
            </div>

            <div className="container newsletter-popup-container mfp-hide" id="newsletter-popup-htmlForm">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="row no-gutters bg-white newsletter-popup-content">
                            <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                                <div className="banner-content text-center">
                                    <img src="assets/images/popup/newsletter/logo.png" className="logo" alt="logo" width="60" height="15" />
                                    <h2 className="banner-title">get <span>25<light>%</light></span> off</h2>
                                    <p>Subscribe to the Molla eCommerce newsletter to receive timely updates from your favorite products.</p>
                                    <form action="#">
                                        <div className="input-group input-group-round">
                                            <input type="email" className="htmlForm-control htmlForm-control-white" placeholder="Your Email Address" aria-label="Email Adress" required />
                                            <div className="input-group-append">
                                                <button className="btn" type="submit"><span>go</span></button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                                        <label className="custom-control-label" htmlFor="register-policy-2">Do not show this popup again</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2-5col col-lg-5 ">
                                <img src="assets/images/popup/newsletter/img-1.jpg" className="newsletter-img" alt="newsletter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </body>
    );
}

export default Index;