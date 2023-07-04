import { ComputerImage } from "@/icons";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";
import { FC, useState } from "react";

export type inventoryDataType = {
  SKUId: number;
  title: string;
  facilityID: number;
  facilityName: string;
  quantity: number;
  unitPrice: number;
  position: string;
  dmgItems: number;
  description: string;
  color: string;
  weight: string;
  img: string;
};
const TableRow: FC<{
  isAllItemsSelected:boolean;
  isExpanded: boolean;
  data: inventoryDataType;
  collapseRow: () => void;
  selectItem: (item: inventoryDataType) => void;
  selectedItems: number[];
}> = ({ isExpanded, data, collapseRow, selectedItems, selectItem ,isAllItemsSelected}) => {
  const router = useRouter();

  const [orderCount, setOrderCount] = useState<number>(0);
  return (
    <div
      className="bg-blue-50  p-4 m-0"
      style={{
        backgroundColor: `rgba(238.63, 250.15, 255, 1)`,
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
              checked={selectedItems.includes(data?.SKUId)}
              onChange={() => selectItem(data)}
            />
          </div>
        </div>
        <p className=" leading-7">{data?.SKUId}</p>
        <p className=" leading-7">{data?.title}</p>
        <div className="inline-flex space-x-1 items-center   h-7">
          <p className=" leading-7">{data?.facilityID}</p>
          <img
            className="w-2.5 h-2.5 rounded-full"
            src="https://via.placeholder.com/10x10"
          />
        </div>
        <p className=" leading-7">{data?.facilityName}</p>
        <p className="pl-10 leading-7">{data?.quantity}</p>
        <p className=" leading-7">{data?.unitPrice}</p>
        <div className="p-2">
          <div
            className="inline-flex items-center px-2 py-0.5 bg-blue-100 rounded-sm cursor-pointer"
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
                <ComputerImage />
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
                      <p className="text-xs">{data?.position}</p>
                    </td>
                    <td>
                      <p className="text-xs leading-7">{data?.dmgItems}</p>
                    </td>
                    <td>
                      <p className="w-28 text-xs leading-none">
                        {data?.description}{" "}
                      </p>
                    </td>
                    <td>
                      <p className="text-xs leading-none">{data?.color}</p>
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
              style={{ color: `#1B547F` }}
              className="bg-white hover:bg-gray-700 py-2 px-4 border rounded-md border-gray-500"
            >
              Create Order
            </button>
            <div className="flex justify-center items-center">
              <span
                className=" flex rounded-full bg-black h-4 text-white p-1 items-center cursor-pointer"
                onClick={() =>
                  orderCount < data?.quantity
                    ? setOrderCount((prev) => prev + 1)
                    : null
                }
              >
                +
              </span>
            </div>
            <div className="flex justify-center  items-center  border rounded-lg border-gray-900">
              <p className="flex justify-center  items-center m-2 font-medium  ">
                {orderCount}/{" "}
                <span className=" flex rounded-full text-gray-800 h-4 p-1 items-center ">
                  {data?.quantity}
                </span>
              </p>
            </div>
            <div className="flex justify-center items-center">
              <span
                className=" flex justify-center rounded-full bg-black h-4 text-white p-1 items-center cursor-pointer"
                onClick={() =>
                  orderCount > 0 ? setOrderCount((prev) => --prev) : null
                }
              >
                -
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
