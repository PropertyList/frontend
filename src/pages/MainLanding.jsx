import React from "react";
import kycImg from "../assets/eth.svg";
import { Link, useNavigate } from "react-router-dom";
const MainLanding = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row p-5 h-[100vh]">
      <div className=" rounded-sm basis-[30%] bg-[#6B8418] text-white flex flex-col p-5 leading-6">
        <img
          className="
    mt-52 w-64 ml-5"
          src={kycImg}
          alt="Img"
        />
      </div>
      <form className="basis-[70%] flex flex-col px-24 py-10 flex-start">
        <h2 className="text-[#0D1D54] font-semibold text-2xl my-5">
          Create an account
        </h2>
        <p className="text-[#404B7C] font-[500] text-sm mb-2">
          {" "}
          Select which domain suits you perfectly.
        </p>
        <div className="flex flex-row justify-around my-20">
          <div className-="flex flex-col">
            <h2 className="text-[#0D1D54]  text-2xl "> I am a seller</h2>
            <button
              className="my-3 p-3 bg-[#6B8418] text-white rounded-xl w-[90%]"
              onClick={() => navigate("/signup/seller")}
            >
              SignUp
            </button>
          </div>
          <div className-="flex flex-col">
            <h2 className="text-[#0D1D54]  text-2xl "> I am a buyer</h2>
            <button
              className="my-3 p-3 bg-[#6B8418] text-white rounded-xl w-[90%]"
              onClick={() => navigate("/signup/buyer")}
            >
              SignUp
            </button>
          </div>
        </div>
        <h2 className="text-[#9A9A9A] text-sm mt-10">
          Already have an account?{" "}
          <Link
            className="text-[#6B8418] cursor-pointer underline underline-offset-2"
            to="/login"
          >
            Login
          </Link>
        </h2>
      </form>
      <h2 className="absolute top-0 right-0 text-[#9A9A9A] text-sm w-fit mt-5 mr-5">
        Having trobule?{" "}
        <Link
          className="text-[#6B8418] cursor-pointer underline underline-offset-2"
          to="/help"
        >
          Get Help
        </Link>
      </h2>
    </div>
  );
};

export default MainLanding;
