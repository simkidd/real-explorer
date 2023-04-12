import React from "react";
import "./navbar.scss";
import Logo from "../../assets/Group-198.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="login-navbar">
      <div className="container">
        <div className="login-navbar-logo">
        <Link to='/'>
          <img src={Logo} alt="logo" />
        </Link>
        </div>
        <ul className="login-navbar-links">
          <li>
            <Link to="register">
              <button>Sign Up</button>
            </Link>
          </li>
          <li>
            <Link to="login">
              <button className="login">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
