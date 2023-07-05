import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { StoreState } from "@/store/types/store-state.types";

import { baseURL } from "@/utils";
import axios from "axios";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Define the type for the inbound request
type InboundRequest = {
  inboundId: string;
  dateCreated: string;
  timeCreated: string;
  shipment: {
    // ...
    inventoryItems: [
      {
        // ...
        deliveryDetails: {
          // ...
          totalNumberOfItems: number;
          totalValue: number;
          pickupLocation: string;
          deliveryBy: string;
          rendaPickUpDetails: {
            //
            pickupContactName: string;
            pickupContactNumber: string;
          };
          // ...
        };
        inventoryItems: [
          {
            skuId: number;
            itemName: string;
            quantity: number;
            description: string;
            size: string;
            colour: string;
            picture: string;
            unitPrice: number;
            weight: number;
            quantityRecieved: number;
            quantityDamaged: number;
            quantityMissing: number;
            acceptanceStatus: string;
          }
        ];
        // ...
        storageFacilityId: string;
        storageFacility: {
          storageFacilityName: string;
        };
      }
    ];
    // ...
  };

  // storageFacility: string;
  // storageFacilityId: string;
  deliveryBy: string;
  status: string;
};

export default function InboundDetail() {
  const router = useRouter();
  const { index, id } = router.query;
  const idx = +index!;
  const { user } = useSelector((state: StoreState) => state);
  const [inboundRequests, setInboundRequests] = useState<InboundRequest[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          baseURL +
            `api/AdminInventory/inbound-request-details/${String(
              router.query.id
            ).replace("#", "%23")}`
        );
        setInboundRequests(data);
      } catch (error) {
        console.error("Failed to fetch data from the endpoint:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DashBoardLayout backAction>
      {inboundRequests.map((request) => (
        <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
          <div className="border-b-2 border-b-gray-300 p-7 flex items-center justify-between">
            <div className="inline-flex flex-col space-y-1.5 items-start justify-start">
              <div className="inline-flex flex-col space-y-1.5 items-start justify-start">
                <p className="text-xl font-semibold leading-none">
                  Inbound request details
                </p>
                <p className=" font-medium leading-tight text-gray-500">
                  Inbound ID - {request.inboundId}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between m-5">
            <div className="flex gap-10">
              <div>
                <div className="inline-flex flex-col space-y-1.5 items-start justify-start font-bold">
                  <p className="my-5">Facility ID</p>
                  <p className="text-sm leading-7 my-5">Facility name</p>
                  <p className="text-sm leading-7 my-5">
                    Date and time of creation
                  </p>
                  <p className="text-sm leading-7 my-5">Status</p>
                  <p className="text-sm leading-7 my-5">Pickup location</p>
                  <p className="text-sm leading-7 my-5">Contact Person</p>
                  <p className="text-sm leading-7 my-5">
                    Total number of items to be picked up
                  </p>
                  <p className="text-sm leading-7 my-5">Total value of items</p>
                  <p className="text-sm leading-7 my-5">Date Received</p>
                </div>
              </div>
              <div>
                {request.shipment.inventoryItems.map((rex) => (
                  <div className="inline-flex flex-col space-y-1.5 items-start justify-start">
                    <p className="text-sm leading-7 text-black text-opacity-50 my-5">
                      {rex?.storageFacilityId}
                    </p>
                    <p className="text-sm leading-7 text-black text-opacity-50 my-5">
                      {rex.storageFacility?.storageFacilityName}
                    </p>
                    <p className="text-sm leading-7 text-black text-opacity-50 my-5">
                      {format(
                        new Date(request.dateCreated),
                        "EEE. do MMMM yyyy, hh:mma"
                      )}
                    </p>
                    <p className="text-[13px] leading-7 text-yellow-500 my-5">
                      {request?.status}
                    </p>
                    <p className="text-sm leading-7 text-black text-opacity-50 my-5">
                      {rex.deliveryDetails?.pickupLocation}
                    </p>
                    <p className="text-sm leading-7 text-black text-opacity-50 my-5">
                      {
                        rex.deliveryDetails?.rendaPickUpDetails
                          ?.pickupContactName
                      }
                      ,{" "}
                      {
                        rex.deliveryDetails.rendaPickUpDetails
                          ?.pickupContactNumber
                      }
                    </p>
                    <p className="text-sm leading-7 text-black text-opacity-50 my-5">
                      {rex?.deliveryDetails?.totalNumberOfItems}
                    </p>
                    <p className="text-sm leading-7 text-black text-opacity-50 my-5">
                      {rex.deliveryDetails?.totalValue}
                    </p>
                    <p className="text-sm leading-7 text-black text-opacity-50 my-5">
                      {format(
                        new Date(request?.dateCreated),
                        "EEE. do MMMM yyyy, hh:mma"
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* <div className="inline-flex items-center justify-center px-2.5 py-1.5 bg-blue-900 border rounded-sm">
                <p className=" text-center text-white">Download</p>
              </div> */}
              <Button title="Download" size="sm" />
            </div>
          </div>
          <div className="m-5">
            <div className="rounded-lg border border-black border-opacity-25">
              <div
                className="bg-primary flex  items-center"
                style={{ height: 40 }}
              >
                <p className="text-white pl-3 text-center">Items</p>
              </div>

              <div
                className="bg-white grid grid-cols-6 items-center pl-2 border border-black border-opacity-25"
                style={{ height: 48 }}
              >
                <p className=" uppercase">Item Name</p>
                <p className="  uppercase">SKU ID</p>
                <p className=" uppercase">QTY</p>
                <p className=" uppercase">Received Items</p>
                <p className=" uppercase">Missing items</p>
                <p className=" uppercase">Damaged Items</p>
              </div>
            </div>
            {request.shipment.inventoryItems.map((rex2) =>
              rex2.inventoryItems.map((rex3) => (
                <div
                  className="bg-white grid grid-cols-6  pl-2"
                  style={{ height: 48 }}
                >
                  <p className="">{rex3.itemName}</p>
                  <p className="">{rex3.skuId}</p>
                  <p className="">{rex3.quantity}</p>
                  <p className="">{rex3.quantityRecieved}</p>
                  <p className="">{rex3.quantityMissing}</p>
                  <p className="">{rex3.quantityDamaged}</p>
                </div>
              ))
            )}
          </div>
          <div>
            <div
              className="flex space-x-96 items-center justify-between m-4"
              style={{}}
            >
              <p className="opacity-50  font-medium text-black text-opacity-50">
                Showing 1{" "}
              </p>
              <div className="flex space-x-2.5 items-start justify-start">
                <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
                  <p className=" font-medium text-center text-gray-500">
                    Previous
                  </p>
                </div>
                <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 bg-primary rounded-sm">
                  <p className=" font-medium text-center text-white">1</p>
                </div>
                <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
                  <p className=" font-medium text-center text-gray-500">2</p>
                </div>
                <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
                  <p className=" font-medium text-center text-gray-500">3</p>
                </div>
                <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
                  <p className=" font-medium text-center text-gray-500">Next</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </DashBoardLayout>
  );
}
