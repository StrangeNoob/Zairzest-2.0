import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/signup.css"
import "../../assets/logo.png"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getIdToken,
  onAuthStateChanged,
} from "firebase/auth";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useEffect } from "react";
import { async } from "@firebase/util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const gooogleProvider = new GoogleAuthProvider();
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);

  const signUpUserButtonHandler = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          console.log("Register Successfull!");
          // console.log(response);
          auth.currentUser.getIdToken().then((res) => signUp(res));
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } else {
      toast.error("Passwords don't match");
    }
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, gooogleProvider)
      .then((response) => {
        console.log("Register Successfull!");
        console.log(response);
        auth.currentUser.getIdToken().then((res) => signUp(res));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  async function signUp(userToken) {
    axios
      .get("https://zairzest-2.herokuapp.com/auth/signup", {
        headers: {
          Authorization: userToken,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200 || res.data.status === 201) {
          toast.success(res.data.message);
          console.log(res.data.data);
          setCookie("userToken", res.data.token);

        } else {
          toast.error("Some error occured");
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(err.response.data.message);
      });
  }

  return (
    <div className="h-screen w-screen md:flex items-center sign-up-container">
      <ToastContainer />
      <div className="flex-1  pl-8 md:pl-28 md:pr-0 ">
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
      <div className="px-12 md:px-0 md:w-2/5 h-full grid place-items-center bg-white">
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
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 flex items-center mb-2">
            <input
              className="border-none focus:outline-none text-grayishfaint w-full h-full py-2 px-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 flex items-center">
            <input
              className="border-none focus:outline-none text-grayishfaint w-full h-full py-2 px-1"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <p className="text-md text-grayishfaint mt-4">
              Already a Member Yet ?{" "}
              <span
                className="text-deepPinkish font-md cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign In
              </span>
            </p>
          </div>
          <div className="flex mt-4 justify-between items-center flex flex-col md:flex-row">
            <button
              className="bg-buttonColor text-white text-md px-12  py-3 rounded-md border-none w-full md:w-fit"
              onClick={signUpUserButtonHandler}
            >
              Sign Up
            </button>
            <span className="text-grayishfaint">or</span>
            <button
              className="bg-white border-2 border-gray-800 rounded-md px-8 py-2 font-medium flex items-center justify-center text-md w-full md:w-fit"
              onClick={signInWithGoogle}
            >
              Sign Up with
              <FcGoogle className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
