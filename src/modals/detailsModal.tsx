import React, { useState } from "react";
import { MyModal } from "./dashboardModal";


function SomeComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDivClick = () => {
    // Open the modal by setting isOpen to true
    setIsOpen(true);
  };

  const closeModal = () => {
    // Close the modal by setting isOpen to false
    setIsOpen(false);
  };

  return (
    <div onClick={handleDivClick}>
      <div className="grid grid-cols-8 mt-2 justify-evenly p-5 bg-[#f9f9f9] border-1 border-[#bbbbbb] items-center cursor-pointer">
        <div className="inline-flex items-center justify-start w-36  px-3 py-1.5  border rounded-md">
          <p className="">Mac Book </p>
        </div>
        <div className="inline-flex items-center justify-start  px-3 py-1.5  border rounded-md">
          <p className="">12</p>
        </div>
        <div className="inline-flex items-center justify-start  px-3 py-1.5  border rounded-md">
          <p className="">14cm</p>
        </div>
        <div className="inline-flex items-center justify-start  px-3 py-1.5  border rounded-md">
          <p className="">Black</p>
        </div>
        <div className="inline-flex items-center justify-start  px-3 py-1.5  border rounded-md">
          <p className="">450,000</p>
        </div>
        <p className="w-44  leading-none">
          Corem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="inline-flex items-center justify-start  px-3 py-1.5  border rounded-md">
          <p className="">70kg</p>
        </div>

        <p className="">img001111.jpg</p>
      </div>
      {/* Content of your component */}
      {/* When this div is clicked, the handleDivClick function is triggered */}
      {/* and it opens the modal by setting isOpen to true */}
      {/* You can add any content or elements you want here */}

      {/* Render the MyModal component */}
      {isOpen && <MyModal onClose={closeModal} />}
    </div>
  );
}

export {SomeComponent};
