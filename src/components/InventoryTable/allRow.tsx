import { ComputerImage } from "@/icons";
import { StoreState } from "@/store/reducer";
import { DashBoardRoutes, baseURL } from "@/utils";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Inventorie = {
  id: number;
  dateAdded: string;
  dateUpdated: string;
  customerBusinessId: string;
  deliveryDetails: {
    id: number;
    customerBusinessId: string;
    deliveryDetailsId: number;
    pickupLocation: string;
    customerDeliveryDetails: any;
    rendaPickUpDetails: any;
    deliveryBy: string;
    totalNumberOfItems: number;
    totalValue: number;
    deliveryStatus: string;
  };
  inventoryItems: Array<{
    id: number;
    skuId: string;
    itemName: string;
    quantity: number;
    description: string;
    size: string;
    colour: string;
    picture: string;
    unitPrice: number;
    weight: null;
    customerBusinessId: string;
    storageFacilityId: string;
    storageFacility: null;
    itemPosition: string;
    quantityRecieved: number;
    quantityDamaged: number;
    quantityMissing: number;
    acceptanceStatus: string;
  }>;
  storageFacilityId: string;
  // storageFacility: {
  //   storageFacilityName: string;
  // };
};

const TableRow = () => {
  const [expanded, setExpanded] = useState(false);
  const [initialRowVisible, setInitialRowVisible] = useState(true);
  const router = useRouter();

  const expandRow = () => {
    setExpanded(!expanded);
    setInitialRowVisible(false);
  };

  const collapseRow = () => {
    setExpanded(false);
    setInitialRowVisible(true);
  };
  //api/customers/aSMfML/InboundInventory/inventories
  const { user } = useSelector((state: StoreState) => state);
  const [inventories, setInventories] = useState<Inventorie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          baseURL +
            `api/customers/${user.customerId}/InboundInventory/inventories`
        );
        setInventories(data);
      } catch (error) {
        console.error("Failed to fetch data from the endpoint:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div
      className={`flex flex-col cursor-pointer transition-height duration-300 ${
        expanded ? "h-80 pt-0" : "h-16 pt-4  mb-4 "
      }`}
    >
      {inventories
        .filter((number) => number.inventoryItems.map((nuu) => nuu.skuId))
        .map((req) =>
          req.inventoryItems.map((recc) => (
            <div>
              {initialRowVisible && (
                <div className="grid grid-cols-8 pl-10 m-0">
                  <div className="p-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                      />
                    </div>
                  </div>
                  <p className=" leading-7">{recc.skuId}</p>
                  <p className=" leading-7">{recc.itemName}</p>
                  <div className="inline-flex space-x-1 items-center   h-7">
                    <p className=" leading-7">{recc.storageFacilityId}</p>
                    <img
                      className="w-2.5 h-2.5 rounded-full"
                      src="https://via.placeholder.com/10x10"
                    />
                  </div>
                  <p className=" leading-7">
                    Badagry, Lagos{recc.storageFacility}
                  </p>
                  <p className="pl-10 leading-7">{recc.quantity}</p>
                  <p className=" leading-none">{recc.unitPrice}</p>
                  <div className="p-2 text-center flex items-center">
                    <div
                      className="inline-flex items-start justify-start px-2 py-0.5 bg-blue-50 rounded-sm cursor-pointer"
                      onClick={expandRow}
                    >
                      <p className=" leading-none text-blue-900">Show More</p>
                    </div>
                  </div>
                </div>
              )}

              {expanded && (
                <>
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
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-500"
                          />
                        </div>
                      </div>
                      <p className=" leading-7">{recc.skuId}</p>
                      <p className=" leading-7">{recc.itemName}</p>
                      <div className="inline-flex space-x-1 items-center   h-7">
                        <p className=" leading-7">{recc.storageFacilityId}</p>
                        <img
                          className="w-2.5 h-2.5 rounded-full"
                          src="https://via.placeholder.com/10x10"
                        />
                      </div>
                      <p className=" leading-7">
                        Badagry, Lagos{}
                      </p>
                      <p className="pl-10 leading-7">{recc.quantity}</p>
                      <p className=" leading-none">{recc.unitPrice}</p>
                      <div className="p-2">
                        <div
                          className="inline-flex items-center px-2 py-0.5 bg-blue-100 rounded-sm cursor-pointer"
                          onClick={collapseRow}
                        >
                          <p className=" leading-none text-blue-900">
                            Show Less
                          </p>
                        </div>
                      </div>
                    </div>
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
                                  position
                                </p>
                              </th>
                              <th>
                                <p className=" font-semibold uppercase">
                                  dmg. items
                                </p>
                              </th>
                              <th>
                                <p className=" font-semibold leading-none uppercase">
                                  Brief Description
                                </p>
                              </th>
                              <th>
                                <p className=" font-semibold leading-none uppercase">
                                  Colour
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
                                <p className="text-xs">{recc.itemPosition}</p>
                              </td>
                              <td>
                                <p className="text-xs leading-7">
                                  {recc.quantityDamaged}
                                </p>
                              </td>
                              <td>
                                <p className="w-28 text-xs leading-none">
                                  {recc.description}
                                </p>
                              </td>
                              <td>
                                <p className="text-xs leading-none">
                                  {recc.colour}
                                </p>
                              </td>
                              <td>
                                <p className="text-xs leading-none">
                                  {recc.weight}
                                </p>
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
                        <span className=" flex rounded-full bg-black h-4 text-white p-1 items-center">
                          +
                        </span>
                      </div>
                      <div className="flex justify-center  items-center  border rounded-lg border-gray-900">
                        <p className="flex justify-center  items-center m-2 font-medium  ">
                          22
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <span className=" flex justify-center rounded-full bg-black h-4 text-white p-1 items-center">
                          -
                        </span>
                      </div>

                      <button
                        style={{ backgroundColor: `#1B547F` }}
                        className=" hover:bg-blue-700 text-white py-2 px-4 border rounded-md border-gray-500"
                        onClick={() =>
                          router.push(DashBoardRoutes.INVENTORY_TOPUP)
                        }
                      >
                        Top up Stock
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      {/* {initialRowVisible && (
        <div className="grid grid-cols-8 pl-10 m-0">
          <div className="p-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
            </div>
          </div>
          <p className=" leading-7">1234567890</p>
          <p className=" leading-7">Mac Book Pro</p>
          <div className="inline-flex space-x-1 items-center   h-7">
            <p className=" leading-7">1000000565</p>
            <img
              className="w-2.5 h-2.5 rounded-full"
              src="https://via.placeholder.com/10x10"
            />
          </div>
          <p className=" leading-7">Badagry, Lagos</p>
          <p className="pl-10 leading-7">22</p>
          <p className=" leading-none">456,000</p>
          <div className="p-2 text-center flex items-center">
            <div
              className="inline-flex items-start justify-start px-2 py-0.5 bg-blue-50 rounded-sm cursor-pointer"
              onClick={expandRow}
            >
              <p className=" leading-none text-blue-900">Show More</p>
            </div>
          </div>
        </div>
      )}

      {expanded && (
        <>
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
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                </div>
              </div>
              <p className=" leading-7">1234567890</p>
              <p className=" leading-7">Mac Book Pro</p>
              <div className="inline-flex space-x-1 items-center   h-7">
                <p className=" leading-7">1000000565</p>
                <img
                  className="w-2.5 h-2.5 rounded-full"
                  src="https://via.placeholder.com/10x10"
                />
              </div>
              <p className=" leading-7">Badagry, Lagos</p>
              <p className="pl-10 leading-7">22</p>
              <p className=" leading-7">456,000</p>
              <div className="p-2">
                <div
                  className="inline-flex items-center px-2 py-0.5 bg-blue-100 rounded-sm cursor-pointer"
                  onClick={collapseRow}
                >
                  <p className=" leading-none text-blue-900">Show Less</p>
                </div>
              </div>
            </div>
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
                          position
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
                        <p className="text-xs">Upper Shelf</p>
                      </td>
                      <td>
                        <p className="text-xs leading-7">25</p>
                      </td>
                      <td>
                        <p className="w-28 text-xs leading-none">
                          MacBook Pros are supercharged by M1 chips.{" "}
                        </p>
                      </td>
                      <td>
                        <p className="text-xs leading-none">Gray</p>
                      </td>
                      <td>
                        <p className="text-xs leading-none">2.8 Pounds</p>
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
                <span className=" flex rounded-full bg-black h-4 text-white p-1 items-center">
                  +
                </span>
              </div>
              <div className="flex justify-center  items-center  border rounded-lg border-gray-900">
                <p className="flex justify-center  items-center m-2 font-medium  ">
                  22
                </p>
              </div>
              <div className="flex justify-center items-center">
                <span className=" flex justify-center rounded-full bg-black h-4 text-white p-1 items-center">
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
          </div>
        </>
      )} */}
    </div>
  );
};

export { TableRow };
