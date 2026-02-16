import Template from "../components/Auth/Template";
import loginImg from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login({ setIsLoggedIn, isLoggedIn, setLoginpage, loginpage }) {
  const navigate = useNavigate();
  const loginHandler = (event) => {
    event.preventDefault();
    setIsLoggedIn(!isLoggedIn);
    setLoginpage(loginpage === "Login" ? "Logout" : "Login")
    navigate("/Dashboard");
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
        <label htmlFor="password" name="password" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password <sup className="text-pink-200">*</sup></p>
          <input type="password" required placeholder="Enter your password" name="password" className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] border-b-richblack-700" />
        </label>
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">Login</button>
      </form>
    </div>
  );
}

export default Login;
