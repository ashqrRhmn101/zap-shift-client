import React from "react";
import Logo from "../Components/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Top Logo Area */}
      <div className="px-10 py-4">
        <span className="block">
          <Logo />
        </span>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Side - Outlet Form */}
        <div className="flex-1 flex justify-center items-center px-10">
          <Outlet />
        </div>

        {/* Right Side Image */}
        <div className="flex-1 bg-[#fafdf0] flex justify-center items-center">
          <img src={authImage} alt="" className="w-[50%] max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
