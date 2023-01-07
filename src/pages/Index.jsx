import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PersonalDetails from "./PersonalDetails";
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyc" element={<PersonalDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
