import React from "react";
import { useFilter } from "../../Context/Filter-Context";
import { CheckboxInput } from "../../components/CheckboxInput/CheckboxInput";
import { RadioInput } from "../../components/RadioInput/RadioInput";

const Filter = ({ prod }) => {
  
  return (
    <div
      className="bg-main-black box-shadow filters"
      style={{ left: filterVisible ? "0rem" : "-100rem" }}
    >
    
    </div>
  );
};

export default Filter;
