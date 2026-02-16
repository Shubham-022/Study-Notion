import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
// import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginpage, setLoginpage] = useState("Login")
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} loginpage={loginpage} setLoginpage={setLoginpage} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setLoginpage={setLoginpage} loginpage={loginpage} />} />
        <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setLoginpage={setLoginpage} loginpage={loginpage} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
