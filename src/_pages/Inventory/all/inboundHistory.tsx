
// import { Button } from "@/components";
// import { UploadArea } from "@/components/UploadArea";
// import { CheckIcon, ComputerIcon, DoubleArrow } from "@/icons";
// import { DashBoardRoutes } from "@/utils";
// import { useRouter } from "next/router";

// const InboundHistory = () => {
//   const router = useRouter();
//   return (
//     <div className="p-10">
//       <div className="flex flex-col w-full">
//         <div className="grid grid-cols-8 justify-between   p-5 bg-[#f9f9f9] rounded border-1 border-[#bbbbbb] uppercase text-[#959595] font-bold">
//           <p className=" font-semibold uppercase">Inbound ID</p>
//           <p className=" font-semibold uppercase">Date created</p>
//           <p className=" font-semibold uppercase">TIME created</p>
//           <p className=" font-semibold uppercase">Pickup location</p>
//           <p className=" font-semibold uppercase">Facility name</p>
//           <p className=" font-semibold uppercase">Facility ID</p>
//           <p className=" font-semibold uppercase">Delivery co</p>
//           <p className=" font-semibold leading-none uppercase">STATUS</p>
//         </div>
//         <div
//           className="grid grid-cols-8 justify-evenly p-5 items-center cursor-pointer"
//           onClick={() => router.push(DashBoardRoutes.INVENTORY_INBOUND_DETAILS)}
//         >
//           <div className="inline-flex space-x-1 items-center justify-start">
//             <p title="inboundId" className=" leading-7">
//               #RND1234567
//             </p>
//           </div>
//           <div className="inline-flex space-x-1 items-center justify-start ">
//             <p title="dateCreated" className=" leading-7">
//               9:55am
//             </p>
//           </div>
//           <div className="inline-flex space-x-1 items-center justify-start">
//             <p title="timeCreated" className=" leading-7">
//               11/04/2023
//             </p>
//           </div>
//           <div className="inline-flex space-x-1 items-center justify-start ">
//             <p title="pickupLocation" className=" leading-7">
//               Lagos Island
//             </p>
//           </div>
//           <div className="inline-flex space-x-1 items-center justify-start">
//             <p title="storageFacility" className=" leading-none">
//               Oni ile Facility
//             </p>
//           </div>
//           <div className="inline-flex space-x-1 items-center justify-start ">
//             <p title="storageFacilityId" className=" leading-none">
//               RND12345
//             </p>
//           </div>
//           <div className="inline-flex space-x-1 items-center justify-start">
//             <p title="deliveryBy" className=" leading-none">
//               Renda
//             </p>
//           </div>
//           <p title="status" className=" text-green-300">Pending</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { InboundHistory };
import { Button } from "@/components";
import { UploadArea } from "@/components/UploadArea";
import { CheckIcon, ComputerIcon, DoubleArrow } from "@/icons";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";


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
          // ...
        };
        // ...
        storageFacilityId: string;
        storageFacility: null;
      }
    ];
    // ...
  };

  storageFacility: string;
  storageFacilityId: string;
  deliveryBy: string;
  status: string;
};

const InboundHistory = () => {
  const router = useRouter();
   const [inboundRequests, setInboundRequests] = useState<InboundRequest[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://tradeplaorg-001-site9.gtempurl.com/api/customers/yBEB89/InboundInventory/inbound-requests"
        );
        setInboundRequests(response.data);
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

        {inboundRequests.map((request) => (
          <div
            key={request.inboundId}
            className="grid grid-cols-8 justify-evenly p-5 items-center cursor-pointer"
            onClick={() =>
              router.push(DashBoardRoutes.INVENTORY_INBOUND_DETAILS)
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
                {request.shipment.inventoryItems[0].deliveryDetails.pickupLocation}
              </p>
            </div>
            <div className="inline-flex space-x-1 items-center justify-start">
              <p title="storageFacility" className="leading-none">
                {request.storageFacility}
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
