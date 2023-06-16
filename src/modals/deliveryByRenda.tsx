import React, { useState } from "react";
import { ConfirmModal } from "./confirm";
import { Input } from "@/components";
import { SuccesAlert } from "./confirmSuccess copy";

function DeliveryByRendaModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Let Renda Handle it</button>

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
            <div className="relative " style={{}}>
              <div className=" items-center justify-end pr-3">
                <p className="text-lg font-semibold  text-black"></p>
                <div className="flex  items-center text-black justify-end h-full py-1.5 rounded-lg">
                  <button onClick={closeModal}>X</button>
                </div>
              </div>
              <div className="container mx-auto p-4">
                <p
                  style={{ color: `#1B547F` }}
                  className="text-xl font-semibold leading-normal mb-5 text-center"
                >
                  Shipping Inventory by Renda
                </p>

                <form>
                  <div className="grid grid-cols-2 text-start items-center gap-8 mb-4 ">
                    <label
                      htmlFor="pickupAddress"
                      className="text-sm font-medium text-black"
                    >
                      Pickup Address
                    </label>
                    <input
                      type="text"
                      id="pickupAddress"
                      className="border border-black p-2 rounded"
                      placeholder="pickupAddress"
                    />

                    <label
                      htmlFor="pickupLGA"
                      className="text-sm font-medium text-black"
                    >
                      Pickup LGA
                    </label>
                    <input
                      placeholder="Pickup LGA"
                      type="text"
                      id="pickupLGA"
                      className="border border-black p-2 rounded"
                    />

                    <label
                      htmlFor="pickupState"
                      className="text-sm font-medium text-black"
                    >
                      Pickup State
                    </label>
                    <input
                      placeholder="Pickup State"
                      type="text"
                      id="pickupState"
                      className="border border-black p-2 rounded"
                    />

                    <label
                      htmlFor="pickupDate"
                      className="text-sm font-medium text-black"
                    >
                      Pickup Date
                    </label>
                    <div className="flex gap-2">
                      <input
                        placeholder="mm/dd/yy"
                        type="date"
                        id="pickupDate"
                        className="border border-black text-black p-2 rounded"
                      />
                      <input
                        placeholder="mm/dd/yy"
                        type="time"
                        id="pickupDate"
                        className="border border-black text-black p-2 rounded"
                      />
                    </div>

                    <label
                      htmlFor="contactName"
                      className="text-sm font-medium text-black"
                    >
                      Contact Name
                    </label>
                    <input
                      placeholder="Contact Name"
                      type="text"
                      id="contactName"
                      className="border border-black p-2 rounded"
                    />

                    <label
                      htmlFor="pickupPhone"
                      className="text-sm font-medium text-black"
                    >
                      Pickup Phone
                    </label>
                    <input
                      placeholder="Pickup Phone"
                      type="tel"
                      id="pickupPhone"
                      className="border border-black p-2 rounded"
                    />
                  </div>

                  <button
                    type="submit"
                    className=" text-white py-2 px-4 w-full h-10 rounded-sm"
                    style={{ backgroundColor: `#1B547F` }}
                  >
                    <SuccesAlert />
                  </button>
                </form>
              </div>

              <div className="flex-col"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { DeliveryByRendaModal };
