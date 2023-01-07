import React from "react";

const AddressDetails = (props) => {
  return (
    <div className="flex flex-row p-5 h-[100vh]">
      <div className=" rounded-sm basis-[30%] bg-[#fff] ">
        <div>
          <h2>Checking</h2>
        </div>
      </div>
      <form className="basis-[70%] flex flex-col px-24 py-10 flex-start">
        <h2 className="text-[#0D1D54] font-semibold text-xl my-5">
          Address Details
        </h2>
        <label className="text-[#404B7C] font-normal text-sm my-2">
          Line 1
        </label>
        <input
          type="text"
          placeholder="Flat no / House no"
          className="shadow p-3 rounded-md outline-none"
        />
        <label className="text-[#404B7C] font-normal text-sm my-2">
          Line 2
        </label>
        <input
          type="text"
          placeholder="Street name / Building no / Plot no"
          className="shadow p-3 rounded-md outline-none"
        />
        <div className="flex flex-row justify-between my-2">
          <div className="flex flex-col basis-[45%]">
            <label className="text-[#404B7C] font-normal text-sm my-2">
              City
            </label>
            <input
              type="text"
              placeholder="Enter city name"
              className="shadow p-3 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col basis-[45%]">
            <label className="text-[#404B7C] font-normal text-sm my-2">
              Region
            </label>
            <input
              type="text"
              placeholder="Flat no / House no"
              className="shadow p-3 rounded-md outline-none"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between my-2">
          <div className="flex flex-col basis-[45%]">
            <label className="text-[#404B7C] font-normal text-sm my-2">
              Country
            </label>
            <input
              type="text"
              placeholder="Enter country name"
              className="shadow p-3 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col basis-[45%]">
            <label className="text-[#404B7C] font-normal text-sm my-2">
              Postal/Zip Code
            </label>
            <input
              type="text"
              placeholder="Enter postal / zip code"
              className="shadow p-3 rounded-md outline-none"
            />
          </div>
        </div>
        <button
          className="my-6 p-3 bg-[#6B8418] text-white rounded-xl w-[30%]"
          onClick={() => {
            props.setShowIdentityDetails(true);
          }}
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default AddressDetails;
