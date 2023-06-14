import React, { useState } from "react";
import { DeliveryByCustomerModal } from "./deliveryByCustomer";
import { DeliveryByRendaModal } from "./deliveryByRenda";

interface MyModalProps {
  onClose: () => void;
}

const ConfirmModal: React.FC<MyModalProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal1 = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Next</button>

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
          <div>
            <div>
              <div
                className="relative w-full"
                style={{ maxWidth: 469, height: 200 }}
              >
                <div className="inline-flex flex-col space-y-8 items-center  bg-white shadow rounded-lg w-full h-full">
                  <div className="inline-flex space-x-16 items-center justify-end py-1.5 px-4 w-full h-12">
                    <p className="text-sm font-semibold leading-tight text-gray-600"></p>
                    <div className="flex items-center justify-end h-full px-2 py-1.5 rounded-lg">
                      <div className="flex  items-center justify-end pr-3">
                        <p className="text-sm font-semibold  "></p>
                        <div className="flex  text-black items-center justify-end border h-full py-1.5 rounded-lg">
                          <button onClick={closeModal1}>X</button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative items-center  w-full"
                      style={{
                        maxWidth: 347.22,
                        height: 132,
                        top: 100,
                        left: 160,
                        transform: "translateX(-50%)",
                        justifyContent: "center",
                      }}
                    >
                      <p className="w-full text-lg font-semibold text-black leading-normal text-center py-4">
                        Confirm how you want your item(s) delivered to your
                        storage facility
                      </p>
                      <div className="flex justify-between py-2">
                        <button
                          style={{ color: `#1B547F` }}
                          className="inline-flex space-x-1 items-center justify-center w-1/2 h-12 px-3  shadow rounded-md  text-sm font-semibold leading-none"
                        >
                          <>
                            <DeliveryByCustomerModal />
                          </>
                        </button>
                        <button
                          style={{ backgroundColor: `#1B547F` }}
                          className="inline-flex space-x-1 items-center justify-center w-1/2 h-12 px-3  shadow border rounded-md text-white text-sm font-semibold leading-none"
                        >
                          <DeliveryByRendaModal />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { ConfirmModal };
