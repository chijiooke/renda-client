import React, { useState, ChangeEvent } from "react";
import { Button, Input } from "@/components";
import { AddIcon, CheckIcon, DeleteIcon } from "@/icons";
import classNames from "classnames";
import Router, { useRouter } from "next/router";
import { DashBoardRoutes } from "@/utils/routes";
import { UploadImageButton } from "../Button/uploadImageButton";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { OnboardingAction } from "@/types";
import { InventoryType, StoreState } from "@/store/reducer";
function AddForm() {
  const { inventoryItems, user } = useSelector((state: StoreState) => state);
  const [forms, setForms] = useState([{ id: 1 }]);
  const [showUploadButton, setShowUploadButton] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  // Button upload starts
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file || null);
    // Perform additional logic for image upload, such as sending it to the server
  };

  const divClassName = selectedImage
    ? "justify-start  px-3 bg-white border rounded-md border-black border-opacity-25"
    : "flex justify-center items-center text-white px-3  border rounded-md border-black border-opacity-25";

  // Implementation
  const handleProcessItemsClick = async () => {
    const items = [] as InventoryType[];
    try {
      for (const form of forms) {
        const itemName =
          (document.getElementById(`itemName-${form.id}`) as HTMLInputElement)
            ?.value || "";
        const quantity = parseInt(
          (document.getElementById(`quantity-${form.id}`) as HTMLInputElement)
            ?.value || "0"
        );
        const description =
          (
            document.getElementById(
              `description-${form.id}`
            ) as HTMLInputElement
          )?.value || "";
        const size =
          (document.getElementById(`size-${form.id}`) as HTMLInputElement)
            ?.value || "";
        const colour =
          (document.getElementById(`colour-${form.id}`) as HTMLInputElement)
            ?.value || "";
        const weight =
          (document.getElementById(`weight-${form.id}`) as HTMLInputElement)
            ?.value || "";
        // Update with the actual picture value
        const picture = "picture";
        const unitPrice = parseInt(
          (document.getElementById(`unitPrice-${form.id}`) as HTMLInputElement)
            ?.value || "0"
        );
        // Update with the actual customerBusinessId value
        const customerBusinessId = user.customerId;

        const payload = {
          itemName,
          quantity,
          description,
          size,
          weight,
          colour,
          picture,
          unitPrice,
          customerBusinessId,
        };
        items.push(payload);
        console.log(payload);
        // Perform any additional logic or update UI based on the response
      }

      // Redirect to the desired page after processing all forms
    } catch (error) {
      console.error("Error while submitting:", error);
      // Handle the error appropriately, display a message, etc.
    }

    dispatch({
      type: OnboardingAction.SET_INVENTORY_ITEMS,
      payload: items,
    });
    router.push(DashBoardRoutes.INVENTORY_CONFIRM_INVENTORY);
  };

  // Button upload ends

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

  const handleProcessItemsClick3 = () => {
    setForms([{ id: 1 }]);
    setShowUploadButton(true);
  };

  return (
    <>
      <div className="position-relative object-contain">
        <div>
          {/* <table className="w-full bg-white  text-center">
            <thead>
              <tr className="rounded-sm border-2 text-center">
                {!showUploadButton && (
                  <th className="">
                    <div
                      className="w-100 rounded-[0.75rem] text-white border-primary cursor-pointer border-2 p-3 bg-red-500 rounded-lg h-12 flex items-center justify-center"
                      onClick={handleProcessItemsClick3}
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
          </table> */}
          <div className="grid grid-c-10 items-center uppercase  font-extrabold border-2 p-3 rounded-lg gap-2">
            <span>
              <Button
                title="Delete all"
                size="sm"
                className="w-fit bg-red-600 px-5 rounded-md"
                variant="danger"
              />
            </span>

            <p>Item name</p>
            <p>Qty</p>
            <p className="col-span-2">BRIEF DESCRIPTION</p>
            <p>dimension</p>
            <p>Colour</p>
            <p>weight</p>
            <p>Unit Price</p>
            <p>IMAGE</p>
          </div>
          {forms.map((form) => (
            <form key={form.id} className="grid grid-c-10 gap-2 my-6">
              <span className="flex items-center  justify-center w-full scale-125  gap-2">
                <div
                  onClick={() =>
                    form === forms[forms.length - 1] && handleAddForm()
                  }
                >
                  <AddIcon
                    color={
                      form === forms[forms.length - 1] ? "#008753" : "#000"
                    }
                  />
                </div>

                <div
                  onClick={() => forms.length > 1 && handleRemoveForm(form.id)}
                >
                  <DeleteIcon />
                </div>
              </span>
              <Input
                id={`itemName-${form.id}`}
                placeholder="Item name"
                size="md"
              />
              <Input id={`quantity-${form.id}`} placeholder="Qty" size="md" />
              <Input
                id={`description-${form.id}`}
                placeholder="Brief description"
                size="md"
                className="col-span-2"
              />
              <Input id={`size-${form.id}`} placeholder="Dimension" size="md" />
              <Input id={`colour-${form.id}`} placeholder="Colour" size="md" />
              <Input id={`weight-${form.id}`} placeholder="Weight" size="md" />
              <Input
                id={`unitPrice-${form.id}`}
                placeholder="Unit price"
                size="md"
              />
              <label
                htmlFor={`upload-input-${form.id}`}
                className={divClassName}
                style={{ backgroundColor: `#1B547F` }}
              >
                Upload
                <input
                  id={`upload-input-${form.id}`}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {selectedImage && <p>{selectedImage.name}</p>}
              </label>
            </form>
          ))}
        </div>
        <div>
          {
            <div className="flex justify-end bottom-4 right-4">
              <button
                className="flex items-center justify-center w-36 h-10 px-3 py-1.5 bg-black bg-opacity-50 rounded-md"
                onClick={handleProcessItemsClick}
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
