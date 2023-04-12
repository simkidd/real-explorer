import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./layouts/Layouts";
import Advertise from "./pages/Advertise";
import Help from "./pages/Help";
import SignUp from "./pages/SignUp";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="advertise" element={<Advertise />} />
          <Route path="help" element={<Help />} />
        </Route>
        <Route path="account" element={<AuthLayout />}>
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
