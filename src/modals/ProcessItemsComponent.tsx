import React, { useState } from "react";
import { StorageSelectModal } from "./storageSelectModal";

function ProcessItemsComponent() {
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
      <div className="flex space-x-1 items-center justify-center w-36 h-10 px-3 py-1.5 bg-blue-900 shadow rounded">
        <p className="text-xs font-semibold leading-none text-white">
          Process Top-Up
        </p>
      </div>
      {/* Content of your component */}
      {/* When this div is clicked, the handleDivClick function is triggered */}
      {/* and it opens the modal by setting isOpen to true */}
      {/* You can add any content or elements you want here */}

      {/* Render the MyModal component */}
      {isOpen && (
        <StorageSelectModal
          onClose={closeModal}
          show={isOpen}
          handleSubmit={() => {}}
        />
      )}
    </div>
  );
}

export { ProcessItemsComponent };
