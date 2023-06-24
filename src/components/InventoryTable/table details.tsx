import React, { useRef, useState } from "react";
import { TableRow, inventoryDataType } from "./inventoryTableRow";
import { useRouter } from "next/router";

const TableDetails = () => {
  const router = useRouter();
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  // const [isAllItemsSelected, setIsAllItemsSelected] = useState<boolean>(false);
  const [selectedItems, setselectedItems] = useState<inventoryDataType[]>([]);
  const inventoryData: inventoryDataType[] = [
    {
      title: "mac Book Pro",
      SKUId: 12345,
      facilityID: 12345,
      position: "Upper Shelf",
      facilityName: "Badagry, lagos",
      quantity: 20,
      unitPrice: 100,
      dmgItems: 10,
      description: "Lorem ipsum dolor emet",
      color: "grey",
      weight: "100 pounds",
      img: "string",
    },
    {
      title: "Samsung Z Book ",
      SKUId: 12346,
      facilityID: 12346,
      position: "Upper Shelf",
      facilityName: "Badagry, lagos",
      quantity: 50,
      unitPrice: 100,
      dmgItems: 10,
      description: "Lorem ipsum dolor emet",
      color: "grey",
      weight: "100 pounds",
      img: "string",
    },
  ];

  // let isAllItemsSelected = false;
  const isAllItemsSelected = useRef(false);

  return (
    <div className="container mx-auto pt-4">
      <div
        className="bg-white pl-10 h-20 grid grid-cols-8 border rounded-sm border-black border-opacity-25"
        style={{}}
      >
        <div className="flex items-center p-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
            checked={isAllItemsSelected.current}
            onClick={() => {
              isAllItemsSelected.current = !isAllItemsSelected.current;
              setselectedItems(isAllItemsSelected.current ? inventoryData : []);
            }}
          />
        </div>
        <div className="pl-0 flex items-center">
          <p className=" leading-none font-semibold uppercase">SKU ID</p>
        </div>
        <div className="pl-0 flex items-center">
          <p className="font-semibold uppercase">Item name</p>
        </div>
        <div className=" flex items-center">
          <p className=" font-semibold uppercase">FACILITY ID</p>
        </div>
        <div className=" flex items-center">
          <p className=" font-semibold uppercase">Facility NAME</p>
        </div>
        <div className=" flex items-center">
          <p className=" font-semibold uppercase">QTY IN STOCK</p>
        </div>
        <div className=" flex items-center">
          <p className=" font-semibold uppercase">Unit price</p>
        </div>
        <div className="p-2 flex items-center">
          <p className=" font-semibold uppercase">ACTION</p>
        </div>
      </div>
      {!!inventoryData &&
        inventoryData.map((rowData) => (
          <TableRow
            isAllItemsSelected={isAllItemsSelected.current}
            data={rowData}
            isExpanded={expandedItem === rowData.SKUId}
            collapseRow={() =>
              !!expandedItem
                ? setExpandedItem(null)
                : setExpandedItem(rowData.SKUId)
            }
            selectedItems={selectedItems.map((items) => items.SKUId)}
            selectItem={(item: inventoryDataType) => {
              if (
                selectedItems.map((items) => items.SKUId).includes(item.SKUId)
              ) {
                setselectedItems([
                  ...selectedItems.filter((it) => it.SKUId !== item.SKUId),
                ]);
              } else {
                setselectedItems([...selectedItems, item]);
              }
            }}
          />
        ))}
    </div>
  );
};

export { TableDetails };
