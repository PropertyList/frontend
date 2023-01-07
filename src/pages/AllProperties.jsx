import React from "react";
import Header from "../components/PropertyHeader";
import User from "../assets/user2.png";
import Cards from "../components/PropertyCard";
import H1 from "../assets/house/1.png";
const AllProperties = () => {
  return (
    <div>
      <Header img={User} />
      <div className="flex flex-col p-7">
        <h2 className="text-xl font-semibold text-[#0D1D54] mt-4 mb-2 ">
          Properties near you
        </h2>
        <Cards img={H1} name="NYC property" />
        <h2 className="text-xl font-semibold text-[#0D1D54] my-2">
          Buy Home fractions
        </h2>
        <h2 className="text-xl font-semibold text-[#0D1D54] my-2">
          Invest Togther
        </h2>
      </div>
    </div>
  );
};

export default AllProperties;
