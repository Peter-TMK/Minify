import React from "react";
// import ReactDOM from "react-dom/client";
// import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
// import App from './App';
import "./Dashboard.css";

const Dashboard = () => (
  <div className="dashboard">
    <div className="dashboard__empty-state">
      <p>No short URL provided!</p>
      <Button
        label="Create short URL"
        variant="secondary"
        onClick={() => alert("Hello")}
      />
    </div>
    {/* <h3>Dashboard</h3>
    <TextInput
      // label="Username:"
      type="password"
      placeholder="username"
      onChange={(val) => console.log(val)}
    /> */}
  </div>
);

export default Dashboard;
