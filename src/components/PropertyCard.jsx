import React from "react";

const PropertyCard = (props) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={props.img} alt="card-img" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button>Bid Now</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
