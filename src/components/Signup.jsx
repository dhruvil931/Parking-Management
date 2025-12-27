import GoogleIcon from "../assets/Icons/GoogleIcon.png";
import FacebookIcon from "../assets/Icons/FacebookIcon.png";
import MicrosoftIcon from "../assets/Icons/MicrosoftIcon.png";
import { Link } from "react-router";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      console.log("All fields required");
      return;
    }

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/signup", {
        email,
        password,
      });

      if (!res.data || res.data.success !== true) {
        console.log("Signup failed:", res.data);
        return;
      }

      console.log("Signup success:", res.data);

      window.location.href = "/login";
    } catch (err) {
      console.log("Signup failed:", err.response?.data || err.message);
    }
  };

  return (
    <>
      <div className="min-h-screen text-white flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3">
          <p className="text-3xl mb-2 font-['poppins', sans-serif]">
            Sign up with ParkIQ
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#F0EDFF] text-[#1C1C1C] h-13 p-3.5 rounded-md font-['poppins'] text-sm max-xs:w-72"
          />
          <p className="text-xs font-['Inter',sans-serif] tracking-wider font-light">
            Confirm Password
          </p>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-[#F0EDFF] text-[#1C1C1C] h-13 p-3.5 rounded-md font-['poppins'] text-sm max-xs:w-72"
          />
        </div>
        <div className="flex-col flex justify-between items-center">
          <button
            className="bg-gradient-to-tr from-[#9181F4] to-[#5038ED] w-33 h-12 rounded-lg text-xs mt-5 mb-5 cursor-pointer font-[poppins]"
            onClick={handleSignUp}
          >
            Sign up
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
            Already have an account?
            <div className="font-semibold cursor-pointer">
              <Link to="/login">Log in</Link>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
