

// import React, { useState } from "react";

// function MyModal() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>

//       {isOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             background: "rgba(0, 0, 0, 0.5)",
//             zIndex: 9999,
//           }}
//         >
//           <div
//             style={{
//               background: "#fff",
//               padding: "20px",
//               borderRadius: "4px",
//             }}
//           >
//             <div
//               className="relative flex "
//               style={{ width: "400px", height: "60vh" }}
//             >
//               <div
//                 className="inline-flex  items-center justify-end pr-3"
//                 style={{ width: 706, height: 48 }}
//               >
//                 <p className="text-sm font-semibold leading-tight text-gray-600"></p>
//                 <div className="flex items-center justify-center border h-full py-1.5 rounded-lg">
//                   <button onClick={closeModal}>X</button>
//                 </div>
//               </div>
//               <div
//                 className="relative w-full h-full"
//                 style={{ width: "400px", height: "60vh" }}
//               >
//                 <div className="inline-flex flex-col space-y-10 gap-5 items-center justify-start rounded-xl w-full max-w-md mx-auto">
//                   <div className="inline-flex space-x-4 items-center justify-end py-2 pl-4 pr-3 w-full">
//                     <p className="text-sm font-semibold leading-tight text-gray-600"></p>
//                   </div>
//                   <div className="overflow-y-auto  p-4">
//                     <div className="flex flex-col space-y-4 items-start justify-end">
//                       <p className="w-full text-lg font-semibold leading-7">
//                         Confirm the storage facility you are adding inventory to
//                       </p>
//                       <div className="inline-flex space-x-4 space-y-4 items-center justify-end">
//                         <input
//                           type="radio"
//                           className="w-6 h-6 border-2 rounded-full border-black"
//                           id="facility1"
//                           name="storageFacility"
//                         />
//                         <label
//                           htmlFor="facility1"
//                           className="text-sm font-medium leading-7 text-center"
//                         >
//                           Omo-Onile Storage Facility
//                         </label>
//                       </div>
//                       <div className="inline-flex space-x-4 space-y-4 items-center justify-end">
//                         <input
//                           type="radio"
//                           className="w-6 h-6 border-2 rounded-full border-black"
//                           id="facility2"
//                           name="storageFacility"
//                         />
//                         <label
//                           htmlFor="facility2"
//                           className="text-sm font-medium leading-7 text-center"
//                         >
//                           Lagos Island Storage Facility
//                         </label>
//                       </div>
//                       <div className="inline-flex space-x-4 items-center justify-end">
//                         <input
//                           type="radio"
//                           className="w-6 h-6 border-2 rounded-full border-black"
//                           id="facility3"
//                           name="storageFacility"
//                         />
//                         <label
//                           htmlFor="facility3"
//                           className="text-sm font-medium leading-7 text-center"
//                         >
//                           Surulere Storage Facility
//                         </label>
//                       </div>
//                       <div className="inline-flex space-x-4 items-center justify-end">
//                         <input
//                           type="radio"
//                           className="w-6 h-6 border-2 rounded-full border-black"
//                           id="facility4"
//                           name="storageFacility"
//                         />
//                         <label
//                           htmlFor="facility4"
//                           className="text-sm font-medium leading-7 text-center"
//                         >
//                           Badagry Storage Facility
//                         </label>
//                       </div>
//                       <div className="inline-flex space-x-4 items-center justify-end">
//                         <input
//                           type="radio"
//                           className="w-6 h-6 border-2 rounded-full border-black"
//                           id="facility5"
//                           name="storageFacility"
//                         />
//                         <label
//                           htmlFor="facility5"
//                           className="text-sm font-medium leading-7 text-center"
//                         >
//                           Badagry Storage Facility
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute flex fixed bottom-4 bottom-0">
//                     <div
//                       className="inline-flex cursor-pointer w-full space-x-1.5 items-center justify-center py-2.5 bg-blue-900 shadow rounded-md"
//                       style={{ height: 48, width: 400 }}
//                       onClick={closeModal}
//                     >
//                       <p className="text-sm font-semibold leading-tight text-white">
//                         <button onClick={closeModal}>Submit</button>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export { MyModal };

