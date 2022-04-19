import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { config } from "../../config";
import axios from "axios";
import "../../styles/registerUser.css"

function RegisterUser() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [cookies] = useCookies(["userToken"]);
  const [data, setData] = useState({});
  const [axiosPost, setAxiosPost] = useState(false)

  const [userData, setUserData] = useState({
    name: state.name ?? "",
  });

  const branches = [
    "SELECT BRANCH",
    "Computer Science & Engineering",
    "Information Technology",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Electronics & Intrumentation Engineering",
    "Biotechnology",
    "Civil Engineering",
    "Textile Engineering",
    "Fashion & Apparel Technology",
    "Architecture",
    "Computer Science & Application",
    "Planning",
    "Mathematics & Humanities",
    "Physics",
    "Chemistry",
  ];

  const userInputHandler = (event) => {
    let newUserInput = { [event.target.name]: event.target.value };
    setUserData({ ...userData, ...newUserInput });
  };

  const clickHandler = () => {
    console.log(userData);
    register(userData);
  };

  function register(userData) {
    axios
      .post(`${config.BASE_URL}/auth/register`, userData, {
        headers: {
          Authorization: cookies.userToken,
        },
      })
      .then((res) => {
        if (res.data.status === 200 || res.data.status === 201) {
          toast.success(res.data.message);
          setData(res.data.data);
          console.log(res.data.data);
          setAxiosPost(true)
          // navigate("/register", { state: res.data.data });
        } else {
          toast.error("Some error occured");
        }
      })
      .catch((err) => {
        console.log(err.response.data.data);
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
      <div className="px-4 md:px-0 md:w-2/5 h-full grid place-items-center bg-white">
        <div>
          <h2 className="text-regalbluefont text-4xl font-medium mb-2">
            Fill in your details
          </h2>
          <p className="text-grayishfaint text-md mb-8">
            Register for Zairzest 2.0
          </p>
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 mb-3">
            <input
              className="border-none focus:outline-none w-full h-full py-1 px-1 text-grayishfaint"
              type="text"
              name="name"
              onChange={(e) => userInputHandler(e)}
              placeholder="Name"
              defaultValue={state.name ?? ""}
            />
          </div>
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 mb-3 bg-gray-200">
            <input
              className="border-none focus:outline-none w-full h-full py-1 px-1 text-grayishfaint"
              type="email"
              name="email"
              onChange={(e) => userInputHandler(e)}
              placeholder="Email here"
              value={state.email}
              disabled
            />
          </div>
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 mb-3">
            <select
              placeholder="Select Branch"
              className="border-none focus:outline-none w-full h-full py-1 px-1 text-grayishfaint"
              name="branch"
              onChange={(e) => userInputHandler(e)}
            >
              {branches.map((branchItem) => {
                return (
                  <option key={branchItem} value={branchItem}>
                    {branchItem}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 mb-3">
            <input
              className="border-none focus:outline-none w-full h-full py-1 px-1 text-grayishfaint"
              type="number"
              name="regNo"
              onChange={(e) => userInputHandler(e)}
              placeholder="Registration Number"
              defaultValue=""
            />
          </div>
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 mb-3">
            <input
              className="border-none focus:outline-none w-full h-full py-1 px-1 text-grayishfaint"
              type="number"
              name="phone"
              onChange={(e) => userInputHandler(e)}
              placeholder="Phone Number"
              defaultValue=""
            />
          </div>
          <div className="w-full text-center">
            <button
              onClick={clickHandler}
              className="save-info-btn"
            >
              Save Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
