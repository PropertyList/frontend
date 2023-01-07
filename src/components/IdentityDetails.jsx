import React from "react";

const IdentityDetails = (props) => {
  return (
    <div className="flex flex-row p-5 h-[100vh]">
      <div className=" rounded-sm basis-[30%] bg-[#fff] ">
        <div>
          <h2>Identity</h2>
        </div>
      </div>
      <form className="basis-[70%] flex flex-col px-24 py-10 flex-start">
        <h2 className="text-[#0D1D54] font-semibold text-xl my-5">
          Identity Details
        </h2>
        <div className="flex flex-row justify-between my-2">
          <div className="flex flex-col basis-[45%]">
            <label className="text-[#404B7C] font-normal text-sm my-2">
              Name on identity
            </label>
            <input
              type="text"
              placeholder="Enter name on id"
              className="shadow p-3 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col basis-[45%]">
            <label className="text-[#404B7C] font-normal text-sm my-2">
              Identity number
            </label>
            <input
              type="text"
              placeholder="Enter identity number"
              className="shadow p-3 rounded-md outline-none"
            />
          </div>
        </div>
        <div className="bg-[#F4F4F4] outline-dashed outline-2 outline-[#bdbdbd] rounded-md flex flex-row p-3 my-8 ">
          <div className="basis-[80%] flex flex-col">
            <h2 className="mx-2 mt-2 text-[#404B7C] font-[550] text-lg ">
              Upload Image
            </h2>
            <p className="text-[#73788F] m-2 ">
              On desktop, Simply drag and drop your file in this field.
              acceptable formats: JPEG, JPG or PNG.{" "}
            </p>
          </div>
          <button className="basis-[20%]">
            <svg
              width="60"
              height="60"
              viewBox="0 0 15 15"
              className="text-[#000000ac]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V4.70711L9.29289 2H3.5ZM2 2.5C2 1.67157 2.67157 1 3.5 1H9.5C9.63261 1 9.75979 1.05268 9.85355 1.14645L12.7803 4.07322C12.921 4.21388 13 4.40464 13 4.60355V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5ZM4.75 7.5C4.75 7.22386 4.97386 7 5.25 7H7V5.25C7 4.97386 7.22386 4.75 7.5 4.75C7.77614 4.75 8 4.97386 8 5.25V7H9.75C10.0261 7 10.25 7.22386 10.25 7.5C10.25 7.77614 10.0261 8 9.75 8H8V9.75C8 10.0261 7.77614 10.25 7.5 10.25C7.22386 10.25 7 10.0261 7 9.75V8H5.25C4.97386 8 4.75 7.77614 4.75 7.5Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <button
          className="my-6 p-3 bg-[#6B8418] text-white rounded-xl w-[30%]"
          onClick={() => {
            props.setShowIdentityDetails(false);
          }}
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default IdentityDetails;
