import React from "react";
import "../header/Header.css";
import logo from "../../assets/logo.svg";
import instagram from "../../assets/h-instagram.svg";
import facebook from "../../assets/h-facebook.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_contents">
          <Link to="/">
            <img src={logo} width={100} alt="logo" />
          </Link>
          <ul className="links">
            <li>
              <Link to="/">ALL PRODUCTS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACTS</Link>
            </li>
            <li>
              <Link to="/">ABOUT SEEDRA</Link>
            </li>
            <li>
              <Link to="/">OUR BLOG</Link>
            </li>
          </ul>
          <div className="header_icons">
            <img src={instagram} alt="instagram" width={24} />
            <img src={facebook} alt="facebook" width={24} />
            <form action="">
              <input type="search" placeholder="Search" />
              <img src={search} alt="search" width={24} />
            </form>
            <img src={heart} alt="heart" width={24} />
            <img src={cart} alt="cart" width={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
