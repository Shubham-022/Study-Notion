import React from "react";
import Logo from "../assets/Logo.svg"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn, loginpage, setLoginpage }) => {

    const navigate = useNavigate();
    const logoutHandler = () => {
        setIsLoggedIn(!isLoggedIn);
        setLoginpage(loginpage === "login" ? "logout" : "login")
        navigate("/");
    }
    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <NavLink to="/">
                <img src={Logo} alt="Logo" width={160} height={32} loading="lazy" />
            </NavLink>

            <nav>
                <ul className='text-richblack-100 flex gap-x-6'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <div className='flex items-center gap-x-4'>
                <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                    <NavLink to={`/${loginpage}`} onClick={loginpage === "login" && logoutHandler} >{loginpage}</NavLink>
                    {console.log(loginpage)}
                </button>

                {!isLoggedIn &&
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        <NavLink to="/Signup">Signup</NavLink>
                    </button>}
            </div>
        </div>
    )
}
export default Navbar;