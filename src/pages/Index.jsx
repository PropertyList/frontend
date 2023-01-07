import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./MainLanding";
import PersonalDetails from "./PersonalDetails";
import SignUp from "./Signup";
import Login from "./Login";
import NotFound from "./404";
import BuyOptions from "./BuyOptions";
import Seller from "./Seller";
import ListProperty from "./ListProperty";
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyc/:id" element={<PersonalDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/:id" element={<SignUp />} />
        <Route path="/login/:id" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/list" element={<ListProperty />} />
        <Route path="/buyoptions" element={<BuyOptions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
