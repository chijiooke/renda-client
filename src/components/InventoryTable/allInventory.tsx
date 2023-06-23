import { useRouter } from "next/router";
import { useState } from "react";
import { TableDetails } from "./table details";

function AllInventoryTable() {
  const [forms, setForms] = useState([{ id: 1 }]);
  const [showUploadButton, setShowUploadButton] = useState(true);
  const router = useRouter();

  const handleAddForm = () => {
    const newForm = { id: forms.length + 1 };
    setForms((prevForms) => [...prevForms, newForm]);
    setShowUploadButton(false);
  };

  const handleRemoveForm = (idToRemove: number) => {
    if (forms.length === 1) {
      return; // Prevent deleting the last form
    }

    setForms((prevForms) => prevForms.filter((form) => form.id !== idToRemove));
  };

  const handleProcessItemsClick2 = () => {
    setShowUploadButton(false);
  };

  const handleProcessItemsClick = () => {
    setForms([{ id: 1 }]);
    setShowUploadButton(true);
  };

  return (
    <>
      <div className="position-relative object-contain">
        <div>
          <TableDetails />
        </div>
        <div
          className="flex space-x-96 items-center justify-between bottom-0 m-4"
          style={{ height: 28 }}
        >
          <p className="opacity-50 text-xs font-medium text-black text-opacity-50">
            Showing 1{" "}
          </p>
          <div className="flex space-x-2.5 items-start justify-start">
            <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
              <p className="text-xs font-medium text-center text-gray-500">
                Previous
              </p>
            </div>
            <div
              style={{ backgroundColor: `#1B547F` }}
              className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5  rounded-sm"
            >
              <p className="text-xs font-medium text-center text-white">1</p>
            </div>
            <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
              <p className="text-xs font-medium text-center text-gray-500">2</p>
            </div>
            <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
              <p className="text-xs font-medium text-center text-gray-500">3</p>
            </div>
            <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
              <p className="text-xs font-medium text-center text-gray-500">
                Next
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { AllInventoryTable };
