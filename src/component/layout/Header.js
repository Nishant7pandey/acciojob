import React from "react";
import login from "../UI/logo/login.svg";
import shop from "../UI/logo/shop.svg";
import search from "../UI/logo/search.svg";
import heart from "../UI/logo/heart.svg";
import "./Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import{useSelector} from 'react-redux';

const Header = () => {
  const counter =useSelector(state => state.changeNumber);
  return (
    <div className="navbar">
        <div className="navbar-brand">
            <h3>AccioJob</h3>
        </div>
        <div className="navbar-collapse">
            <div className="navbar-collapse-left">
                <Router>
                <Link to="/" className="Home">Home</Link>
                <Link to="/Shop" className="Shop">Shop</Link>
                <Link to="/About" className="About">About</Link>
                <Link to="/Blog" className="Blog">Blog</Link>
                <Link to="/Contact" className="Contact">Contact</Link>
                <Link to="/Pages" className="Pages">Pages</Link>
                </Router>
            </div>
            <div className="navbar-collapse-right">
                <Router>

                    <Link to="/login-register" className="login"><img src={login} alt='login' />Login/Register</Link>
                    <Link to ="/search" className="search"><img src={search} alt='search' /></Link>
                   <Link to="/shop" className="shop"> <img src={shop} alt='shop' />{counter}</Link>
                    <Link to='/heart'className="heart"><img src={heart} alt='heart' />1</Link>
                
                </Router>

            </div>
        </div>
      
    </div>
  );
};

export default Header;
