
import React, { useState } from "react";
import { Button, Input } from "@/components";
import { AddIcon, CheckIcon, DeleteIcon } from "@/icons";

// function AddForm() {
//   const [formCount, setFormCount] = useState(1);

//   const handleAddForm = () => {
//     setFormCount((prevCount) => prevCount + 1);
//   };

//   const handleRemoveForm = (indexToRemove: number) => {
//     setFormCount((prevCount) => prevCount - 1);
//     // Optionally, you can update the formCount state to maintain the count correctly
//   };

//   return (
//     <div>
//       {[...Array(formCount)].map((_, index) => (
//         <form key={index} className="flex gap-2 text-center m-5">
//           <div className="flex items-center justify-center flex-1 bg-white">
//             {index === 0 ? (
//               <button type="button" onClick={handleAddForm}>
//                 <AddIcon />
//               </button>
//             ) : null}
//           </div>
//           <div className="flex items-center justify-center flex-1 bg-white">
//             {index === 0 ? null : (
//               <button type="button" onClick={() => handleRemoveForm(index)}>
//                 <DeleteIcon />
//               </button>
//             )}
//           </div>
//           <Input placeholder="Item name" size="md" />
//           <Input placeholder="Qty" size="md" />
//           <Input placeholder="Brief description" size="md" />
//           <Input placeholder="Dimension" size="md" />
//           <Input placeholder="Colour" size="md" />
//           <Input placeholder="Weight" size="md" />
//           <Input placeholder="Unit price" size="md" />
//           <Input placeholder="Image" size="md" />
//           <div className="justify-start w-28 px-3 bg-blue-900 border rounded-md border-black border-opacity-25">
//             <button
//               type="submit"
//               className="text-center p-6 leading-3 text-white px-3"
//             >
//               Upload
//             </button>
//           </div>
//         </form>
//       ))}
//     </div>
//   );
// }

function AddForm() {
  const [formCount, setFormCount] = useState(1);

  const handleAddForm = () => {
    setFormCount((prevCount) => prevCount + 1);
  };

  const handleRemoveForm = (indexToRemove: number) => {
    if (formCount === 1) {
      return; // Prevent deleting the last form
    }

    setFormCount((prevCount) => prevCount - 1);
    // Optionally, you can update the formCount state to maintain the count correctly
  };

  return (
    <div>
      {[...Array(formCount)].map((_, index) => (
        <form key={index} className="flex gap-2 text-center m-5">
          <div className="flex items-center justify-center flex-1 bg-white">
            {index === formCount - 1 ? (
              <button type="button" onClick={handleAddForm}>
                <AddIcon />
              </button>
            ) : null}
          </div>
          <div className="flex items-center justify-center flex-1 bg-white">
            {formCount > 1 && (
              <button type="button" onClick={() => handleRemoveForm(index)}>
                <DeleteIcon />
              </button>
            )}
          </div>
          <Input placeholder="Item name" size="md" />
            <Input placeholder="Qty" size="md" />
            <Input placeholder="Brief description" size="md" />
            <Input placeholder="Dimension" size="md" />
            <Input placeholder="Colour" size="md" />
            <Input placeholder="Weight" size="md" />
            <Input placeholder="Unit price" size="md" />
            <Input placeholder="Image" size="md" />
          <div className="justify-start w-28 px-3 bg-blue-900 border rounded-md border-black border-opacity-25">
            <button
              type="submit"
              className="text-center p-6 leading-3 text-white px-3"
            >
              Upload
            </button>
          </div>
        </form>
      ))}
    </div>
  );
}


export {AddForm};