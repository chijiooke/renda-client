import { Button } from "@/components";
import { UploadArea } from "@/components/UploadArea";
import { CheckIcon, ComputerIcon, DoubleArrow } from "@/icons";
import { DashBoardRoutes, baseURL } from "@/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { StoreState } from "@/store/types/store-state.types";
// import { StoreState } from "@/store/reducer";

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
            quantityRecieved: number,
            quantityDamaged: number,
            quantityMissing: number,
            acceptanceStatus: string
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
  totalNumberOfItems: number;
  totalValue: number;
  status: string;
};

const InboundHistory = () => {
  const router = useRouter();
  const { user } = useSelector((state: StoreState) => state);
  const [inboundRequests, setInboundRequests] = useState<InboundRequest[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          baseURL +
            `api/customers/${user?.customerId}/InboundInventory/inbound-requests`
        );
        setInboundRequests(data);
      } catch (error) {
        console.error("Failed to fetch data from the endpoint:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-10">
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-8 justify-between p-5 bg-[#f9f9f9] rounded border-1 border-[#bbbbbb] uppercase text-[#959595] font-bold">
          <p className="font-semibold uppercase">Inbound ID</p>
          <p className="font-semibold uppercase">Date created</p>
          <p className="font-semibold uppercase">TIME created</p>
          <p className="font-semibold uppercase">Pickup location</p>
          <p className="font-semibold uppercase">Facility name</p>
          <p className="font-semibold uppercase">Facility ID</p>
          <p className="font-semibold uppercase">Delivery co</p>
          <p className="font-semibold leading-none uppercase">STATUS</p>
        </div>

        {inboundRequests.map((request, idx) => (
          <div
            key={request.inboundId}
            className="grid grid-cols-8 justify-evenly p-5 items-center cursor-pointer"
            onClick={() =>
              router.push({
                pathname: DashBoardRoutes.INVENTORY_INBOUND_DETAILS,
                query: { index: idx, id: request.inboundId },
              })
            }
          >
            <div className="inline-flex space-x-1 items-center justify-start">
              <p title="inboundId" className="leading-7">
                {request.inboundId}
              </p>
            </div>
            <div className="inline-flex space-x-1 items-center justify-start">
              <p title="dateCreated" className="leading-7">
                {request.dateCreated}
              </p>
            </div>
            <div className="inline-flex space-x-1 items-center justify-start">
              <p title="timeCreated" className="leading-7">
                {request.timeCreated}
              </p>
            </div>
            <div className="inline-flex space-x-1 items-center justify-start">
              <p title="pickupLocation" className="leading-7">
                {
                  request.shipment.inventoryItems[0].deliveryDetails
                    .pickupLocation
                }
              </p>
            </div>
            <div className="inline-flex space-x-1 items-center justify-start">
              <p title="storageFacility" className="leading-none">
                {request.shipment.inventoryItems[0].storageFacility.storageFacilityName}
              </p>
            </div>
            <div className="inline-flex space-x-1 items-center justify-start">
              <p title="storageFacilityId" className="leading-none">
                {request.shipment.inventoryItems[0].storageFacilityId}
              </p>
            </div>
            <div className="inline-flex space-x-1 items-center justify-start">
              <p title="deliveryBy" className="leading-none">
                {request.shipment.inventoryItems[0].deliveryDetails.deliveryBy}
              </p>
            </div>
            <p title="status" className="text-green-300">
              {request.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { InboundHistory };
