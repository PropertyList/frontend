import React from "react";
const PropertyHeader = (props) => {
  return (
    <nav
      className="
    w-[100vw] flex flex-row justify-between border-b-[1px] border-[#E5E5E5] p-2"
    >
      <div>
        <h2 className="text-xl font-semibold mx-10 my-auto mt-3">
          SplitEstate
        </h2>
      </div>
      <div>
        <div className="flex flex-row">
          <div className="flex flex-row justify-start bg-[#f5f6f8] ring-1 ring-black rounded-md my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 my-auto mx-2 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="text"
              placeholder="Enter region"
              className="bg-[#f5f6f8] rounded-md outline-none"
            />
          </div>
          <img
            src={props.img}
            alt="profile-pic"
            className="w-12 h-12 cursor-pointer mx-10"
          />
        </div>
      </div>
    </nav>
  );
};

export default PropertyHeader;
