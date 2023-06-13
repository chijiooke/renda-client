import React, { useState } from "react";
import { TableRow } from "./allRow";

const TableDetails = () => {
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
        className="bg-white h-20 flex justify-around border rounded-sm border-black border-opacity-25"
        style={{}}
      >
        <div className="flex items-center pt-3">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-500"
          />
        </div>
        <div className="pt-7">
          <p className=" uppercase">Item name</p>
        </div>
        <div className="pt-7">
          <p className=" uppercase">FACILITY ID</p>
        </div>
        <div className="pt-7">
          <p className=" uppercase">Facility NAME</p>
        </div>
        <div className="pt-7">
          <p className=" uppercase">QTY IN STOCK</p>
        </div>
        <div className="pt-7">
          <p className=" leading-none uppercase">SKU ID</p>
        </div>
        <div className="pt-7">
          <p className=" uppercase">Unit price</p>
        </div>
        <div className="pt-7">
          <p className=" uppercase">ACTION</p>
        </div>
      </div>
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  );
};

export { TableDetails };
