import React, { useState } from "react";
import { Button, Input } from "@/components";
import { AddIcon, CheckIcon, DeleteIcon } from "@/icons";
import classNames from "classnames";
import Router, { useRouter } from "next/router";
import { DashBoardRoutes } from "@/utils/routes";
import { UploadImageButton } from "../Button/uploadImageButton";

function AddForm() {
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
          <table className="w-full bg-white  text-center">
            <thead>
              <tr className="rounded-sm border-2 text-center">
                {!showUploadButton && (
                  <th className="">
                    <div
                      className="w-100 rounded-[0.75rem] text-white border-primary cursor-pointer border-2 p-3 bg-red-500 rounded-lg h-12 flex items-center justify-center"
                      onClick={handleProcessItemsClick}
                    >
                      <p className="font-bold">Delete All</p>
                    </div>
                  </th>
                )}

                <th className="py-4 ">ITEM NAME</th>
                <th>QTY</th>
                <th>BRIEF DESCRIPTION</th>
                <th>DIMENSION</th>
                <th>COLOUR</th>
                <th>WEIGHT</th>
                <th>UNIT PRICE</th>
                <th>IMAGE</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          {forms.map((form) => (
            <form key={form.id} className="flex gap-2 text-center m-5">
              <div className="flex items-center justify-center flex-1 bg-white">
                {form === forms[forms.length - 1] && (
                  <button type="button" onClick={handleAddForm}>
                    <AddIcon />
                  </button>
                )}
              </div>
              <div className="flex items-center justify-center flex-1 bg-white">
                {forms.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveForm(form.id)}
                  >
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
              <UploadImageButton />
              {/* {showUploadButton && (
                <div className="justify-start w-28 px-3 bg-blue-900 border rounded-md border-black border-opacity-25">
                  <button
                    type="submit"
                    className="text-center p-6 leading-3 text-white px-3"
                  >
                    Upload
                  </button>
                </div>
              )} */}
            </form>
          ))}
        </div>
        <div>
          {
            <div className="flex justify-end bottom-4 right-4">
              <button
                className="flex items-center justify-center w-36 h-10 px-3 py-1.5 bg-black bg-opacity-50 rounded-md"
                onClick={() =>
                  router.push(DashBoardRoutes.INVENTORY_CONFIRM_INVENTORY)
                }
              >
                <p className="text-xs font-semibold leading-none text-white">
                  Process Items
                </p>
              </button>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export { AddForm };
