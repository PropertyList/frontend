import React from "react";

const AddressDetails = (props) => {
  return (
    <div className="flex flex-row p-5 h-[100vh]">
      <div className=" rounded-sm basis-[30%] bg-[#fff] ">
        <div className="flex flex-col">
          <div className="flex flex-row mt-20 ml-10">
            <svg
              width="22"
              height="22"
              viewBox="0 0 15 15"
              fill="none"
              className="text-[#fff] bg-[#6B8418] rounded-full my-auto mr-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h2 className="text-[#6B8418] text-lg my-auo">Personal Details</h2>
          </div>
          <div className="h-5 w-1 border-2 border-[#6b8418] ml-12 "></div>
          <div className="flex flex-row  ml-10">
            <svg
              width="22"
              height="22"
              viewBox="0 0 15 15"
              fill="none"
              className="text-[#4D4D4D]  rounded-full my-auto mr-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h2 className="text-[#4D4D4D] text-lg my-auto mt-1">
              Address Details
            </h2>
          </div>
          <div className="h-5 w-1 border-2 border-[#cdcdcd] ml-12 "></div>
          <div className="flex flex-row  ml-10">
            <svg
              width="22"
              height="22"
              viewBox="0 0 15 15"
              fill="none"
              className="text-[#cdcdcd]  rounded-full my-auto mr-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h2 className="text-[#4d4d4d] text-lg my-auto mt-1">
              Identity Details
            </h2>
          </div>
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
