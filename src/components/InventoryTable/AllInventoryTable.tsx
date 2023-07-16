import { FC, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InventoryItemType } from "@/modules/inventory/types/inventory-data-type";
import { StoreState } from "@/store/types/store-state.types";
import { StateReducerActions } from "@/types";
import { useRouter } from "next/router";
import { TableRow } from "./inventoryTableRow";
import { LoadingComponent } from "../LoadingComponent";

const AllInventoryTableDetails: FC<{
  data: InventoryItemType[];
  loading: boolean;
}> = ({ data, loading }) => {
  const router = useRouter();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [selectedItems, setselectedItems] = useState<InventoryItemType[]>([]);
  const isAllItemsSelected = useRef(false);

  const { user } = useSelector((state: StoreState) => state);
  const dispatch = useDispatch();
  const { selectedInventoryItemsToOrder } = useSelector(
    (state: StoreState) => state
  );

  return (
    <div className=" mx-auto pt-4">
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
              if (!!isAllItemsSelected.current) {
                isAllItemsSelected.current = false;
                dispatch({
                  type: StateReducerActions.CLEAR_INVENTORY_ITEMS_TO_ORDER,
                });
              } else {
                isAllItemsSelected.current = true;
                dispatch({
                  type: StateReducerActions.SELECT_MULTIPLE_INVENTORY_ITEMS_TO_ORDER,
                  payload: data,
                });
              }
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
      {!!loading && <LoadingComponent />}

      {!loading && !data.length ? (
        <div className="w-full text-center p-4">
          {" "}
          <p>No Items in inventory/Storage Facility</p>
        </div>
      ) : (
        data.map((inventory) => (
          <TableRow
            isAllItemsSelected={isAllItemsSelected.current}
            data={inventory}
            isExpanded={expandedItem === inventory.skuId}
            collapseRow={() =>
              !!expandedItem && expandedItem === inventory.skuId
                ? setExpandedItem(null)
                : setExpandedItem(inventory.skuId)
            }
            selectedItems={selectedInventoryItemsToOrder.map(
              (items) => items.skuId
            )}
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
        ))
      )}
    </div>
  );
};

export { AllInventoryTableDetails };
