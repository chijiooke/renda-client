// import React, { useState } from "react";
// import { MyModal } from "./dashboardModal";


// function SomeComponent() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleDivClick = () => {
//     // Open the modal by setting isOpen to true
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     // Close the modal by setting isOpen to false
//     setIsOpen(false);
//   };

//   return (
//     <div onClick={handleDivClick}>
//       <div className="grid grid-cols-8 mt-2 justify-evenly p-5 bg-[#f9f9f9] border-1 border-[#bbbbbb] items-center cursor-pointer">
//         <div
//           title="itemName"
//           className="flex items-center justify-start w-36  px-3 py-1.5  "
//         >
//           <p className="">Mac Book </p>
//         </div>
//         <div
//           title="quantity"
//           className="flex items-center justify-start  px-3 py-1.5  "
//         >
//           <p className="">12</p>
//         </div>
//         <div
//           title="size"
//           className="flex items-center justify-start  px-3 py-1.5  "
//         >
//           <p className="">14cm</p>
//         </div>
//         <div
//           title="colour"
//           className="flex items-center justify-start  px-3 py-1.5  "
//         >
//           <p className="">Black</p>
//         </div>
//         <div
//           title="unitPrice"
//           className="flex items-center justify-start  px-3 py-1.5  "
//         >
//           <p className="">450,000</p>
//         </div>
//         <div title="description" className="w-44  leading-none">
//           <p>40,000</p>
//         </div>

//         <div
//           title="size"
//           className="flex items-center justify-start  px-3 py-1.5  "
//         >
//           <p className="">70kg</p>
//         </div>

//         <p className="picture">img001111.jpg</p>
//       </div>
//       {/* Content of your component */}
//       {/* When this div is clicked, the handleDivClick function is triggered */}
//       {/* and it opens the modal by setting isOpen to true */}
//       {/* You can add any content or elements you want here */}

//       {/* Render the MyModal component */}
//       {isOpen && <MyModal onClose={closeModal} />}
//     </div>
//   );
// }

// export {SomeComponent};
import React, { useState, useEffect } from "react";
import { MyModal } from "./dashboardModal";
import axios from "axios";

type Item = {
  id: number;
  itemName: string;
  quantity: number;
  description: string;
  size: string;
  colour: string;
  picture: string;
  unitPrice: number;
  customerBusinessId: string;
};


function SomeComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Fetch data from the endpoint when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://tradeplaorg-001-site9.gtempurl.com/api/InventoryUpload/customer-inventorItems/b3pile"
      );
      setItems(response.data);
    } catch (error) {
      console.error("Error:", error);
      // Handle the error appropriately, display a message, etc.
    }
  };

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
      {items.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-8 mt-2 justify-evenly p-5 bg-[#f9f9f9] border-1 border-[#bbbbbb] items-center cursor-pointer"
        >
          <div
            title="itemName"
            className="flex items-center justify-start w-36  px-3 py-1.5  "
          >
            <p className="">{item.itemName}</p>
          </div>
          <div
            title="quantity"
            className="flex items-center justify-start  px-3 py-1.5  "
          >
            <p className="">{item.quantity}</p>
          </div>
          <div
            title="size"
            className="flex items-center justify-start  px-3 py-1.5  "
          >
            <p className="">{item.size}</p>
          </div>
          <div
            title="colour"
            className="flex items-center justify-start  px-3 py-1.5  "
          >
            <p className="">{item.colour}</p>
          </div>
          <div
            title="size"
            className="flex items-center justify-start  px-3 py-1.5  "
          >
            <p className="">{item.size}</p>
          </div>
          <div
            title="unitPrice"
            className="flex items-center justify-start  px-3 py-1.5  "
          >
            <p className="">{item.unitPrice}</p>
          </div>
          <div title="description" className="w-44  leading-none">
            <p>{item.description}</p>
          </div>
          <p className="picture">{item.picture}</p>
        </div>
      ))}
      {/* Content of your component */}
      {/* When this div is clicked, the handleDivClick function is triggered */}
      {/* and it opens the modal by setting isOpen to true */}
      {/* You can add any content or elements you want here */}

      {/* Render the MyModal component */}
      {isOpen && (
        <MyModal
          onClose={closeModal}
          item={{
            itemName: "pen",
            quantity: 50,
            description: "pen bic",
            size: "",
            colour: "",
            picture: "",
            unitPrice: 0,
            customerBusinessId: "",
          }}
        />
      )}
    </div>
  );
}

export { SomeComponent };
