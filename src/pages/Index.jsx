import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PersonalDetails from "./PersonalDetails";
import SignUp from "./Signup";
import Login from "./Login";
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyc" element={<PersonalDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
