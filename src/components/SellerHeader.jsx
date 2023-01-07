import React from "react";
const SellerHeader = (props) => {
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
        <img
          src={props.img}
          alt="profile-pic"
          className="w-12 h-12 cursor-pointer mx-10"
        />
      </div>
    </nav>
  );
};

export default SellerHeader;
