import { InventoryItemType } from "@/_tabs/Inventory/types/inventory-data-type";
import { generateNewOrderItem } from "@/_tabs/Inventory/utils/generateNewOrderItems";
import { StateReducerActions } from "@/types";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

const TableRow: FC<{
  isAllItemsSelected: boolean;
  isExpanded: boolean;
  data: InventoryItemType;
  collapseRow: () => void;
  selectItem: (item: InventoryItemType) => void;
  selectedItems: string[];
}> = ({
  isExpanded,
  data,
  collapseRow,
  selectedItems,
  selectItem,
  isAllItemsSelected,
}) => {
  const router = useRouter();

  const [quantity, setQuantity] = useState<number>(0);

  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const createInventoryOrder = async (data: InventoryItemType) => {
    const order = generateNewOrderItem({
      storageFacilityId: data?.storageFacilityId,
      orderItems: [
        {
          orderQuantity: quantity,
          dimension: data.size.toString(),
          unitPrice: data?.unitPrice,
          quantity: data?.quantity,
          skuId: data?.skuId,
          itemName: data?.itemName,
        },
      ],
    });

    dispatch({
      type: StateReducerActions.ADD_SINGLE_INVENTORY_ITEM_TO_VAN,
      payload: { ...order },
    });

    router.push("/ordermgt/deliveryVan");
  };

  return (
    <div
      className=" p-4 m-0"
      style={{
        backgroundColor:
          isAllItemsSelected || selectedItems.includes(data?.skuId)
            ? `rgba(238.63, 250.15, 255, 1)`
            : "#fff",
        borderRadius: 3,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="grid grid-rows-1 grid-cols-8 pl-6">
        <div className="">
          <div className="flex items-center">
            <input
              disabled={isAllItemsSelected}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
              checked={selectedItems.includes(data?.skuId)}
              onChange={() => {
                selectItem(data);
              }}
            />
          </div>
        </div>
        <p className=" leading-7">{data?.skuId}</p>
        <p className=" leading-7">{data?.itemName}</p>
        <div className="inline-flex space-x-1 items-center   h-7">
          <p className=" leading-7">{data?.storageFacilityId}</p>
          <img
            className="w-2.5 h-2.5 rounded-full"
            src="https://via.placeholder.com/10x10"
          />
        </div>
        <p className=" leading-7">{""}</p>
        <p className="pl-10 leading-7">{data?.quantity}</p>
        <p className=" leading-7">{data?.unitPrice}</p>
        <div className="p-2">
          <div
            className="inline-flex items-center px-2 py-0.5  rounded-sm cursor-pointer"
            onClick={collapseRow}
          >
            <p className=" leading-none text-blue-900">{`Show ${
              isExpanded ? "Less" : "More"
            }`}</p>
          </div>
        </div>
      </div>
      {isExpanded && (
        <>
          {" "}
          <div className="grid grid-rows-1 py-2 mt-5">
            <div className="grid grid-cols-7 m-0 p-0">
              <div className="grid col-span-2 ">
                {!!data?.picture ? (
                  <img
                    src={data?.picture}
                    alt={data?.description}
                    style={{ width: "100%", height: "auto" }}
                  />
                ) : (
                  <img
                    src={"https://www.beelights.gr/assets/images"}
                    alt={data?.description}
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
              </div>
              <div className="grid col-span-4">
                <table>
                  <thead>
                    <th>
                      {" "}
                      <p className=" font-semibold leading-none uppercase">
                        Position
                      </p>
                    </th>
                    <th>
                      <p className=" font-semibold uppercase">dmg. items</p>
                    </th>
                    <th>
                      <p className=" font-semibold leading-none uppercase">
                        Brief Description
                      </p>
                    </th>
                    <th>
                      <p className=" font-semibold leading-none uppercase">
                        Colour{" "}
                      </p>
                    </th>
                    <th>
                      <p className=" font-semibold leading-none uppercase">
                        Weight
                      </p>
                    </th>
                  </thead>
                  <tbody>
                    <td>
                      <p className="text-xs">{data?.itemPosition}</p>
                    </td>
                    <td>
                      <p className="text-xs leading-7">
                        {data?.quantityDamaged}
                      </p>
                    </td>
                    <td>
                      <p className="w-28 text-xs leading-none">
                        {data?.description}{" "}
                      </p>
                    </td>
                    <td>
                      <p className="text-xs leading-none">{data?.colour}</p>
                    </td>
                    <td>
                      <p className="text-xs leading-none">{data?.weight}</p>
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-1">
            <button
              style={{
                color: `#1B547F`,
                opacity: !!selectedItems.length ? 0.4 : 1,
              }}
              className="bg-white hover:bg-gray-700 py-2 px-4 border rounded-md border-gray-500 "
              onClick={() => createInventoryOrder(data)}
              disabled={loading || !!selectedItems.length}
            >
              {!loading ? "Create Order" : "loading..."}
            </button>
            <div className="flex justify-center items-center">
              <span
                className=" flex justify-center rounded-full bg-black h-4 text-white p-1 items-center cursor-pointer"
                onClick={() =>
                  quantity > 0 ? setQuantity((prev) => --prev) : null
                }
              >
                -
              </span>
            </div>
            <div className="flex justify-center  items-center  border rounded-lg border-gray-900">
              <p className="flex justify-center  items-center m-2 font-medium  ">
                {quantity}/{" "}
                <span className=" flex rounded-full text-gray-800 h-4 p-1 items-center ">
                  {data?.quantity}
                </span>
              </p>
            </div>

            <div className="flex justify-center items-center">
              <span
                className=" flex rounded-full bg-black h-4 text-white p-1 items-center cursor-pointer"
                onClick={() =>
                  quantity < data?.quantity
                    ? setQuantity((prev) => prev + 1)
                    : null
                }
              >
                +
              </span>
            </div>

            <button
              style={{ backgroundColor: `#1B547F` }}
              className=" hover:bg-blue-700 text-white py-2 px-4 border rounded-md border-gray-500"
              onClick={() => router.push(DashBoardRoutes.INVENTORY_TOPUP)}
            >
              Top up Stock
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export { TableRow };