import React, { useState } from "react";
import { ConfirmModal, HowItemsToBeDeliveredHandler, MyModal } from "@/modals";

interface MyModalProps {
  onClose: () => void;
}

const StorageSelect: React.FC<MyModalProps> = ({ onClose }) => {
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
            <div className="relative flex " style={{ }}>
              <div
                className="relative w-full h-full"
                style={{ padding: "auto" }}
              >
                <div className="flex flex-col space-y-10 gap-5 items-center justify-center  text-black rounded-lg w-full max-w-md mx-auto">
                  <div className="overflow-y-auto">
                    <div className="flex items-center justify-end rounded-lg">
                      <div className="flex  items-center justify-end pr-3">
                        <div className="flex text-black items-center justify-end border h-full py-1.5 rounded-lg">
                          <button onClick={closeModal}>X</button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="flex flex-col space-y-4  items-start">
                        <p className="text-lg font-semibold pb-4 leading-7">
                          Confirm the storage facility <br /> you are adding
                          inventory to
                        </p>
                        <div className="inline-flex py-3 gap-2 py-3 gap-2 space-x-4 space-y-4 items-center justify-end">
                          <input
                            type="radio"
                            className="w-6 h-6 border-2 rounded-full border-black"
                            id="facility1"
                            name="storageFacility"
                          />
                          <label
                            htmlFor="facility1"
                            className="text-sm font-medium leading-7 text-center"
                          >
                            Omo-Onile Storage Facility
                          </label>
                        </div>
                        <div className="inline-flex py-3 gap-2 space-x-4 space-y-4 items-center justify-end">
                          <input
                            type="radio"
                            className="w-6 h-6 border-2 rounded-full border-black"
                            id="facility2"
                            name="storageFacility"
                          />
                          <label
                            htmlFor="facility2"
                            className="text-sm font-medium leading-7 text-center"
                          >
                            Lagos Island Storage Facility
                          </label>
                        </div>
                        <div className="inline-flex py-3 gap-2 space-x-4 items-center justify-end">
                          <input
                            type="radio"
                            className="w-6 h-6 border-2 rounded-full border-black"
                            id="facility3"
                            name="storageFacility"
                          />
                          <label
                            htmlFor="facility3"
                            className="text-sm font-medium leading-7 text-center"
                          >
                            Surulere Storage Facility
                          </label>
                        </div>
                        <div className="inline-flex py-3 gap-2 space-x-4 items-center justify-end">
                          <input
                            type="radio"
                            className="w-6 h-6 border-2 rounded-full border-black"
                            id="facility4"
                            name="storageFacility"
                          />
                          <label
                            htmlFor="facility4"
                            className="text-sm font-medium leading-7 text-center"
                          >
                            Badagry Storage Facility
                          </label>
                        </div>
                        <div className="inline-flex py-3 gap-2 space-x-4 items-center justify-end">
                          <input
                            type="radio"
                            className="w-6 h-6 border-2 rounded-full border-black"
                            id="facility5"
                            name="storageFacility"
                          />
                          <label
                            htmlFor="facility5"
                            className="text-sm font-medium leading-7 text-center"
                          >
                            Badagry Storage Facility
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex  bottom-4 ">
                    <div
                      className="inline-flex py-3 gap-2 cursor-pointer w-full space-x-1.5 items-center justify-center py-2.5 shadow rounded-md"
                      style={{
                        height: 48,
                        width: 200,
                        backgroundColor: `#1B547F`,
                      }}
                    >
                      {/* <p className="text-sm font-semibold  text-white">
                        <button onClick={closeModal}>Submit</button>
                      </p> */}
                      <HowItemsToBeDeliveredHandler />
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

export { StorageSelect };
