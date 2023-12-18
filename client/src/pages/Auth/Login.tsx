import React, { useState } from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

import "./Auth.css";
import TextInput from "../../components/TextInput/TextInput";
const Login = () => {
  const [loginPayload, setLoginPayload] = useState({
    // fullName: "",
    email: "",
    password: "",
  });
  return (
    <div className="auth">
      <div className="auth__container">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Images/minifyLogo.PNG`}
          alt="logo"
        />
        <div className="auth__form">
          {/* <TextInput
            label="Full Name"
            value={loginPayload.fullName}
            onChange={(val) =>
              setLoginPayload({
                ...loginPayload,
                fullName: val.toLocaleString(),
              })
            }
            placeholder="Fullname"
          /> */}
          <TextInput
            label="Email"
            value={loginPayload.email}
            onChange={(val) =>
              setLoginPayload({
                ...loginPayload,
                email: val.toLocaleString(),
              })
            }
            placeholder="Fullname"
          />
          <TextInput
            label="Password"
            value={loginPayload.password}
            onChange={(val) =>
              setLoginPayload({
                ...loginPayload,
                password: val.toLocaleString(),
              })
            }
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="auth__action">
          <Button
            label="Login"
            onClick={() => alert("Successfully Logged In!")}
          />
          <p>
            No account yet? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
