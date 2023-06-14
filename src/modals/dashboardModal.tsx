import React, { useState } from "react";
import { Input } from "@/components";

interface MyModalProps {
  onClose: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            <div className="flex flex-col relative" style={{ width: "300px" }}>
              <div
                className="flex  items-center justify-end pr-3"
                style={{ height: 28 }}
              >
                <div className="flex justify-end items-center text-black  border rounded-lg">
                  <button onClick={closeModal}>X</button>
                </div>
              </div>
              <div>
                <p
                  style={{ color: `#1B547F` }}
                  className=" font-semibold leading-normal text-center py-4 "
                >
                  Edit Inventory details
                </p>
              </div>
              <div className=" flex-col px-4">
                <div className="">
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="itemName">Item Name</label>
                    <input
                      id="itemName"
                      className="mt-1 border h-10 rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="qty">Qty</label>
                    <input id="qty" className="mt-2 border h-10 rounded-lg" />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="description">Brief Description</label>
                    <textarea
                      id="description"
                      className="mt-1 border h-60 rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="dimension">Dimension</label>
                    <input
                      id="dimension"
                      className="mt-1 border h-10 rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="colour">Colour</label>
                    <input
                      id="colour"
                      className="mt-1 border h-10 rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="weight">Weight</label>
                    <input
                      id="weight"
                      className="mt-1 border h-10 rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="unitPrice">Unit Price</label>
                    <input
                      id="unitPrice"
                      className="mt-1 border h-10 rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="image">Image</label>
                    <input id="image" type="file" className="mt-1 border h-10 rounded-lg" />
                  </div>
                </div>

                <div className="">
                  <button
                    className="text-white w-full space-x-1.5 items-center justify-center py-2.5 rounded-md"
                    style={{ backgroundColor: `#1B547F` }}
                    onClick={closeModal}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { MyModal};
