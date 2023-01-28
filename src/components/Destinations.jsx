import React from "react";

import europe1 from "../assets/europe1.jpg";
import europe2 from "../assets/europe2.jpg";
import europe3 from "../assets/europe3.jpg";
import europe4 from "../assets/europe4.jpg";
import europe5 from "../assets/europe5.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>Experience Europe Like Never Before</h1>
      <p className="py-4">
        Travel with confidence and style with EuroVoyage, offering unparalleled
        service, customized itineraries, and insider access to the best of
        Europe
      </p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={europe5}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={europe1} alt="/" />
        <img className="w-full h-full object-cover" src={europe2} alt="/" />
        <img className="w-full h-full object-cover" src={europe3} alt="/" />
        <img className="w-full h-full object-cover" src={europe4} alt="/" />
      </div>
    </div>
  );
};

export default Destinations;
