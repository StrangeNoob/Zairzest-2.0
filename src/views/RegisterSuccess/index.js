import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import "../../styles/signup.css"
const RegisterSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!state) {
      navigate(-1);
    }
  }, [])

  return (
    <>
      <div className="h-screen w-screen md:flex items-center bg-regalblue register-success">
        <div className="hidden md:flex md:flex-col md:flex-1 left-section pl-8 md:pl-28 md:pr-0 ">
          <h1 className="font-bold text-white text-3xl md:text-6xl mb-12">
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
        <div className="px-10 pt-16 md:pt-0 md:px-4 md:px-0 md:w-2/5 h-full grid place-items-center bg-white">
          <div>
            <h1 className="text-regalbluefont text-4xl font-medium mb-3 leading-16">
              Congratulations !!
              <br />
              You are registered
              <br />
              successfully
            </h1>
            <p className="text-grayishfaint tracking-wide font-medium text-md mt-10">Your ZEN Code is:</p>
            <p className="text-regalbluefont text-2xl font-medium mb-2">{state && state.zid}</p>
            <br />
            <p className="text-grayishfaint text-lg mb-8 font-medium">Show the Zen Code to get your Zen Card<br /> by paying Rs 50/- in Zairza to complete the registration.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterSuccess;
