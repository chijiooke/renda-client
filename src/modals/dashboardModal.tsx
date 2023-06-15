// import React, { useState } from "react";
// import { Input } from "@/components";

// interface MyModalProps {
//   onClose?: () => void;
// }

// const MyModal: React.FC<MyModalProps> = ({ onClose }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return isOpen ? (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "rgba(0, 0, 0, 0.5)",
//         zIndex: 9999,
//       }}
//     >
//       <div className="relative w-full h-full p-4 rounded-lg" style={{ width: "600px", height:"90vh" }}>
//         <div
//           className="relative flex "
//           style={{ width: "400px" }}
//         >
//           <div
//             className="inline-flex bg-white items-center justify-end p-10 rounded-lg"
//             style={{ }}
//           >
//             <div className="flex  flex-col relative" style={{  }}>
//               <div
//                 className="flex  items-center justify-end pr-3"
//                 style={{ height: 28 }}
//               >
//                 <div className="flex justify-end items-center text-black  border rounded-lg">
//                   <button onClick={closeModal}>X</button>
//                 </div>
//               </div>
//               <div>
//                 <p
//                   style={{ color: `#1B547F` }}
//                   className=" font-semibold leading-normal text-center py-4 "
//                 >
//                   Edit Inventory details
//                 </p>
//               </div>
//               <div className=" flex-col px-4">
//                 <div className="">
//                   <div className="grid grid-cols-2 py-2">
//                     <label htmlFor="itemName">Item Name</label>
//                     <input
//                       id="itemName"
//                       className="mt-1 border h-10 rounded-lg"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 py-2">
//                     <label htmlFor="qty">Qty</label>
//                     <input id="qty" className="mt-2 border h-10 rounded-lg" />
//                   </div>
//                   <div className="grid grid-cols-2 py-2">
//                     <label htmlFor="description">Brief Description</label>
//                     <textarea
//                       id="description"
//                       className="mt-1 border h-60 rounded-lg"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 py-2">
//                     <label htmlFor="dimension">Dimension</label>
//                     <input
//                       id="dimension"
//                       className="mt-1 border h-10 rounded-lg"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 py-2">
//                     <label htmlFor="colour">Colour</label>
//                     <input
//                       id="colour"
//                       className="mt-1 border h-10 rounded-lg"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 py-2">
//                     <label htmlFor="weight">Weight</label>
//                     <input
//                       id="weight"
//                       className="mt-1 border h-10 rounded-lg"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 py-2">
//                     <label htmlFor="unitPrice">Unit Price</label>
//                     <input
//                       id="unitPrice"
//                       className="mt-1 border h-10 rounded-lg"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 py-2">
//                     <label htmlFor="image">Image</label>
//                     <input
//                       id="image"
//                       type="file"
//                       className="mt-1 border h-10 rounded-lg"
//                     />
//                   </div>
//                 </div>

//                 <div className="">
//                   <button
//                     className="text-white w-full space-x-1.5 items-center justify-center py-2.5 rounded-md"
//                     style={{ backgroundColor: `#1B547F` }}
//                     onClick={closeModal}
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* <div
//               className="inline-flex cursor-pointer w-full space-x-1.5 items-center justify-center py-2.5 bg-blue-900 shadow rounded-md"
//               style={{ height: 48, width: 400 }}
//             >
//               <p className="text-sm font-semibold leading-tight text-white">
//                 <a href="">
//                   <button onClick={closeModal}>Submit</button>
//                 </a>
//               </p>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : null;
// };

// export { MyModal };
import React, { useState } from "react";
import { Input } from "@/components";

interface MyModalProps {
  onClose?: () => void;
  item: {
    itemName: string;
    quantity: number;
    description: string;
    size: string;
    colour: string;
    picture: string;
    unitPrice: number;
    customerBusinessId: string;
  };
}

const MyModal: React.FC<MyModalProps> = ({ onClose, item }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return isOpen ? (
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
      <div className="relative w-full h-full p-4 rounded-lg" style={{ width: "600px", height:"90vh" }}>
        <div
          className="relative flex "
          style={{ width: "400px" }}
        >
          <div
            className="inline-flex bg-white items-center justify-end p-10 rounded-lg"
            style={{ }}
          >
            <div className="flex  flex-col relative" style={{  }}>
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
                      value={item.itemName}
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="qty">Qty</label>
                    <input
                      id="qty"
                      className="mt-2 border h-10 rounded-lg"
                      value={item.quantity.toString()}
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="description">Brief Description</label>
                    <textarea
                      id="description"
                      className="mt-1 border h-60 rounded-lg"
                      value={item.description}
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="dimension">Dimension</label>
                    <input
                      id="dimension"
                      className="mt-1 border h-10 rounded-lg"
                      value={item.size}
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="colour">Colour</label>
                    <input
                      id="colour"
                      className="mt-1 border h-10 rounded-lg"
                      value={item.colour}
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="weight">Weight</label>
                    <input
                      id="weight"
                      className="mt-1 border h-10 rounded-lg"
                      value={item.picture}
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="unitPrice">Unit Price</label>
                    <input
                      id="unitPrice"
                      className="mt-1 border h-10 rounded-lg"
                      value={item.unitPrice.toString()}
                    />
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <label htmlFor="image">Image</label>
                    <input
                      id="image"
                      type="file"
                      className="mt-1 border h-10 rounded-lg"
                      value={item.picture}
                    />
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
      </div>
    </div>
  ) : null;
};

export { MyModal };
