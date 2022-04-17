import React, { useState } from "react";
import {FcGoogle} from "react-icons/fc"
import {AiOutlineEye} from "react-icons/ai"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div>
        <h1>Experience the Future Tech with zairza</h1>
        <p>
          Release all your stress with the exciting Tech and Fun events in the
          most awaited fest . Zairzest 2.0 presented by Zairza.
        </p>
      </div>
      <div>
        <h2>Experience the Future Tech</h2>
        <p>Sign In to get into Zairzest</p>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email here"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <AiOutlineEye/>
        </div>
        <div>
            <p>Don’t remember Password ? <span>Reset Password</span></p>
            <p>Not a Member Yet ? <span>Sign Up</span></p>
        </div>
        <div>
            <button>Login</button>
            <span>or</span>
            <button>Sign in with <FcGoogle/></button>
        </div>
      </div>
    </div>
  );
};

export default Login;
