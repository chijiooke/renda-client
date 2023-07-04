import { useSelector } from "react-redux";

import { formatCurrency } from "@/utils";
import { StoreState } from "@/store/types/store-state.types";

type Item = {
  id: number;
  itemName: string;
  quantity: number;
  description: string;
  weight: string;
  size: string;
  colour: string;
  picture: string;
  unitPrice: number;
  customerBusinessId: string;
};

function SomeComponent() {
  const { inventoryItems } = useSelector((state: StoreState) => state);
  return (
    <div>
      {inventoryItems.map((item, idx) => (
        <div
          key={idx}
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
            title="weight"
            className="flex items-center justify-start  px-3 py-1.5  "
          >
            <p className="">{item.weight}</p>
          </div>
          <div
            title="unitPrice"
            className="flex items-center justify-start  px-3 py-1.5  "
          >
            <p className="">{formatCurrency(item.unitPrice)}</p>
          </div>
          <div title="description" className="w-44  leading-none">
            <p>{item.description}</p>
          </div>
          <p className="picture">{item.picture?.substring(0, 20)}..</p>
        </div>
      ))}
      {/* Content of your component */}
      {/* When this div is clicked, the handleDivClick function is triggered */}
      {/* and it opens the modal by setting isOpen to true */}
      {/* You can add any content or elements you want here */}
    </div>
  );
}

export { SomeComponent };
