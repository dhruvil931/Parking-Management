import GoogleIcon from "../assets/Icons/GoogleIcon.png";
import FacebookIcon from "../assets/Icons/FacebookIcon.png";
import MicrosoftIcon from "../assets/Icons/MicrosoftIcon.png";
import { Link } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className="min-h-screen text-white flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3">
          <p className="text-3xl mb-2 font-['poppins', sans-serif]">
            Sign in to ParkIQ
          </p>
          <p className="text-xs font-['Inter',sans-serif] tracking-wider font-light">
            Email address
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#F0EDFF] text-[#1C1C1C] w-100 h-13 p-3.5 rounded-md font-['poppins'] text-sm max-xs:w-72"
          />
          <p className="text-xs font-['Inter',sans-serif] tracking-wider font-light">
            Password
          </p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#F0EDFF] text-[#1C1C1C] h-13 p-3.5 rounded-md font-['poppins'] text-sm max-xs:w-72"
          />
        </div>
        <div className="flex-col flex justify-between items-center">
          <button
            className="bg-gradient-to-tr from-[#9181F4] to-[#5038ED] w-33 h-12 rounded-lg text-xs mt-5 mb-5 cursor-pointer font-[poppins]"
            onClick={handelSignIn}
          >
            Sign in
          </button>
          <div className="flex items-center w-100">
            <div className="flex-1 h-[0.5px] bg-[#676767]"></div>
            <span className="px-3 text-[#525252] ">With Others</span>
            <div className="flex-1 h-[0.5px] bg-[#676767]"></div>
          </div>

          <div className="flex justify-between items-center gap-11 mt-5">
            <img src={GoogleIcon} alt="Google" className="cursor-pointer" />
            <img src={FacebookIcon} alt="Facebook" className="cursor-pointer" />
            <img
              src={MicrosoftIcon}
              alt="Microsoft"
              className="cursor-pointer"
            />
          </div>
          <span className="mt-6 flex gap-2 font-['Inter',sans-serif] font-thin tracking-wider text-xs">
            Don&apos;t have an account?{" "}
            <div className="font-semibold cursor-pointer">
              <Link to="/signup">Sign up</Link>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
