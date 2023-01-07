import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./MainLanding";
import PersonalDetails from "./PersonalDetails";
import SignUp from "./Signup";
import Login from "./Login";
import NotFound from "./404";
import BuyOptions from "./BuyOptions";
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/kyc" element={<PersonalDetails />} /> */}
        <Route path="/kyc/:id" element={<PersonalDetails />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/signup/:id" element={<SignUp />} />
        <Route path="/login/:id" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/buyoptions" element={<BuyOptions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
