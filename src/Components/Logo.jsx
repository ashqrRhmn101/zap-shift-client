import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link className="flex items-center">
      <img src={logo} alt="" />
      <h3 className="text-2xl font-bold -ms-2.5">ZapShift</h3>
    </Link>
  );
};

export default Logo;
