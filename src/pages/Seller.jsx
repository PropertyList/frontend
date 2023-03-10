import React from "react";
import Header from "../components/SellerHeader";
import ProfilePic from "../assets/profileimg.png";
import Listings from "../components/MyListings";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Seller = () => {
  const navigate = useNavigate();
  const {user, isAuthenticated } = useAuth0();
  return (
    <div>
      <Header img={ProfilePic} />
      <div className="flex flex-row">
        <div className="basis-[23%] border-r-2 border-[#E5E5E5] flex flex-col h-[90vh]">
        {isAuthenticated && <img
            src={user.picture}
            alt="profile-pic"
            className="w-48 h-48 mx-auto my-6 rounded-[50%]"
          />}
          {isAuthenticated && <h2 className="mx-auto text-[#0D1D54] font-semibold text-xl my-2">{user.name}</h2>}
          {/* <h2 className="mx-auto text-[#0D1D54] font-semibold text-xl my-2">
            Tammy Hills
          </h2> */}
          <h2 className="mx-auto text-[#404B7C] text-xl ">Seller</h2>
          <h2 className="mx-auto text-[#0D1D54] font-semibold text-xl my-2">
            Total Revenue
          </h2>
          <h2 className="mx-auto text-[#404B7C] text-xl ">$100,000</h2>
        </div>
        <div className="basis-[77%]">
          <div className="flex flex-row justify-between my-10 px-10">
            <h2 className="text-[#0D1D54] font-semibold text-xl p-3 ">
              Your Listings
            </h2>
            <button
              className=" p-3 bg-[#6B8418] text-white rounded-xl mr-5"
              onClick={() => {
                navigate("/list");
              }}
            >
              Create Listings +
            </button>
          </div>
          <Listings />
        </div>
      </div>
    </div>
  );
};

export default Seller;
