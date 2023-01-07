import React from "react";
import LoginImg from "../assets/loginImg.svg";
import { Link, useNavigate } from "react-router-dom";
import Metamask from "../assets/metamask.svg";
import Coinbase from "../assets/Coinbase.svg";
import { useAuth0 } from "@auth0/auth0-react";
import Google from "../assets/google.svg";
import Github from "../assets/github.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  return (
    <div className="flex flex-row p-5 h-[100vh]">
      <div className=" rounded-sm basis-[30%] bg-[#6B8418] text-white flex flex-col p-5 leading-6 justify-between">
        <div className="w-[70%] mt-20">
          <h2 className="font-[550] text-3xl mb-5">One key at a time.</h2>
          <p className="text-sm">Your profit our promise.</p>
        </div>
        <img className="w-60 flex-end" src={LoginImg} alt="Img" />
      </div>
      <form className="basis-[70%] flex flex-col px-24 py-10 flex-start">
        <h2 className="text-[#0D1D54] font-semibold text-2xl mt-5 mb-3">
          Login ✌️
        </h2>
        <p className="text-[#404B7C] font-semibold text-sm mb-2">
          On your way back to make profit.
        </p>
        <label className="text-[#404B7C] font-normal text-sm my-2">Email</label>
        <input
          type="text"
          placeholder="Your@email"
          className="p-3 rounded-md outline-none shadow  w-[62%] focus:ring-1 ring-black"
        />
        <label className="text-[#404B7C] font-normal text-sm my-2">
          Password
        </label>
        <input
          type="password"
          placeholder="shh.. sceret"
          className="shadow p-3 rounded-md outline-none w-[62%] focus:ring-1 ring-black"
        />
        <Link
          className="text-[#9a9a9a] cursor-pointer text-sm hover:text-[#6b8418] w-[62%] mt-2 text-right"
          to="/reset"
        >
          Forgot Password?
        </Link>
        <h2 className="text-[#404B7C] font-normal text-sm my-2 w-[62%] text-center">
          Or continue with
        </h2>
        <div className="flex flex-row ">
          <button className="bg-white rounded-sm hover:ring-1 ring-black p-3 shadow w-[30%]" onClick={() => loginWithRedirect()}>
            <div className="flex flex-row ">
              <img className="w-9" src={Google} alt="Google-img" />
              <h2 className="m-auto ">Continue with Google</h2>
            </div>
          </button>
          <button className="bg-white rounded-sm hover:ring-1 ring-black p-3 shadow w-[30%] ml-2">
            <div className="flex flex-row ">
              <img className="w-9" src={Github} alt="Github-img" />
              <h2 className="m-auto">Continue with GitHub</h2>
            </div>
          </button>
        </div>
        <h2 className="text-[#404B7C] font-normal text-sm my-2 w-[62%] text-center"></h2>
        <div className="flex flex-row ">
          <button className="bg-white rounded-sm hover:ring-1 ring-black p-3 shadow w-[30%]">
            <div className="flex flex-row ">
              <img className="w-9" src={Metamask} alt="Metamask-img" />
              <h2 className="m-auto ">Connect with Metamask</h2>
            </div>
          </button>
          <button className="bg-white rounded-sm hover:ring-1 ring-black p-3 shadow w-[30%] ml-2">
            <div className="flex flex-row ">
              <img className="w-9" src={Coinbase} alt="Coinbase-img" />
              <h2 className="m-auto">Connect with Coinbase</h2>
            </div>
          </button>
        </div>
        <button
          className="my-6 p-3 bg-[#6B8418] text-white rounded-xl w-[62%]"
          onClick={() => {
            navigate("/buyoptions");
          }}
        >
          Login
        </button>
        <h2 className="text-[#9A9A9A] text-sm">
          Don't have an account?{" "}
          <Link
            className="text-[#6B8418] cursor-pointer underline underline-offset-2"
            to="/signup"
          >
            Create Account
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
export default Login;
