import React, { useState } from "react";
import { Link } from "react-router-dom";

import { signup } from "../../Services/auth.services";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

import "./Auth.css";
const Signup = () => {
  const [signUpPayload, setSignUpPayload] = useState({
    fullName: "",
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
          <TextInput
            label="Full Name"
            value={signUpPayload.fullName}
            onChange={(val) =>
              setSignUpPayload({
                ...signUpPayload,
                fullName: val.toLocaleString(),
              })
            }
            placeholder="Fullname"
          />
          <TextInput
            label="Email"
            value={signUpPayload.email}
            onChange={(val) =>
              setSignUpPayload({
                ...signUpPayload,
                email: val.toLocaleString(),
              })
            }
            placeholder="Fullname"
          />
          <TextInput
            label="Password"
            value={signUpPayload.password}
            onChange={(val) =>
              setSignUpPayload({
                ...signUpPayload,
                password: val.toLocaleString(),
              })
            }
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="auth__action">
          <Button label="Sign Up" onClick={() => signup(signUpPayload)} />
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
