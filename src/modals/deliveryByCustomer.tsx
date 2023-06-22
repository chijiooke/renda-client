import { useState } from "react";
import { SuccesAlert } from "./confirmSuccess copy";

function DeliveryByCustomerModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Do it myself</button>

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
            <div className="relative rounded-lg" style={{}}>
              <div className=" items-center justify-end pr-3">
                <p className="text-lg font-semibold  text-black"></p>
                <div className="flex  items-center text-black justify-end h-full py-1.5 rounded-lg">
                  <button onClick={closeModal}>X</button>
                </div>
              </div>

              <div className="container mx-auto p-4">
                <p className="text-xl font-semibold leading-normal text-center text-blue-900">
                  Shipping inventory by <br />
                  customer’s delivery company
                </p>
                <form>
                  <div className="grid grid-cols-2 text-start items-center gap-8 mb-4 ">
                    <label
                      htmlFor="pickupAddress"
                      className="text-sm font-medium text-black"
                    >
                      Sender contactr name
                    </label>
                    <input
                      type="text"
                      id="pickupAddress"
                      className="border border-black p-2 rounded"
                      placeholder="pickupAddress"
                    />

                    <label
                      htmlFor="contact name"
                      className="text-sm font-medium text-black"
                    >
                      Sender's pnone number
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
                      Driver's name
                    </label>
                    <input
                      placeholder="Pickup State"
                      type="text"
                      id="Driver's name"
                      className="border border-black p-2 rounded"
                    />
                    <label
                      htmlFor="pickupState"
                      className="text-sm font-medium text-black"
                    >
                      Driver's phone number
                    </label>
                    <input
                      placeholder="Driver's phone number"
                      type="text"
                      id="Driver's name"
                      className="border border-black p-2 rounded"
                    />

                    <label
                      htmlFor="pickupDate"
                      className="text-sm font-medium text-black"
                    >
                      <p className="text-xs font-medium leading-snug">
                        Estimated Time of Arrival
                      </p>
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
                  </div>

                  <button
                    type="submit"
                    className=" text-white py-2 px-4 w-full h-10"
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
        // <div
        //   className="dialog-window"
        //   style={{
        //     boxSizing: "border-box",
        //     background: "#ffffff",
        //     borderRadius: "12px",
        //     width: "658px",
        //     height: "583px",
        //     position: "relative",
        //     boxShadow:
        //       "var(--elevation-level-4-box-shadow, 0px 20px 50px 0px rgba(18, 27, 33, 0.2))",
        //     overflow: "hidden",
        //   }}
        // >
        //   <div
        //     className="header"
        //     style={{
        //       width: "658px",
        //       height: "48px",
        //       position: "absolute",
        //       left: "0px",
        //       top: "0px",
        //       overflow: "hidden",
        //     }}
        //   >
        //     <div
        //       className="user-name"
        //       style={{
        //         color: "var(--neutral-600, #475569)",
        //         textAlign: "left",
        //         font: 'var(--body-text-sm-font-semibold, 600 14px/20px "Inter", sans-serif)',
        //         position: "absolute",
        //         left: "32px",
        //         top: "14px",
        //       }}
        //     ></div>

        //     <div
        //       className="button"
        //       style={{
        //         borderRadius: "8px",
        //         padding: "6px 8px 6px 8px",
        //         display: "flex",
        //         flexDirection: "row",
        //         gap: "8px",
        //         alignItems: "center",
        //         justifyContent: "center",
        //         height: "36px",
        //         position: "absolute",
        //         right: "12px",
        //         top: "calc(50% - 18px)",
        //         overflow: "hidden",
        //       }}
        //     >
        //       <svg
        //         className="icon"
        //         width="20"
        //         height="20"
        //         viewBox="0 0 20 20"
        //         fill="none"
        //         xmlns="http://www.w3.org/2000/svg"
        //         style={{
        //           flexShrink: "0",
        //           position: "relative",
        //           overflow: "visible",
        //         }}
        //       >
        //         <path
        //           fillRule="evenodd"
        //           clipRule="evenodd"
        //           d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
        //           fill="#64748B"
        //         />
        //       </svg>
        //     </div>
        //   </div>
        // </div>
      )}
    </div>
  );
}

export { DeliveryByCustomerModal };
