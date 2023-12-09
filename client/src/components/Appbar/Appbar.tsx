import React from "react";
// import { Link } from "react-router-dom";
import "./Appbar.css";
const Appbar = () => {
  return (
    <div className="appbar">
      <div className="appbar__inner">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Images/minifyLogo.PNG`}
          alt="logo"
        />
        <div className="appbar__menus">
          <h3 className="active">Dashboard</h3>
          <h3>Profile</h3>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
