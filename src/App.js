import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./components/Index";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ProductDetail from "./components/ProductDetail";
import MyAccount from "./components/MyAccount";
import ProductList from "./components/ProductList";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import axios from "axios";
import Category from "./components/Category";
import ProductListFilter from "./components/ProductListFilter";

function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/category" element={<Category />} />
        <Route path="/productList/:category" element={<ProductListFilter />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
