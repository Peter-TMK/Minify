import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainRoutes from "./Routes";

const App = () => {
  return (
    <div>
      <h2>Register:</h2>
      <RegisterForm />
      <h2>Login:</h2>
      <LoginForm />
      <Dashboard />
      <MainRoutes />
    </div>
    // <Router>
    //   <Routes>
    //   <Route path='/register' element={<RegisterForm />} />
    //   <Route path='/login' element={<LoginForm />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
