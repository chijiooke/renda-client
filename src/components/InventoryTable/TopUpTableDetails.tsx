import React, { useState } from "react";
import { TableRow } from "./inventoryTableRow";
import { TopUpTableRow } from "./TopUpallRow";

const TopUpTableDetails = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleShowMore = (row :any) => {
    if (expandedRow === row) {
      setExpandedRow(null);
    } else {
      setExpandedRow(row);
    }
  };

  return (
    <div className="container mx-auto pt-4">
      <div
        className="bg-white h-20 grid grid-cols-9 pl-12 border rounded-sm border-black border-opacity-25"
        style={{}}
      >
        <div className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-500"
          />
        </div>
        <div className="flex items-center font-semibold leading-none uppercase">
          SKU ID
        </div>
        <div className="flex items-center font-semibold leading-none uppercase">
          ITEM NAME
        </div>
        <div className="flex items-center font-semibold leading-none uppercase">
          UPDATE stock
        </div>
        <div className="flex items-center font-semibold leading-none uppercase">
          facility location
        </div>
        <div className="flex items-center font-semibold leading-none uppercase">
          QUANTITY
        </div>
        <div className="flex items-center font-semibold leading-none uppercase">
          COLOR
        </div>
        <div className="flex items-center font-semibold leading-none uppercase">
          WEIGHT
        </div>
        <div className="flex items-center font-semibold leading-none uppercase">
          UNIT PRICE
        </div>
      </div>
      <TopUpTableRow />

    </div>
  );
};

export { TopUpTableDetails };
