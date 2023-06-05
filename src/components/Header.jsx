import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories, setCategories } from "../features/counter/categoriesSlice";
import { increment } from "../features/counter/productsSlice";
import SearchInput from "./SearchInput";
import { selectCartProducts } from "../features/counter/cartProductsSlice";

Header.propTypes = {};

function Header(props) {
  const name = localStorage.getItem('username');
  const token = localStorage.getItem('token');

  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const listCategories = useSelector(selectCategories);
  const [products, setProducts] = useState("");
  const listCartProducts = useSelector(selectCartProducts);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/home");
  }

  const handleNavigate1 = () => {
    if (!localStorage.getItem('token')) {
      alert("Bạn cần phải đăng nhập để sử dụng chức năng này!")
    } else {
      navigate("/cart");
    }
  }

  const handleNavigate2 = () => {
    navigate("/account");
  }
  const handleNavigate3 = () => {
    navigate("/adminPage");
  }
  const handleLogout = async () => {
    localStorage.clear();
    handleNavigate();
  }
  const handleCheck = async () => {
    console.log("Tao check login voi role ne!")
    checkLogin();
    checkRole();
  }
  let roleWut = "user";
  const checkRole = async () => {
    if (localStorage.getItem('role') === "ROLE_ADMIN") {
      roleWut = "admin";
      return;
    } else {
      roleWut = "user";
      return;
    }
  }
  let check = false;
  const checkLogin = async () => {
    console.log(123)
    if (!token || !name) {
      console.log("Unlogged in");
      check = false;
      return;
    } else {
      console.log("Logged in");
      check = true;
      return;
    }
  }
  const fetchAPIProducts = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:8080/api/product/categories',
      })
      if (response.data) {
        dispatch(setCategories({
          categories: response.data
        }))
      }
    } catch (err) {
    }

  }

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
  useEffect(() => {
    fetchAPIProducts()
  }, [])

  return (

    <header className="header header-22" style={{ backgroundColor: '#333333' }}>
      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars"></i>
            </button>

            <a href="index.html" className="logo">
              <img src="assets/images/demos/demo-22/logo.png" alt="Molla Logo" width="130" height="30" />
            </a>
          </div>

          <SearchInput />

          <div className="header-right">
            <div onLoad={handleCheck()} >
              {check == false ? (
                <div>
                  <a style={{ color: 'white' }}>Bạn chưa đăng nhập!</a>
                </div>
              ) : (
                roleWut == "user" ? (
                  <div>
                    <a style={{ color: 'white' }}>Xin chào, {name}</a> <br></br>
                    <div class="dropdown">
                      <button class="dropbtn">Tùy chọn
                        <i class="fa fa-caret-down"></i>
                      </button>
                      <div class="dropdown-content">
                        <a onClick={() => { handleNavigate2() }}>Thông tin cá nhân</a>
                        <a onClick={() => { handleLogout() }}>Log out</a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <a style={{ color: 'white' }}>Xin chào, {name}</a> <br></br>
                    <div class="dropdown">
                      <button class="dropbtn">Tùy chọn
                        <i class="fa fa-caret-down"></i>
                      </button>
                      <div class="dropdown-content">
                        <a onClick={() => { handleNavigate3() }}>Quản lý</a>
                        <a onClick={() => { handleLogout() }}>Log out</a>
                      </div>
                    </div>
                  </div>
                )

              )}
            </div>
            <div className="dropdown cart-dropdown">
              <a className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                <i className="icon-shopping-cart"></i>
                <span className="cart-count">2</span>
              </a>

              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">


                </div>

                <div className="dropdown-cart-total">
                  <span>Total</span>

                  <span className="cart-total-price">...</span>
                </div>

                <div className="dropdown-cart-action">
                  <a onClick={() => { handleNavigate1() }} className="btn btn-primary">View Cart</a>
                  <a className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap-container sticky-header">
        <div className="header-bottom">
          <div className="container">
            <div className="header-left">
              <div className="dropdown category-dropdown" data-visible="true">
                <a className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="true" data-display="static" title="Browse Categories" >
                  Browse Categories
                </a>
              </div>
            </div>
            <div className="header-center">
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li className="megamenu-container">
                    <a className="sf-with-ul"><NavLink to="/home">Home</NavLink></a>


                  </li>
                  <li>
                    <a className="sf-with-ul"><NavLink to="/category">Categories</NavLink></a>

                    <div className="megamenu megamenu-md" >
                      <div className="row no-gutters">
                        <div className="col-md-8">
                          <div className="menu-col">
                            <div className="row">
                              <div className="col-md-6">
                                <ul>
                                  {listCategories.map((categories, index) => {
                                    return (
                                      <li key={index} onClick={() => { setCategory(categories.name) }}><span>{categories.name}</span></li>
                                    )
                                  })}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="banner banner-overlay">
                            <a href="category.html" className="banner banner-menu">
                              <img src="assets/images/menu/banner-1.jpg" alt="Banner" />

                              <div className="banner-content banner-content-top">
                                <div className="banner-title text-white">Last <br />Chance<br /><span><strong>Sale</strong></span></div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="sf-with-ul"><NavLink to="/productList">Products</NavLink></a>


                  </li>
                  <li>
                    <a className="sf-with-ul"> <NavLink to="/contact">Contact</NavLink></a>
                  </li>
                  <li>
                    <a className="sf-with-ul"><NavLink to="/about">About</NavLink></a>
                  </li>

                </ul>
              </nav>
            </div>

            <div className="header-right">
              <div className="header-text">
                <ul className="top-menu top-link-menu">
                  <li>
                    <ul>
                      <li><a data-toggle="modal"><i className="icon-user"></i><NavLink to="/login">Login / Registration</NavLink></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>


  );
}

export default Header;

