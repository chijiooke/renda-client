import React, { useState } from "react";

function SuccesAlert() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Send</button>

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
                <div className="inline-flex flex-col space-y-8 items-center  bg-white shadow rounded-xl w-full h-full">
                  <div className="inline-flex space-x-16 items-center justify-end py-1.5 px-4 w-full h-12">
                    <p className="text-sm font-semibold leading-tight text-gray-600"></p>
                    <div className="flex items-center justify-center h-full px-2 py-1.5 rounded-lg">
                      <div className="inline-flex  items-center justify-end pr-3">
                        <p className="text-sm font-semibold leading-tight "></p>
                        <div className="flex text-black items-center justify-end border h-full py-1.5 rounded-lg">
                          <button onClick={closeModal}>X</button>
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
                      <div
                        className="relative"
                        style={{ width: 271, height: 124 }}
                      >
                        {/* <p className="w-48 absolute inset-x-0 top-0 mx-auto text-lg font-semibold leading-normal text-center">
                          Are you sure you want to delete?
                        </p>
                      </div>
                      <div className="flex justify-between py-2">
                        <button className="inline-flex space-x-1 items-center justify-center w-1/2 h-12 px-3 bg-blue-900 shadow rounded-md text-white text-sm font-semibold leading-none">
                          Yes
                        </button>
                        <button className="inline-flex space-x-1 items-center justify-center w-1/2 h-12 px-3  shadow border rounded-md border-blue-900 text-blue-900 text-sm font-semibold leading-none">
                          No
                        </button> */}
                        <div
                          className="relative"
                          style={{ width: 431, height: 378 }}
                        >
                          <div
                            className="inline-flex flex-col space-y-28 items-center justify-start bg-white shadow rounded-xl"
                            style={{ width: 431, height: 378 }}
                          >
                            <div
                              className="inline-flex space-x-80 items-center justify-end py-1.5 pl-8 pr-3"
                              style={{ width: 431, height: 48 }}
                            >
                              <p className="text-sm font-semibold leading-tight text-gray-600"></p>
                              <div className="flex items-center justify-center h-full px-2 py-1.5 rounded-lg">
                                <img
                                  className="flex-1 h-5/6 rounded-lg"
                                  src="https://via.placeholder.com/20x20"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="inline-flex flex-col space-y-4 items-start justify-end w-64 h-52 absolute"
                            style={{ left: 101, top: 95 }}
                          >
                            <img
                              className="w-24 h-24 rounded-lg"
                              src="https://via.placeholder.com/91.52803802490234x91.52803802490234"
                            />
                            <p className="text-2xl font-semibold leading-none text-green-700">
                              Successful
                            </p>
                            <p className="w-full text-sm font-medium leading-normal text-center text-black text-opacity-50">
                              Your inbound request has been created. <br />
                              Please check your email.
                            </p>
                          </div>
                        </div>
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
}

export { SuccesAlert };
