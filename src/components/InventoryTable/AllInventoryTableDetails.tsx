import { useEffect, useRef, useState } from "react";
import { baseURL } from "@/utils";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  InventoryDataType,
  InventoryItemType,
} from "@/_tabs/Inventory/types/inventory-data-type";
import { useRouter } from "next/router";
import { TableRow } from "./inventoryTableRow";
import { StoreState } from "@/store/types/store-state.types";
import { StateReducerActions } from "@/types";

const AllInventoryTableDetails = () => {
  const router = useRouter();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [selectedItems, setselectedItems] = useState<InventoryItemType[]>([]);
  const isAllItemsSelected = useRef(false);

  const { user } = useSelector((state: StoreState) => state);
  const dispatch = useDispatch();
  const [inventories, setInventories] = useState<InventoryDataType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      if (!user?.customerId) return;
      try {
        const { data } = await axios.get(
          baseURL +
            `api/customers/${user?.customerId}/InboundInventory/inventories`
        );
        setInventories(data);
      } catch (error) {
        console.error("Failed to fetch data from the endpoint:", error);
      }
    };

    fetchData();
  }, []);

  const { selectedInventoryItemsToOrder } = useSelector(
    (state: StoreState) => state
  );

  return (
    <div className="container  mx-auto pt-4">
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
              setselectedItems(isAllItemsSelected.current ? [] : []);
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

      {inventories
        .flatMap((inventory) =>
          inventory.inventoryItems.filter((it) => !!it.skuId)
        )
        .map(({ ...inx }) => (
          <TableRow
            isAllItemsSelected={isAllItemsSelected.current}
            data={inx}
            isExpanded={expandedItem === inx.skuId}
            collapseRow={() =>
              !!expandedItem
                ? setExpandedItem(null)
                : setExpandedItem(inx.skuId)
            }
            selectedItems={selectedItems.map((items) => items.skuId)}
            selectItem={(item: InventoryItemType) => {
              if (
                selectedItems.map((items) => items.skuId).includes(item.skuId)
              ) {
                setselectedItems([
                  ...selectedItems.filter((it) => it.id !== item.id),
                ]);

                dispatch({
                  type: StateReducerActions.UNSELECT_INVENTORY_ITEMS_TO_ORDER,
                  payload: item,
                });
              } else {
                setselectedItems([...selectedItems, item]);
                dispatch({
                  type: StateReducerActions.SELECT_INVENTORY_ITEMS_TO_ORDER,
                  payload: item,
                });
              }
            }}
          />
        ))}
    </div>
  );
};

export { AllInventoryTableDetails };
