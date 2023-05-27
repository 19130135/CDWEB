import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { increment } from '../features/counter/productsSlice';
import { selectCategories } from '../features/counter/categoriesSlice';

Category.propTypes = {

};

function Category(props) {
    const dispatch = useDispatch();
    const [category, setCategory] = useState("");
    const listCategories = useSelector(selectCategories);

    const fetchDataFollowCategoryName = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: `http://localhost:8080/api/product/category/${category}`
            })
            if (response.data.length > 0) {
                dispatch(increment({
                    products: response.data
                }))
            }
            console.log(response)
        } catch (error) {
            console.log("--err", error);
        }
    }

    useEffect(() => {
        if (category) {
            fetchDataFollowCategoryName()
        }
    }, [category])

    return (
        <div>
            <main className="main">
                <div className="page-header text-center" style={{ backgroundImage: ' url(assets/images/page-header-bg.jpg)' }} >
                    <div className="container">
                        <h1 className="page-title">Product Category Boxed<span>Shop</span></h1>
                    </div>
                </div>
                <nav aria-label="breadcrumb" className="breadcrumb-nav breadcrumb-with-filter">
                    <div className="container">
                        <a href="#" className="sidebar-toggler"><i className="icon-bars"></i>Filters</a>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Shop</a></li>
                            <li className="breadcrumb-item"><a href="#">Product Category</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Boxed</li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="categories-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="banner banner-cat banner-badge">
                                        <a href="#">
                                            <img src="assets/images/category/boxed/banner-1.jpg" alt="Banner" />
                                        </a>

                                        <a className="banner-link" href="#">
                                            <h3 className="banner-title">Flycam</h3>
                                            <h4 className="banner-subtitle">2 Products</h4>
                                            <span className="banner-link-text">Shop Now</span>
                                        </a>
                                    </div>

                                    <div className="banner banner-cat banner-badge">
                                        <a href="#">
                                            <img src="assets/images/category/boxed/banner-2.jpg" alt="Banner" />
                                        </a>

                                        <a className="banner-link" href="#">
                                            <h3 className="banner-title">Coming soon...</h3>
                                            <h4 className="banner-subtitle">... Products</h4>
                                            <span className="banner-link-text">Shop Now</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="banner banner-cat banner-badge">
                                                <a href="#">
                                                    <img src="assets/images/category/boxed/banner-3.jpg" alt="Banner" />
                                                </a>

                                                <a className="banner-link" href="#">
                                                    <h3 className="banner-title">Camera</h3>
                                                    <h4 className="banner-subtitle">1 Products</h4>
                                                    <span className="banner-link-text">Shop Now</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="banner banner-cat banner-badge">
                                                <a href="#">
                                                    <img src="assets/images/category/boxed/banner-4.jpg" alt="Banner" />
                                                </a>

                                                <a className="banner-link" href="#">
                                                    <h3 className="banner-title">Play Station</h3>
                                                    <h4 className="banner-subtitle">1 Products</h4>
                                                    <span className="banner-link-text">Shop Now</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="banner banner-cat banner-badge">
                                        <a href="#">
                                            <img src="assets/images/category/boxed/banner-5.jpg" alt="Banner" />
                                        </a>

                                        <a className="banner-link" href="#">
                                            <h3 className="banner-title">Robot</h3>
                                            <h4 className="banner-subtitle">1 Products</h4>
                                            <span className="banner-link-text">Shop Now</span>
                                        </a>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                    <div className="sidebar-filter-overlay"></div>
                    <aside className="sidebar-shop sidebar-filter sidebar-filter-banner">
                        <div className="sidebar-filter-wrapper">
                            <div className="widget widget-clean">
                                <label><i className="icon-close"></i>Filters</label>
                                <a href="#" className="sidebar-filter-clear">Clean All</a>
                            </div>
                            <div className="widget">
                                <h3 className="widget-title">
                                    Browse Category
                                </h3>

                                <div className="widget-body">
                                    <div className="filter-items filter-items-count">
                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="cat-1" />
                                                <label className="custom-control-label" for="cat-1">Women</label>
                                            </div>
                                            <span className="item-count">3</span>
                                        </div>

                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="cat-2" />
                                                <label className="custom-control-label" for="cat-2">Men</label>
                                            </div>
                                            <span className="item-count">0</span>
                                        </div>

                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="cat-3" />
                                                <label className="custom-control-label" for="cat-3">Holiday Shop</label>
                                            </div>
                                            <span className="item-count">0</span>
                                        </div>

                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="cat-4" />
                                                <label className="custom-control-label" for="cat-4">Gifts</label>
                                            </div>
                                            <span className="item-count">0</span>
                                        </div>

                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="cat-5" />
                                                <label className="custom-control-label" for="cat-5">Homeware</label>
                                            </div>
                                            <span className="item-count">0</span>
                                        </div>

                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="cat-6" checked="checked" />
                                                <label className="custom-control-label" for="cat-6">Grid Categories Fullwidth</label>
                                            </div>
                                            <span className="item-count">13</span>
                                        </div>

                                        <div className="sub-filter-items">
                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-7" />
                                                    <label className="custom-control-label" for="cat-7">Dresses</label>
                                                </div>
                                                <span className="item-count">3</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-8" />
                                                    <label className="custom-control-label" for="cat-8">T-shirts</label>
                                                </div>
                                                <span className="item-count">0</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-9" />
                                                    <label className="custom-control-label" for="cat-9">Bags</label>
                                                </div>
                                                <span className="item-count">4</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-10" />
                                                    <label className="custom-control-label" for="cat-10">Jackets</label>
                                                </div>
                                                <span className="item-count">2</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-11" />
                                                    <label className="custom-control-label" for="cat-11">Shoes</label>
                                                </div>
                                                <span className="item-count">2</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-12" />
                                                    <label className="custom-control-label" for="cat-12">Jumpers</label>
                                                </div>
                                                <span className="item-count">1</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-13" />
                                                    <label className="custom-control-label" for="cat-13">Jeans</label>
                                                </div>
                                                <span className="item-count">1</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-14" />
                                                    <label className="custom-control-label" for="cat-14">Sportwear</label>
                                                </div>
                                                <span className="item-count">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}

export default Category;