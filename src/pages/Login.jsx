import Template from "../components/Auth/Template";
import loginImg from "../assets/login.png";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

function Login({ setIsLoggedIn, isLoggedIn, setLoginpage, loginpage }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = (event) => {
    event.preventDefault();
    setIsLoggedIn(!isLoggedIn);
    setLoginpage("Logout")
    navigate("/Dashboard");
    toast.success("Logged in successfully");
  }
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between">
      <Template
        title="Welcome Back"
        description1="Build skills for today, tomorrow, and beyond."
        description2="Education to future-proof your career."
        image={loginImg}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
      />

      <form onSubmit={loginHandler} className="flex flex-col w-full gap-y-4 mt-6 max-w-[450px]">
        <label htmlFor="email" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-200">*</sup></p>
          <input type="email" required placeholder="Enter your email" className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] border-b-richblack-700" />
        </label>

        <label className="w-full relative">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password <sup className="text-pink-200">*</sup></p>
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter your password"
            name="password"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] border-b-richblack-700"
          />
          <span
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            )}
          </span>

          <NavLink to="#">
            <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
              Forgot Password
            </p>
          </NavLink>
        </label>
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">Login</button>

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>

        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-1">
          <FcGoogle />
          <p>Sign in with Google</p>
        </button>
      </form>
    </div>
  );
}

export default Login;
