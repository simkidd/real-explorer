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

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
     <Meta title={'Register an account'} />
    <div className="sign-up">
      <div className="wrapper">
        <div className="left-side">
          <div className="form-container">
            <div className="form-heading">
              <p>Welcome to RealExplorer</p>
              <p>Sign up an account by filling the form below.</p>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="names">Names</label>
                <input type="text" id="names" />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" id="phoneNumber" />
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
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="psw-wrap">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <span
                    className="show-hide"
                    onClick={handleShowConfirmPassword}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="check-group">
                <input type="checkbox" name="" id="checkbox" />
                <label htmlFor="checkbox">
                  By clicking sign up, you hereby are in agreement with our{" "}
                  <a href="">Terms & Conditions and Disclaimer</a>
                </label>
              </div>
              <div className="submit-group">
                <button type="submit">Sign Up</button>
              </div>
            </form>
            <p className="have-account">
              Already have an account? <Link to="/account/login"> Login</Link>
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

export default SignUp;
