import React, { useState } from "react";
import "./signUp.scss";
import { Link } from "react-router-dom";
import Image from "../assets/Illustration.png";
import Circle1 from "../assets/Ellipse-3.png";
import Circle2 from "../assets/Ellipse-4.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Meta from "../components/Meta";

import "swiper/css";
import "swiper/css/pagination";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Meta title={'Sign in into an account'} />
      <div className="sign-up">
        <div className="wrapper">
          <div className="left-side" style={{ paddingTop: "110px" }}>
            <div className="form-container">
              <div className="form-heading">
                <p>Welcome to RealExplorer</p>
                <p>Sign in an account by filling the form below.</p>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="psw-wrap">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <span className="show-hide" onClick={handleShowPassword}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                <div className="check-group">
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">Keep me signed in</label>
                  <Link style={{ right: "0", position: "absolute" }}>
                    Forgot password?
                  </Link>
                </div>
                <div className="submit-group">
                  <button type="submit">Sign in</button>
                </div>
              </form>
              <p className="have-account">
                Don't have an account yet?{" "}
                <Link to="/account/register"> Sign Up</Link>
              </p>
            </div>
          </div>
          <div className="right-side">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              // loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className="image-container">
                  <img className="page-img" src={Image} alt="" />
                </div>
                <p>We Make HODL Available</p>
                <p>
                  CoinLoan is the first P2P lending platform for cryptoassets
                  backed loans.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-container">
                  <img className="page-img" src={Image} alt="" />
                </div>
                <p>We Make HODL Available</p>
                <p>
                  CoinLoan is the first P2P lending platform for cryptoassets
                  backed loans.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-container">
                  <img className="page-img" src={Image} alt="" />
                </div>
                <p>We Make HODL Available</p>
                <p>
                  CoinLoan is the first P2P lending platform for cryptoassets
                  backed loans.
                </p>
              </SwiperSlide>
            </Swiper>

            <img className="circle" src={Circle2} alt="" />
            <img className="circle" src={Circle1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
