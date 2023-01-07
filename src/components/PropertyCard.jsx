import React from "react";

const PropertyCard = (props) => {
  return (
    <div className="max-w-[280px] h-[400px] my-2 rounded-xl overflow-hidden shadow-lg mr-5">
      <img className="w-full h-[45%]" src={props.img} alt="card-img" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">{props.ownership} Ownership</p>
        <p className="text-gray-700 text-base">Price: {props.price}</p>
        <p className="text-gray-700 text-base">
          Est. income per month: {props.est}
        </p>
      </div>
      <div className="px-6  pb-2">
        <button className="my-2 p-3 bg-[#6B8418] text-white rounded-xl w-full">
          Bid Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
