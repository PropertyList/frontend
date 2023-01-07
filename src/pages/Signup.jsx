import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-row p-5 h-[100vh]">
      <div className=" rounded-sm basis-[30%] bg-[#6B8418] text-white flex flex-col p-5 leading-6">
        <h2 className="font-semibold text-xl mb-5 mt-40">
          Few click away on KYC
        </h2>
        <p>Start you KYC in minutes save time & money</p>
      </div>
      <form className="basis-[70%] flex flex-col px-24 py-10 flex-start">
        <h2 className="text-[#0D1D54] font-semibold text-xl my-5">
          Create an account
        </h2>
        <p className="text-[#404B7C] font-[500] text-sm mb-2">
          {" "}
          Sign up with your email address so that your information is not lost
          and safe with us.
        </p>
        <div className="flex flex-row justify-between my-2">
          <div className="flex flex-col basis-[45%]">
            <label className="text-[#404B7C] font-normal text-sm my-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="shadow p-3 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col basis-[45%]">
            <label className="text-[#404B7C] font-normal text-sm my-2">
              Nickname
            </label>
            <input
              type="text"
              placeholder="Enter nickname"
              className="shadow p-3 rounded-md outline-none"
            />
          </div>
        </div>
        <label className="text-[#404B7C] font-normal text-sm my-2">Email</label>
        <input
          type="text"
          placeholder="Your@email"
          className="p-3 rounded-md outline-none shadow"
        />
        <label className="text-[#404B7C] font-normal text-sm my-2">
          Password
        </label>
        <input
          type="password"
          placeholder="shhh sceret"
          className="shadow p-3 rounded-md outline-none"
        />
        <button className="my-6 p-3 bg-[#6B8418] text-white rounded-xl w-[30%]">
          Save & Continue
        </button>
        <h2>Already have an account? Log in</h2>
      </form>
    </div>
  );
};

export default SignUp;
