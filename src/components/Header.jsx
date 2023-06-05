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
                  {/* {listCartProducts?.map((product, index) => {
                    return (
                      <div className="product">
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <a>{product?.name}</a>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>
                            x {product?.price}
                          </span>
                        </div>

                        <figure className="product-image-container">
                          <a className="product-image">
                            <img src={product?.images[0]?.url} alt="product" />
                          </a>
                        </figure>
                        <a className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                      </div>
                    )
                  })} */}


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

                {/* <div className="dropdown-menu">
                  <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows sf-js-enabled" style={{ touchAction: 'pan-y' }}>
                      <li className="megamenu-container">
                        <a className="sf-with-ul" href="#"><i className="icon-laptop"></i>Electronics</a>

                        <div className="megamenu" style={{ display: 'none' }}>
                          <div className="row no-gutters">
                            <div className="col-md-8">
                              <div className="menu-col">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="menu-title">Laptops &amp; Computers</div>
                                    <ul>
                                      <li><a href="#">Desktop Computers</a></li>
                                      <li><a href="#">Monitors</a></li>
                                      <li><a href="#">Laptops</a></li>
                                      <li><a href="#">iPad &amp; Tablets</a></li>
                                      <li><a href="#">Hard Drives &amp; Storage</a></li>
                                      <li><a href="#">Printers &amp; Supplies</a></li>
                                      <li><a href="#">Computer Accessories</a></li>
                                    </ul>

                                    <div className="menu-title">TV &amp; Video</div>
                                    <ul>
                                      <li><a href="#">TVs</a></li>
                                      <li><a href="#">Home Audio Speakers</a></li>
                                      <li><a href="#">Projectors</a></li>
                                      <li><a href="#">Media Streaming Devices</a></li>
                                    </ul>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="menu-title">Cell Phones</div>
                                    <ul>
                                      <li><a href="#">Carrier Phones</a></li>
                                      <li><a href="#">Unlocked Phones</a></li>
                                      <li><a href="#">Phone &amp; Cellphone Cases</a></li>
                                      <li><a href="#">Cellphone Chargers </a></li>
                                    </ul>

                                    <div className="menu-title">Digital Cameras</div>
                                    <ul>
                                      <li><a href="#">Digital SLR Cameras</a></li>
                                      <li><a href="#">Sports &amp; Action Cameras</a></li>
                                      <li><a href="#">Camcorders</a></li>
                                      <li><a href="#">Camera Lenses</a></li>
                                      <li><a href="#">Photo Printer</a></li>
                                      <li><a href="#">Digital Memory Cards</a></li>
                                      <li><a href="#">Camera Bags, Backpacks &amp; Cases</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="banner banner-overlay">
                                <a href="category.html" className="banner banner-menu">
                                  <img src="assets/images/demos/demo-13/menu/banner-1.jpg" alt="Banner" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="megamenu-container">
                        <a className="sf-with-ul" href="#"><i className="icon-couch"></i>Furniture</a>

                        <div className="megamenu" style={{ display: 'none' }}>
                          <div className="row no-gutters">
                            <div className="col-md-8">
                              <div className="menu-col">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="menu-title">Bedroom</div>
                                    <ul>
                                      <li><a href="#">Beds, Frames &amp; Bases</a></li>
                                      <li><a href="#">Dressers</a></li>
                                      <li><a href="#">Nightstands</a></li>
                                      <li><a href="#">Kids' Beds &amp; Headboards</a></li>
                                      <li><a href="#">Armoires</a></li>
                                    </ul>

                                    <div className="menu-title">Living Room</div>
                                    <ul>
                                      <li><a href="#">Coffee Tables</a></li>
                                      <li><a href="#">Chairs</a></li>
                                      <li><a href="#">Tables</a></li>
                                      <li><a href="#">Futons &amp; Sofa Beds</a></li>
                                      <li><a href="#">Cabinets &amp; Chests</a></li>
                                    </ul>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="menu-title">Office</div>
                                    <ul>
                                      <li><a href="#">Office Chairs</a></li>
                                      <li><a href="#">Desks</a></li>
                                      <li><a href="#">Bookcases</a></li>
                                      <li><a href="#">File Cabinets</a></li>
                                      <li><a href="#">Breakroom Tables</a></li>
                                    </ul>

                                    <div className="menu-title">Kitchen &amp; Dining</div>
                                    <ul>
                                      <li><a href="#">Dining Sets</a></li>
                                      <li><a href="#">Kitchen Storage Cabinets</a></li>
                                      <li><a href="#">Bakers Racks</a></li>
                                      <li><a href="#">Dining Chairs</a></li>
                                      <li><a href="#">Dining Room Tables</a></li>
                                      <li><a href="#">Bar Stools</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="banner banner-overlay">
                                <a href="category.html" className="banner banner-menu">
                                  <img src="assets/images/demos/demo-13/menu/banner-2.jpg" alt="Banner" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="megamenu-container">
                        <a className="sf-with-ul" href="#"><i className="icon-concierge-bell"></i>Cooking</a>

                        <div className="megamenu" style={{ display: 'none' }}>
                          <div className="menu-col">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="menu-title">Cookware</div>
                                <ul>
                                  <li><a href="#">Cookware Sets</a></li>
                                  <li><a href="#">Pans, Griddles &amp; Woks</a></li>
                                  <li><a href="#">Pots</a></li>
                                  <li><a href="#">Skillets &amp; Grill Pans</a></li>
                                  <li><a href="#">Kettles</a></li>
                                  <li><a href="#">Soup &amp; Stockpots</a></li>
                                </ul>
                              </div>

                              <div className="col-md-4">
                                <div className="menu-title">Dinnerware &amp; Tabletop</div>
                                <ul>
                                  <li><a href="#">Plates</a></li>
                                  <li><a href="#">Cups &amp; Mugs</a></li>
                                  <li><a href="#">Trays &amp; Platters</a></li>
                                  <li><a href="#">Coffee &amp; Tea Serving</a></li>
                                  <li><a href="#">Salt &amp; Pepper Shaker</a></li>
                                </ul>
                              </div>

                              <div className="col-md-4">
                                <div className="menu-title">Cooking Appliances</div>
                                <ul>
                                  <li><a href="#">Microwaves</a></li>
                                  <li><a href="#">Coffee Makers</a></li>
                                  <li><a href="#">Mixers &amp; Attachments</a></li>
                                  <li><a href="#">Slow Cookers</a></li>
                                  <li><a href="#">Air Fryers</a></li>
                                  <li><a href="#">Toasters &amp; Ovens</a></li>
                                </ul>
                              </div>
                            </div>

                            <div className="row menu-banners">
                              <div className="col-md-4">
                                <div className="banner">
                                  <a href="#">
                                    <img src="assets/images/demos/demo-13/menu/1.jpg" alt="image" />
                                  </a>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="banner">
                                  <a href="#">
                                    <img src="assets/images/demos/demo-13/menu/2.jpg" alt="image" />
                                  </a>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="banner">
                                  <a href="#">
                                    <img src="assets/images/demos/demo-13/menu/3.jpg" alt="image" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="megamenu-container">
                        <a className="sf-with-ul" href="#"><i className="icon-tshirt"></i>Clothing</a>

                        <div className="megamenu" style={{ display: 'none' }}>
                          <div className="row no-gutters">
                            <div className="col-md-8">
                              <div className="menu-col">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="menu-title">Women</div>
                                    <ul>
                                      <li><a href="#"><strong>New Arrivals</strong></a></li>
                                      <li><a href="#"><strong>Best Sellers</strong></a></li>
                                      <li><a href="#"><strong>Trending</strong></a></li>
                                      <li><a href="#">Clothing</a></li>
                                      <li><a href="#">Shoes</a></li>
                                      <li><a href="#">Bags</a></li>
                                      <li><a href="#">Accessories</a></li>
                                      <li><a href="#">Jewlery &amp; Watches</a></li>
                                      <li><a href="#"><strong>Sale</strong></a></li>
                                    </ul>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="menu-title">Men</div>
                                    <ul>
                                      <li><a href="#"><strong>New Arrivals</strong></a></li>
                                      <li><a href="#"><strong>Best Sellers</strong></a></li>
                                      <li><a href="#"><strong>Trending</strong></a></li>
                                      <li><a href="#">Clothing</a></li>
                                      <li><a href="#">Shoes</a></li>
                                      <li><a href="#">Bags</a></li>
                                      <li><a href="#">Accessories</a></li>
                                      <li><a href="#">Jewlery &amp; Watches</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="banner banner-overlay">
                                <a href="category.html" className="banner banner-menu">
                                  <img src="assets/images/demos/demo-13/menu/banner-3.jpg" alt="Banner" />
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="menu-col menu-brands">
                            <div className="row">
                              <div className="col-lg-2">
                                <a href="#" className="brand">
                                  <img src="assets/images/brands/1.png" alt="Brand Name" />
                                </a>
                              </div>

                              <div className="col-lg-2">
                                <a href="#" className="brand">
                                  <img src="assets/images/brands/2.png" alt="Brand Name" />
                                </a>
                              </div>

                              <div className="col-lg-2">
                                <a href="#" className="brand">
                                  <img src="assets/images/brands/3.png" alt="Brand Name" />
                                </a>
                              </div>

                              <div className="col-lg-2">
                                <a href="#" className="brand">
                                  <img src="assets/images/brands/4.png" alt="Brand Name" />
                                </a>
                              </div>

                              <div className="col-lg-2">
                                <a href="#" className="brand">
                                  <img src="assets/images/brands/5.png" alt="Brand Name" />
                                </a>
                              </div>

                              <div className="col-lg-2">
                                <a href="#" className="brand">
                                  <img src="assets/images/brands/6.png" alt="Brand Name" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li><a href="#"><i className="icon-blender"></i>Home Appliances</a></li>
                      <li><a href="#"><i className="icon-heartbeat"></i>Healthy &amp; Beauty</a></li>
                      <li><a href="#"><i className="icon-shoe-prints"></i>Shoes &amp; Boots</a></li>
                      <li><a href="#"><i className="icon-map-signs"></i>Travel &amp; Outdoor</a></li>
                      <li><a href="#"><i className="icon-mobile-alt"></i>Smart Phones</a></li>
                      <li><a href="#"><i className="icon-tv"></i>TV &amp; Audio</a></li>
                      <li><a href="#"><i className="icon-shopping-bag"></i>Backpack &amp; Bag</a></li>
                      <li><a href="#"><i className="icon-music"></i>Musical Instruments</a></li>
                      <li><a href="#"><i className="icon-gift"></i>Gift Ideas</a></li>
                    </ul>
                  </nav>
                </div> */}
              </div>
            </div>
            <div className="header-center">
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li className="megamenu-container">
                    <a className="sf-with-ul"><NavLink to="/home">Home</NavLink></a>

                    <div className="megamenu demo">
                      <div className="menu-col">
                        <div className="menu-title">Choose your demo</div>

                        <div className="demo-list">
                          <div className="demo-item">
                            <a href="index-1.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/1.jpg)' }}></span>
                              <span className="demo-title">01 - furniture store</span>
                            </a>
                          </div>

                          <div className="demo-item">
                            <a href="index-2.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/2.jpg)' }}></span>
                              <span className="demo-title">02 - furniture store</span>
                            </a>
                          </div>

                          <div className="demo-item">
                            <a href="index-3.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/3.jpg)' }}></span>
                              <span className="demo-title">03 - electronic store</span>
                            </a>
                          </div>

                          <div className="demo-item">
                            <a href="index-4.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/4.jpg)' }}></span>
                              <span className="demo-title">04 - electronic store</span>
                            </a>
                          </div>

                          <div className="demo-item">
                            <a href="index-5.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/5.jpg)' }}></span>
                              <span className="demo-title">05 - fashion store</span>
                            </a>
                          </div>

                          <div className="demo-item">
                            <a href="index-6.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/6.jpg)' }}></span>
                              <span className="demo-title">06 - fashion store</span>
                            </a>
                          </div>

                          <div className="demo-item">
                            <a href="index-7.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/7.jpg)' }}></span>
                              <span className="demo-title">07 - fashion store</span>
                            </a>
                          </div>

                          <div className="demo-item">
                            <a href="index-8.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/8.jpg)' }}></span>
                              <span className="demo-title">08 - fashion store</span>
                            </a>
                          </div>

                          <div className="demo-item">
                            <a href="index-9.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/9.jpg)' }}></span>
                              <span className="demo-title">09 - fashion store</span>
                            </a>
                          </div>

                          <div className="demo-item">
                            <a href="index-10.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/10.jpg)' }}></span>
                              <span className="demo-title">10 - shoes store</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-11.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/11.jpg)' }}></span>
                              <span className="demo-title">11 - furniture simple store</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-12.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/12.jpg)' }}></span>
                              <span className="demo-title">12 - fashion simple store</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-13.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/13.jpg)' }}></span>
                              <span className="demo-title">13 - market</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-14.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/14.jpg)' }}></span>
                              <span className="demo-title">14 - market fullwidth</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-15.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/15.jpg)' }}></span>
                              <span className="demo-title">15 - lookbook 1</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-16.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/16.jpg)' }}></span>
                              <span className="demo-title">16 - lookbook 2</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-17.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/17.jpg)' }}></span>
                              <span className="demo-title">17 - fashion store</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-18.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/18.jpg)' }}></span>
                              <span className="demo-title">18 - fashion store (with sidebar)</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-19.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/19.jpg)' }}></span>
                              <span className="demo-title">19 - games store</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-20.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/20.jpg)' }}></span>
                              <span className="demo-title">20 - book store</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-21.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/21.jpg)' }}></span>
                              <span className="demo-title">21 - sport store</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-22.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/22.jpg)' }}></span>
                              <span className="demo-title">22 - tools store</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-23.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/23.jpg)' }}></span>
                              <span className="demo-title">23 - fashion left navigation store</span>
                            </a>
                          </div>

                          <div className="demo-item hidden">
                            <a href="index-24.html">
                              <span className="demo-bg" style={{ backgroundImage: ' url(assets/images/menu/demos/24.jpg)' }}></span>
                              <span className="demo-title">24 - extreme sport store</span>
                            </a>
                          </div>

                        </div>

                        <div className="megamenu-action text-center">
                          <a href="#" className="btn btn-outline-primary-2 view-all-demos"><span>View All Demos</span><i className="icon-long-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
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

                    <div className="megamenu megamenu-sm">
                      <div className="row no-gutters">
                        <div className="col-md-6">
                          <div className="menu-col">
                            <div className="menu-title">Product Details</div>
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
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="banner banner-overlay">
                            <a href="category.html">
                              <img src="assets/images/demos/demo-19/menu/banner-2.jpg" alt="Banner" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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

