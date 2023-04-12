import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../assets/Group-28.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 30)
    })
  })

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="mobile-nav">
            {/* menu button */}
            <div className="menu-btn" onClick={handleMenu}>
              <FaBars size={24} />
            </div>
            {/* logo for mobile view */}
            <div className="mobile-logo">
              <div>
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="tab-signup">
              <Link to="/register">
                <button className="register">Sign Up</button>
              </Link>
            </div>
            {/* mobile menu list */}
            <ul className={showMenu ? "mobile-list" : "mobile-list-close"}>
              <FaTimes
                size={24}
                onClick={handleMenu}
                style={{ alignSelf: "end", padding: "10px", cursor: "pointer" }}
              />
              <li>
                <Link to="/" onClick={handleMenu}>
                  Buy
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleMenu}>
                  Rent
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleMenu}>
                  Sell
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleMenu}>
                  Home Loans
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleMenu}>
                  Save to Rent/Buy
                </Link>
              </li>
              <li>
                <Link to="advertise" onClick={handleMenu}>
                  Advertise
                </Link>
              </li>
              <li>
                <Link to="help" onClick={handleMenu}>
                  Help
                </Link>
              </li>
              <li>
                <Link to="account/register">
                  <button className="register">Sign Up</button>
                </Link>
              </li>
            </ul>
          </div>

          {/* menu list */}
          <ul className="menu-list">
            <li>
              <Link to="/">Buy</Link>
            </li>
            <li>
              <Link to="/">Rent</Link>
            </li>
            <li>
              <Link to="/">Sell</Link>
            </li>
            <li>
              <Link to="/">Home Loans</Link>
            </li>
            <li>
              <Link to="/">Save to Rent/Buy</Link>
            </li>
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
          </ul>
          <ul className="menu-list">
            <li>
              <Link to="advertise">Advertise</Link>
            </li>
            <li>
              <Link to="help">Help</Link>
            </li>
            <li>
              <Link to="account/register">
                <button className="register">Sign Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
