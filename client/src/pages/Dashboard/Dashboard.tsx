import React from "react";
// import ReactDOM from "react-dom/client";
import TextInput from "../../components/TextInput/TextInput";
// import App from './App';

const Dashboard = () => (
  <div className="dashboard">
    <h3>Dashboard</h3>
    <TextInput onChange={(val) => console.log(val)} />
  </div>
);

export default Dashboard;
