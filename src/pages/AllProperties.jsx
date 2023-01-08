import React from "react";
import Header from "../components/PropertyHeader";
import User from "../assets/user2.png";
import Cards from "../components/PropertyCard";
import H1 from "../assets/house/new1.jpg";
import H2 from "../assets/house/new2.jpeg";
import H3 from "../assets/house/new3.jpg";

const AllProperties = () => {
  return (
    <div>
      <Header img={User} />
      <div className="flex flex-col p-7">
        <h2 className="text-2xl font-semibold text-[#0D1D54] mt-4 mb-4 ">
          Properties near you
        </h2>
        <Cards
          img={H1}
          name="NYC property"
          price="$22,000"
          est="$999"
          ownership="2%"
        />
        <h2 className="text-2xl font-semibold text-[#0D1D54] my-7 mt-5">
          Buy Home fractions
        </h2>
        <div className="flex flex-row ">
          <Cards
            img={H2}
            name="NYC property"
            price="$22,000"
            est="$999"
            ownership="2%"
          />
          <Cards
            img={H3}
            name="NYC property"
            price="$22,000"
            est="$999"
            ownership="2%"
          />
          <Cards
            img={H1}
            name="NYC property"
            price="$22,000"
            est="$999"
            ownership="2%"
          />
        </div>
        <h2 className="text-2xl font-semibold text-[#0D1D54] my-2">
          Invest Togther
        </h2>
        <Cards
          img={H3}
          name="NYC property"
          price="$22,000"
          est="$999"
          ownership="2%"
        />
      </div>
    </div>
  );
};

export default AllProperties;
