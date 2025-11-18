import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("Login Page", location)

  const userSignIn = (data) => {
    // console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(userSignIn)}>
        <fieldset className="fieldset rounded-box w-xs p-4">
          <h2 className="text-3xl font-bold text-[#03373D]">Welcome Back</h2>
          <p className="text-lg">Login with ZapShift</p>

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer
            </p>
          )}

          <button className="btn btn-neutral mt-4">Login</button>

          <p className="text-sm">
            GDon’t have any account?{" "}
            <Link state={location.state} to="/register">
              <span className="text-[#CAEB66]">Register</span>
            </Link>
          </p>
        </fieldset>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
