import React, { useState, ChangeEvent, SetStateAction } from "react";
import { Button, Input } from "@/components";
import { AddIcon, CheckIcon, DeleteIcon } from "@/icons";
import classNames from "classnames";
import Router, { useRouter } from "next/router";
import { DashBoardRoutes } from "@/utils/routes";
import { UploadImageButton } from "../Button/uploadImageButton";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { StateReducerActions } from "@/types";
import { StoreState } from "@/store/types/store-state.types";
import { baseURL, imageURL } from "@/utils";
import { InventoryType } from "@/store/reducer";
import Select, { SelectProps, selectClasses } from "@mui/base/Select";
import Option, { optionClasses } from "@mui/base/Option";
import Popper from "@mui/base/Popper";
import { styled } from "@mui/system";

const CustomSelect = React.forwardRef(function CustomSelect<
  TValue extends {},
  Multiple extends boolean
>(
  props: SelectProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const slots: SelectProps<TValue, Multiple>["slots"] = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <Select {...props} ref={ref} slots={slots} />;
}) as <TValue extends {}, Multiple extends boolean>(
  props: SelectProps<TValue, Multiple> & React.RefAttributes<HTMLButtonElement>
) => JSX.Element;

const sizeOptions = ["cm", "kg", "grams", "ml", "litre", "meters", "inches"];

function AddForm() {
  const [forms, setForms] = useState([{ id: 1 }]);
  const [showUploadButton, setShowUploadButton] = useState(true);
  const [items, setItems] = useState<InventoryType[]>([]);
  const router = useRouter();
  const dispatch = useDispatch();

  // Button upload starts

  const updateItems = (item: InventoryType) => {
    const t = items;
    t.push(item);
    setItems(t);
    console.log(items);
  };
  // Implementation
  const handleProcessItemsClick = async () => {
    dispatch({
      type: StateReducerActions.SET_INVENTORY_ITEMS,
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
          <div className="grid grid-c-10 items-center uppercase  font-extrabold border-2 p-3 rounded-lg gap-2">
            <span className="text-center capitalize underline text-red-500">
              {/* <Button
                title="Delete all"
                size="sm"
                className="w-fit px-5 rounded-md bg-white border-white "
                variant="danger"
              /> */}
              Delete
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
            <TableData
              form={form}
              forms={forms}
              handleAdd={handleAddForm}
              handleRemove={handleRemoveForm}
              updateItems={updateItems}
            />
          ))}
          <div className="flex  w-full  justify-end">
            <div>
              <Button
                title="Process Item"
                handleClick={handleProcessItemsClick}
                size="sm"
                className=" rounded-[6px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const TableData = ({
  form,
  forms,
  handleAdd,
  handleRemove,
  updateItems,
}: {
  form: { id: number };
  forms: { id: number }[];
  handleAdd: () => void;
  handleRemove: (i: number) => void;
  updateItems: (item: InventoryType) => void;
}) => {
  const { user } = useSelector((state: StoreState) => state);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imgUrl, setImageUrl] = useState<string>("");
  const [sizeUnit, setSizeUnit] = useState<string>("");

  const divClassName = selectedImage
    ? "justify-start px-3 bg-white border rounded-md border-black border-opacity-25"
    : "flex justify-center items-center text-white px-3  border rounded-md border-black border-opacity-25";

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file || null);

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      axios
        .post(baseURL + "api/File/upload", formData)
        .then((response) => {
          const imageUrl = response.data;

          setImageUrl(imageUrl);
        })
        .catch((error) => {});
    }
  };

  const updateItem = () => {
    const itemName =
      (document.getElementById(`itemName-${form.id}`) as HTMLInputElement)
        ?.value || "";
    const quantity = parseInt(
      (document.getElementById(`quantity-${form.id}`) as HTMLInputElement)
        ?.value || "0"
    );
    const description =
      (document.getElementById(`description-${form.id}`) as HTMLInputElement)
        ?.value || "";
    const size =
      (document.getElementById(`size-${form.id}`) as HTMLInputElement)?.value ||
      "";
    const colour =
      (document.getElementById(`colour-${form.id}`) as HTMLInputElement)
        ?.value || "";
    const weight =
      (document.getElementById(`weight-${form.id}`) as HTMLInputElement)
        ?.value || "";
    // Update with the actual picture value
    const unitPrice = parseInt(
      (document.getElementById(`unitPrice-${form.id}`) as HTMLInputElement)
        ?.value || "0"
    );
    // Update with the actual customerBusinessId value
    const customerBusinessId = user?.customerId;

    const payload = {
      itemName,
      quantity,
      description,
      size: size + sizeUnit,
      weight,
      colour,
      picture: imageURL + imgUrl,
      unitPrice,
      customerBusinessId: customerBusinessId || "",
    };

    updateItems(payload);
    handleAdd();
  };

  return (
    <form key={form.id} className="grid grid-c-10 gap-2 my-6">
      <span className="flex items-center h-full justify-center w-full scale-125  gap-2">
        <div
          onClick={() =>
            form === forms[forms.length - 1] && imgUrl && updateItem()
          }
        >
          <AddIcon
            color={
              form === forms[forms.length - 1] && imgUrl ? "#008753" : "#000"
            }
          />
        </div>

        <div onClick={() => forms.length > 1 && handleRemove(form.id)}>
          <DeleteIcon />
        </div>
      </span>
      <Input id={`itemName-${form.id}`} placeholder="Item name" size="md" />
      <Input id={`quantity-${form.id}`} placeholder="Qty" size="md" />
      <Input
        id={`description-${form.id}`}
        placeholder="Brief description"
        size="md"
        className="col-span-2"
      />
      <div className="flex items-center">
        <Input id={`size-${form.id}`} placeholder="Size" size="md" />
        <CustomSelect onChange={(_, val) => setSizeUnit(String(val))}>
          {sizeOptions.map((v: string, idx: number) => (
            <StyledOption key={idx} value={v}>
              {v}
            </StyledOption>
          ))}
        </CustomSelect>
      </div>

      <Input id={`colour-${form.id}`} placeholder="Colour" size="md" />
      <Input id={`weight-${form.id}`} placeholder="Weight" size="md" />
      <Input id={`unitPrice-${form.id}`} placeholder="Unit price" size="md" />
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
        {selectedImage && <p>{selectedImage.name.substring(0, 7)}...</p>}
      </label>
    </form>
  );
};

export { AddForm };

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.775rem;
  box-sizing: border-box;
  // min-height: calc(0.2em + 1px);
  height: 48px;
  min-width: 65px;
  padding: 5px;
  border-radius: 6px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &.${selectClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }

  &.${selectClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 25px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.95)" : "rgba(0,0,0, 0.15)"
  };
  `
);

const StyledOption = styled(Option)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  min-width: 20px;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;
