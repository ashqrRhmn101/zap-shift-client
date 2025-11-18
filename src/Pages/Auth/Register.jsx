import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, userProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("Login Page", location);

  const handleRegister = (data) => {
    // console.log(data);
    const profileImg = data.file[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // Store the img
        const formData = new FormData();
        formData.append("image", profileImg);
        const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${
          import.meta.env.VITE_image_host_key
        }`;

        axios.post(image_API_URL, formData).then((res) => {
          console.log("after image update", res.data);

          // update user profile
          const userProfileData = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          userProfile(userProfileData)
            .then(() => {
              console.log("user profile done");
              navigate(location?.state || "/");
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset  w-xs p-4">
          <h2 className="text-3xl font-bold text-[#03373D]">
            Create an Account
          </h2>
          <p className="text-lg">Register with ZapShift</p>

          {/* Name */}
          <label className="label">Name</label>
          <input
            type="name"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required</p>
          )}

          {/* Photo */}
          {/* <input type="file" className="file-input" /> */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("file", { required: true })}
            className="file-input"
            placeholder="Your Photo"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Photo is required</p>
          )}

          {/* email */}
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
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).{8,}$/,
            })}
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
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Must contain uppercase, lowercase, number and special character
            </p>
          )}

          {/* Button Or Google */}
          <button className="btn btn-neutral mt-4">Register</button>
          <p className="text-sm">
            Already have an account?{" "}
            <Link state={location.state} to="/login">
              <span className="text-[#CAEB66]">Login</span>
            </Link>
          </p>
        </fieldset>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Register;
