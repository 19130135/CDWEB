import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { increment, selectFilteredProducts, selectProducts, selectSearchedProducts } from '../features/counter/productsSlice';
import { useNavigate, useParams } from "react-router-dom";
import { selectCategories } from '../features/counter/categoriesSlice';


ProductListSearch.propTypes = {

};



// constructor(props) {
//     super(props);
//     this.state = {
//         products: []
//     };
// }

// componentDidMount() {
//     axios({
//         method: 'GET',
//         url: 'http://localhost:8080/api/product/available_products',
//         data: null

//     }).then(res => {
//         console.log(res);
//         this.setState({
//             products: res.data
//         });
//     }).catch(err => {
//         console.log(err);
//     });
// }




function ProductListSearch(props) {
    // var { products } = this.state;
    const listCategories = useSelector(selectCategories);
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        console.log("----id", id)
        navigate(`/productDetail/${id}`);
    }
    // Lay params sau url
    const { searchValue } = useParams();
    console.log(searchValue);


    const listSearchedProducts = useSelector(selectSearchedProducts);
    console.log(listSearchedProducts);
    const dispatch = useDispatch()

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
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            })
            console.log("Added !" + response)
        }
    }

    const searchAPI = async () => {
        // e.preventDefault()
        //
        try {
            const response = await axios({
                method: 'GET',
                url: `http://localhost:8080/api/product/searchProduct/${searchValue}`,
            })
            console.log(response)
            if (response.data) {
                dispatch(increment({
                    searchedProducts: response.data
                }))
            }
        } catch (error) {
            console.log("---err", error)
        }
    }
    useEffect(() => {
        searchAPI();
    }, [])




    return (
        <main className="main">
            <div className="page-header text-center" style={{ backgroundImage: ' url(assets/images/page-header-bg.jpg)' }}>
                <div className="container">
                    <h1 className="page-title">Searching for keyword "{searchValue}"<span>TechShop</span></h1>
                </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Shop</a></li>
                        <li className="breadcrumb-item active" aria-current="page">List</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="toolbox">
                                <div className="toolbox-left">
                                    <div className="toolbox-info">
                                        Showing <span>{listSearchedProducts?.length || 0}</span> Products
                                    </div>
                                </div>

                                <div className="toolbox-right">
                                    <div className="toolbox-sort">
                                        <label htmlFor="sortby">Sort by:</label>
                                        <div className="select-custom">
                                            <select name="sortby" id="sortby" className="form-control">
                                                <option value="popularity" selected="selected">Most Popular</option>
                                                <option value="rating">Most Rated</option>
                                                <option value="date">Date</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="toolbox-layout">
                                        <a href="category-list.html" className="btn-layout active">
                                            <svg width="16" height="10">
                                                <rect x="0" y="0" width="4" height="4" />
                                                <rect x="6" y="0" width="10" height="4" />
                                                <rect x="0" y="6" width="4" height="4" />
                                                <rect x="6" y="6" width="10" height="4" />
                                            </svg>
                                        </a>

                                        <a href="category-2cols.html" className="btn-layout">
                                            <svg width="10" height="10">
                                                <rect x="0" y="0" width="4" height="4" />
                                                <rect x="6" y="0" width="4" height="4" />
                                                <rect x="0" y="6" width="4" height="4" />
                                                <rect x="6" y="6" width="4" height="4" />
                                            </svg>
                                        </a>

                                        <a href="category.html" className="btn-layout">
                                            <svg width="16" height="10">
                                                <rect x="0" y="0" width="4" height="4" />
                                                <rect x="6" y="0" width="4" height="4" />
                                                <rect x="12" y="0" width="4" height="4" />
                                                <rect x="0" y="6" width="4" height="4" />
                                                <rect x="6" y="6" width="4" height="4" />
                                                <rect x="12" y="6" width="4" height="4" />
                                            </svg>
                                        </a>

                                        <a href="category-4cols.html" className="btn-layout">
                                            <svg width="22" height="10">
                                                <rect x="0" y="0" width="4" height="4" />
                                                <rect x="6" y="0" width="4" height="4" />
                                                <rect x="12" y="0" width="4" height="4" />
                                                <rect x="18" y="0" width="4" height="4" />
                                                <rect x="0" y="6" width="4" height="4" />
                                                <rect x="6" y="6" width="4" height="4" />
                                                <rect x="12" y="6" width="4" height="4" />
                                                <rect x="18" y="6" width="4" height="4" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="products mb-3">

                                {listSearchedProducts?.map((product, index) => {
                                    return (
                                        <div key={index} className="product product-list">
                                            <div className="row">
                                                <div className="col-6 col-lg-3">
                                                    <figure className="product-media">
                                                        <span className="product-label label-new">New</span>

                                                        <a onClick={() => { handleNavigate(product.id) }}>
                                                            <img src={product.images[0].url} alt="Product image" className="product-image" />
                                                        </a>

                                                    </figure>
                                                </div>

                                                <div className="col-6 col-lg-3 order-lg-last">
                                                    <div className="product-list-action">
                                                        <div className="product-price">

                                                        </div>
                                                        <div className="ratings-container">
                                                            <div className="ratings">
                                                                <div className="ratings-val" style={{ width: ' 20%' }}></div>
                                                            </div>
                                                            <span className="ratings-text">( 2 Reviews )</span>
                                                        </div>
                                                        <div>
                                                            <p>Đơn giá: {product.price}</p>
                                                        </div>
                                                        <a onClick={() => { handleAddToCart(product) }} className="btn-product btn-cart"><span>add to cart</span></a>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="product-body product-action-inner">
                                                        <a href="#" className="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                                        <div className="product-cat">
                                                            <a href="#">Women</a>
                                                        </div>
                                                        <h3 className="product-title"><a onClick={() => { handleNavigate(product.id) }}>{product.name}</a></h3>

                                                        <div className="product-content">
                                                            <p>{product.decription}</p>
                                                        </div>

                                                        <div className="product-nav product-nav-thumbs">
                                                            {product.images.map((image, index) => {
                                                                return (
                                                                    <a key={index} className="active">
                                                                        <img src={image.url} alt="product desc" />
                                                                    </a>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex="-1" aria-disabled="true">
                                            <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                                        </a>
                                    </li>
                                    <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item-total">of 6</li>
                                    <li className="page-item">
                                        <a className="page-link page-link-next" href="#" aria-label="Next">
                                            Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <aside className="col-lg-3 order-lg-first">
                            <div className="sidebar sidebar-shop">
                                <div className="widget widget-clean">
                                    <label>Filters:</label>
                                    <a href="#" className="sidebar-filter-clear">Clean All</a>
                                </div>

                                <div className="widget widget-collapsible">
                                    <h3 className="widget-title">
                                        <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                                            Category
                                        </a>
                                    </h3>

                                    <div className="collapse show" id="widget-1">
                                        <div className="widget-body">
                                            <div className="filter-items filter-items-count">
                                                {listCategories.map((categories, index) => {
                                                    return (
                                                        <div key={index} className="filter-item">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="cat-1" />
                                                                <label className="custom-control-label" htmlFor="cat-1">{categories.name}</label>
                                                            </div>
                                                            <span className="item-count">3</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget widget-collapsible">
                                    <h3 className="widget-title">
                                        <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                                            Price
                                        </a>
                                    </h3>

                                    <div className="collapse show" id="widget-5">
                                        <div className="widget-body">
                                            <div className="filter-price">
                                                <div className="filter-price-text">
                                                    Price Range:
                                                    <span id="filter-price-range"></span>
                                                </div>

                                                <div id="price-slider"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductListSearch;