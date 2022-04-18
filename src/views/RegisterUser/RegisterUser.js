import React, { useState } from "react";

function RegisterUser() {
  const [userData, setUserData] = useState({});

  const branches = [
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
  };

  return (
    <div>
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
              type="text"
              name="name"
              onChange={(e) => userInputHandler(e)}
              placeholder="Name"
              defaultValue=""
            />
          </div>
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 mb-2 bg-gray-200">
            <input
              className="border-none focus:outline-none w-full h-full py-2 px-1 text-grayishfaint"
              type="email"
              name="email"
              onChange={(e) => userInputHandler(e)}
              placeholder="Email here"
              disabled
            />
          </div>
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 mb-2">
            <select
              placeholder="Select Branch"
              className="border-none focus:outline-none w-full h-full py-2 px-1 text-grayishfaint"
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
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 mb-2">
            <input
              className="border-none focus:outline-none w-full h-full py-2 px-1 text-grayishfaint"
              type="number"
              name="regdNo"
              onChange={(e) => userInputHandler(e)}
              placeholder="Registration Number"
              defaultValue=""
            />
          </div>
          <div className="rounded-lg border-2 border-stone-400 w-full p-1 mb-2">
            <input
              className="border-none focus:outline-none w-full h-full py-2 px-1 text-grayishfaint"
              type="number"
              name="phoneNo"
              onChange={(e) => userInputHandler(e)}
              placeholder="Phone Number"
              defaultValue=""
            />
          </div>
          <div className="w-full text-center">
            <button
              onClick={clickHandler}
              className="my-2 p-2 bg-emerald-400 rounded-lg"
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
