import React, { useState } from "react";
import { ConfirmModal } from "./confirmStorage";


function HowItemsToBeDeliveredHandler() {
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
      <p className="text-sm font-semibold  text-white">
        <button onClick={closeModal}>Submit</button>
      </p>
      {/* Content of your component */}
      {/* When this div is clicked, the handleDivClick function is triggered */}
      {/* and it opens the modal by setting isOpen to true */}
      {/* You can add any content or elements you want here */}

      {/* Render the ConfirmModal component */}
      {isOpen && <ConfirmModal onClose={closeModal} />}
    </div>
  );
}

export {HowItemsToBeDeliveredHandler};
