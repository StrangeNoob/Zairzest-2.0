import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen md:flex items-center bg-regalblue ">
      <div className="hidden md:flex md:flex-col md:flex-1 bg-regalblue pl-8 md:pl-28 md:pr-0 ">
        <h1 className="font-bold text-white text-3xl md:text-6xl mb-12 tracking-wide">
          Experience the
          <br />
          Future Tech with
          <br />
          zairza
        </h1>
        <p className="text-md font-medium text-white mt-6">
          Release all your stress with the exciting
          <br /> Tech and Fun events in the most
          <br /> awaited fest . Zairzest 2.0 presented by
          <br /> Zairza.
        </p>
      </div>
      <div className="px-4 md:px-0 md:w-1/3 h-full grid place-items-center bg-white">
        <div>
          <h2 className="text-regalbluefont text-4xl font-medium mb-2">
            Experience the Future Tech
          </h2>
          <p className="text-grayishfaint text-md mb-8">
            Register for Zairzest 2.0
          </p>
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 mb-2">
            <input
              className="border-none focus:outline-none w-full h-full py-2 px-1 text-grayishfaint"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email here"
            />
          </div>
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 flex items-center">
            <input
              className="border-none focus:outline-none text-grayishfaint w-full h-full py-2 px-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <AiOutlineEye size={24} color="#858585" />
          </div>
          <div>
            <p className="text-md text-grayishfaint mt-4">
              Already a Member Yet ? <span className="text-deepPinkish font-md cursor-pointer" onClick={()=>navigate('/login')}>Sign In</span>
            </p>
          </div>
          <div className="flex mt-4 justify-between items-center flex flex-col md:flex-row">
            <button className="bg-buttonColor text-white text-md px-12  py-2 rounded-md border-none w-full md:w-fit">Sign Up</button>
            <span className="text-grayishfaint">or</span>
            <button className="bg-white border-2 border-gray-800 rounded-md px-8 py-2 font-medium flex items-center justify-center text-md w-full md:w-fit ">
              Sign Up with<FcGoogle className="ml-2"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
