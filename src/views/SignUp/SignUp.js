import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { Oval } from "react-loader-spinner";

import { Link, useNavigate } from "react-router-dom";
import "../../styles/signup.css";
import "../../assets/logo.png";
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
import { config } from "../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/events.css";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSidebar, setIsSidebar] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const gooogleProvider = new GoogleAuthProvider();
  const [cookies, setCookie] = useCookies(["userToken"]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingOauth, setIsLoadingOauth] = useState(false);

  const signUpUserButtonHandler = () => {
    if (!password || !confirmPassword || !email) {
      toast.error("Please enter all the fields to sign up");
      return;
    }
    setIsLoading(true);

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          console.log("Register Successfull!");
          // console.log(response);
          auth.currentUser.getIdToken().then((res) => signUp(res));
          setIsLoading(false);
        })
        .catch((error) => {
          toast.error(error.message);
          setIsLoading(false);
        });
    } else {
      toast.error("Passwords don't match");
    }
  };

  const signInWithGoogle = () => {
    setIsLoadingOauth(true);

    signInWithPopup(auth, gooogleProvider)
      .then((response) => {
        console.log("Register Successfull!");
        console.log(response);
        auth.currentUser.getIdToken().then((res) => signUp(res));
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoadingOauth(false);
      });
  };

  function signUp(userToken) {
    axios
      .get(`${config.BASE_URL}/auth/signup`, {
        headers: {
          Authorization: userToken,
        },
      })
      .then((res) => {
        if (res.data.status === 200 || res.data.status === 201) {
          toast.success(res.data.message);
          console.log(res.data.data);
          setCookie("userToken", res.data.token);
          navigate("/register", { state: res.data.data });
        } else {
          toast.error("Some error occured");
        }
      })
      .catch((err) => {
        console.log(err.response.data.data);
        toast.error(err.response.data.message);
      });
  }

  return isSidebar ? (
    <Sidebar
      handleSidebar={() => {
        setIsSidebar(false);
      }}
      aboutUs={false}
    />
  ) : (
    <>
      <Navbar aboutUs={false} handleSidebar={() => setIsSidebar(true)} />
      <div className="nav-background"></div>
      <div className="h-screen w-screen md:flex items-center sign-up-container">
        <ToastContainer />
        <div className="hidden md:flex md:flex-col md:flex-1  pl-8 md:pl-28 md:pr-0 ">
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
        <div className="px-12 md:px-4 md:w-2/5 h-full grid place-items-center bg-white">
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
                required
              />
            </div>
            <div className="rounded-lg border-2 border-stone-400 w-full p-1 flex items-center">
              <input
                className="border-none focus:outline-none text-grayishfaint w-full h-full py-2 px-1"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
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
                {isLoading ? (
                  <Oval
                    ariaLabel="loading-indicator"
                    height={20}
                    width={20}
                    strokeWidth={20}
                    strokeWidthSecondary={5}
                    color="#858585"
                    secondaryColor="#01265D"
                  />
                ) : (
                  <span>Sign Up</span>
                )}
              </button>
              <span className="text-grayishfaint">or</span>
              <button
                className="bg-white border-2 border-gray-800 rounded-md px-8 py-2 font-medium flex items-center justify-center text-md w-full md:w-fit"
                onClick={signInWithGoogle}
              >
                {isLoadingOauth ? (
                  <Oval
                    ariaLabel="loading-indicator"
                    height={20}
                    width={20}
                    strokeWidth={20}
                    strokeWidthSecondary={5}
                    color="#000"
                    secondaryColor="#fff"
                  />
                ) : (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Sign Up with
                    <FcGoogle className="ml-2" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
