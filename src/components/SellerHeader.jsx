import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SellerHeader = (props) => {
  const { logout } = useAuth0();
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
      <div className="flex flex-row justify-between ">
      <button className="my-1 p-3 bg-[red] text-white rounded-xl w-[62%]" onClick={() => logout({ returnTo: window.location.origin })}
        >LogOut
        </button>
        
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
