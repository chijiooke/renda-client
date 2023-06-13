// import React, { useState } from "react";
// import { ConfirmModal } from "./confirmStorage";
// import { Input } from "@/components";

// interface MyModalProps {
//   onClose: () => void;
// }

// const MyModal: React.FC<MyModalProps> = ({ onClose }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Edit</button>

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
//               style={{ width: "400px", height: "75vh" }}
//             >
//               <div
//                 className="inline-flex  items-center justify-end pr-3"
//                 style={{ width: 706, height: 48 }}
//               >
//                 <p className="text-lg font-semibold  text-black"></p>
//                 <div className="flex items-center text-black justify-end border h-full py-1.5 rounded-lg">
//                   <button onClick={closeModal}>X</button>
//                 </div>
//               </div>

//               <div className="absolute flex-col ">
//                 <div className="flex-col w-full">
//                   <Input className="mt-1" placeholder="Item name" size="md" />
//                   <Input className="mt-1" placeholder="Qty" size="md" />
//                   <Input
//                     className="mt-1"
//                     placeholder="Brief description"
//                     size="md"
//                   />
//                   <Input className="mt-1" placeholder="Dimension" size="md" />
//                   <Input className="mt-1" placeholder="Colour" size="md" />
//                   <Input className="mt-1" placeholder="Weight" size="md" />
//                   <Input className="mt-1" placeholder="Unit price" size="md" />
//                   <Input className="mt-1" placeholder="Image" size="md" />
//                   <div className="justify-start mt-1 w-28 px-3 bg-blue-900 border rounded-md border-black border-opacity-25">
//                     <button
//                       type="submit"
//                       className="text-center p-6 leading-3 text-white px-3"
//                     >
//                       Upload
//                     </button>
//                   </div>
//                 </div>
//                 <div
//                   className="inline-flex cursor-pointer w-full space-x-1.5 items-center justify-center py-2.5 bg-blue-900 shadow rounded-md"
//                   style={{ height: 48, width: 400 }}
//                 >
//                   <p className="text-sm font-semibold leading-tight text-white">
//                     <a href="">
//                       <button onClick={closeModal}>Submit</button>
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// export { MyModal };
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
              padding: "50px",
              borderRadius: "4px",
            }}
          >
            <div
              className="relative flex "
              style={{ width: "400px", height: "400px" }}
            >
              <div
                className="inline-flex  items-center justify-end pr-3"
                style={{  height: 48 }}
              >
                <p className="text-lg font-semibold  text-black"></p>
                <div className="flex items-center text-black justify-end border h-full py-1.5 rounded-lg">
                  <button onClick={closeModal}>X</button>
                </div>
              </div>

              <div className="absolute flex-col ">
                <div className="grid grid-cols-2 ">
                  <label htmlFor="itemName">Item Name</label>
                  <input
                    id="itemName"
                    className="mt-1 border h-10 rounded-lg"
                  />

                  <label htmlFor="qty">Qty</label>
                  <input id="qty" className="mt-2 border h-10 rounded-lg" />

                  <label htmlFor="description">Brief Description</label>
                  <textarea
                    id="description"
                    className="mt-1 border h-60 rounded-lg"
                  />

                  <label htmlFor="dimension">Dimension</label>
                  <input
                    id="dimension"
                    className="mt-1 border h-10 rounded-lg"
                  />

                  <label htmlFor="colour">Colour</label>
                  <input id="colour" className="mt-1 border h-10 rounded-lg" />

                  <label htmlFor="weight">Weight</label>
                  <input id="weight" className="mt-1 border h-10 rounded-lg" />

                  <label htmlFor="unitPrice">Unit Price</label>
                  <input
                    id="unitPrice"
                    className="mt-1 border h-10 rounded-lg"
                  />

                  <label htmlFor="image">Image</label>
                  <input id="image" className="mt-1 border h-10 rounded-lg" />
                </div>

                <div
                  className="inline-flex cursor-pointer w-full space-x-1.5 items-center justify-center py-2.5 bg-blue-900 shadow rounded-md"
                  style={{ height: 48, width: 400 }}
                >
                  <p className="text-sm font-semibold leading-tight text-white">
                    <a href="">
                      <button onClick={closeModal}>Submit</button>
                    </a>
                  </p>
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
