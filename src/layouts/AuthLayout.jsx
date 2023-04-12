import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/account/Navbar";
import Footer from "../components/Footer";
// import Footer from "../components/account/Footer";

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AuthLayout;
