import React from "react";

import europe1 from "../assets/europe1.jpg";
import europe2 from "../assets/europe2.jpg";
import europe3 from "../assets/europe3.jpg";
import europe4 from "../assets/europe4.jpg";
import europe5 from "../assets/europe5.jpg";
import europe6 from "../assets/europe6.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={europe1} />
      <SelectsCard bg={europe2} />
      <SelectsCard bg={europe3} />
      <SelectsCard bg={europe4} />
      <SelectsCard bg={europe5} />
      <SelectsCard bg={europe6} />
    </div>
  );
};

export default Selects;
