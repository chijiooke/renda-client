// import { Button } from "@/components";
// import { DashBoardLayout } from "@/layout";
// import { DashBoardRoutes } from "@/utils";
// import { useRouter } from "next/router";
// export default function StorageBooking() {
//   const router = useRouter();
//   return (
//     <DashBoardLayout backAction>
//       <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
//         <div className="border-b-2 border-b-gray-300 p-7 flex items-center justify-between">
//           <h1 className="text-2xl font-extrabold">Storage Booking</h1>
//           <div>
//             <Button title="Book New Storage" size="sm" className="max-w-sm" />
//           </div>
//         </div>
//         <div className="p-10">
//           <p className="my-5 text-primary font-semibold">Bookings</p>
//           <div className="flex flex-col w-full">
//             <div className="grid grid-cols-8 justify-between   p-5 bg-[#f9f9f9] rounded border-1 border-[#bbbbbb] uppercase text-[#959595] font-bold">
//               <p>Status</p>
//               <p>Booking Id</p>
//               <p>Facility Name</p>
//               <p>Booking date</p>
//               <p>Facility location</p>
//               <p>Amount</p>
//               <p>Duration</p>
//               <p>Action</p>
//             </div>
//             <div
//               className="grid grid-cols-8 justify-evenly p-5 items-center cursor-pointer"
//               onClick={() => router.push(DashBoardRoutes.BOOKING_DETAILS)}
//             >
//               <p className="text-green-300">Active</p>
//               <p>#RND9801</p>
//               <p>Facility Name </p>
//               <p>12-03-2023</p>
//               <p>Lagos Island, Lagos</p>
//               <p>N8,000,000 </p>
//               <p>3 Weeks</p>
//               <p className="bg-[#E1E1E1] text-center capitalize text-[#979797] p-1">
//                 Make Payment
//               </p>
//             </div>
//             <div className="grid grid-cols-8 justify-evenly p-5 items-center">
//               <p className="text-green-300">Active</p>
//               <p>#RND9801</p>
//               <p>Facility Name </p>
//               <p>12-03-2023</p>
//               <p>Lagos Island, Lagos</p>
//               <p>N8,000,000 </p>
//               <p>3 Weeks</p>
//               <p className="bg-[#E1E1E1] text-center capitalize text-[#979797] p-1">
//                 Make Payment
//               </p>
//             </div>{" "}
//             <div className="grid grid-cols-8 justify-evenly p-5 items-center">
//               <p className="text-red-500">Expired</p>
//               <p>#RND9801</p>
//               <p>Facility Name </p>
//               <p>12-03-2023</p>
//               <p>Lagos Island, Lagos</p>
//               <p>N8,000,000 </p>
//               <p>3 Weeks</p>
//               <p className="bg-[#E1E1E1] text-center capitalize text-[#979797] p-1">
//                 Make Payment
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashBoardLayout>
//   );
// }
import { DashBoardLayout } from "@/layout";
import { Button, GetInTouch, Input, StorageCard } from "@/components";
import { useRouter } from "next/router";
import { DashBoardRoutes } from "@/utils";
import { ArrowNextIcon, ArrowPreviousIcon, CheckIcon } from "@/icons";
import { Tab } from "@headlessui/react";
import { MyModal } from "@/modals";
import { useState } from "react";
// import { InboundHistory } from "@/_pages/inventory/all/inboundHistory";
import { AllInventoryTable } from "@/components/InventoryTable";
import { InboundHistory } from "@/_pages/inventory/all/inboundHistory";

const headers = ["ALL Inventory", "Inbound History"];
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Inventory() {
  const router = useRouter();
  const [showUploadButton, setShowUploadButton] = useState(true);
  const handleProcessItemsClick2: any = () => {
    setShowUploadButton(false);
  };

  return (
    <>
      {/* <ImagePreview /> */}
      <DashBoardLayout>
        <div className="rounded flex-grow border-1 border-gray-300 h-[83vh] pt-2">
          {showUploadButton && (
            <>
              <div className="flex justify-between items-center">
                <div className=" p-7 flex flex-col ">
                  <h1 className="text-3xl font-extrabold">All Inventory</h1>
                </div>
                <div className="flex justify-center gap-2 mr-7">
                  <div
                    style={{
                      backgroundColor: `#ECFFF8`,
                      borderColor: `#008753`,
                    }}
                    className=" space-x-1 items-center justify-center w-72 h-10 flex gap-2 cursor-pointer border-2 rounded-md"
                    // onClick={() => router.push(DashBoardRoutes.INVENTORY_TOPUP)}
                  >
                    <CheckIcon />
                    <p className="text-xs font-semibold text-center items-center text-[#008753]">
                      Your Items have been added to van
                    </p>
                  </div>
                  <div
                    style={{ backgroundColor: `#1B547F` }}
                    className=" space-x-1 items-center justify-center w-36 h-10 px-3 py-1.5 cursor-pointer  rounded-md"
                    onClick={() => router.push(DashBoardRoutes.INVENTORY_TOPUP)}
                  >
                    <p className="text-xs font-semibold text-center items-center pt-2 text-white">
                      Top-Up Stock
                    </p>
                  </div>
                  <div className=" space-x-1 items-center justify-center w-36 h-10 px-3 py-1.5 cursor-pointer  border-1 rounded-md border-blue-900">
                    <p
                      style={{ color: `#1B547F` }}
                      className="text-xs font-semibold text-center items-center pt-2 "
                    >
                      Create Order
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          {!showUploadButton && (
            <div className="border-b-2 border-b-gray-300 p-7 flex items-center justify-between">
              <div className=" flex flex-col ">
                <h1 className="text-3xl font-extrabold">Inbound History</h1>
              </div>
              <div>
                {/* <div
                  className="inline-flex space-x-3 items-center justify-start px-4 py-3 bg-green-100 border rounded-md border-green-900"
                  style={{ width: 423, height: 38 }}
                >
                  <img
                    className="w-3.5 h-3.5 rounded-full"
                    src="https://via.placeholder.com/14x14"
                  />
                  <div className="inline-flex flex-col items-start justify-start flex-1">
                    <p className="text-xs font-medium leading-tight text-green-700">
                      Inbound request has been made and would respond in 12hrs
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          )}

          <div className="w-full px-10 py-5">
            <Tab.Group>
              <Tab.List className="flex pl-10 pt-3 gap-1 justify-between rounded-sm border-2  text-center">
                <div>
                  {headers.map((header, idx) => (
                    <Tab
                      key={idx}
                      onClick={handleProcessItemsClick2}
                      className={({ selected }) =>
                        classNames(
                          "py-3 px-7 outline-none rounded-tl-lg rounded-tr-lg clip-path-polygon",

                          selected ? "bg-primary text-white  " : "bg-[#f4f4f4]"
                        )
                      }
                    >
                      {header}
                    </Tab>
                  ))}
                </div>

                <div className="flex">
                  <div className="flex-inline justify-end ">
                    <div></div>
                    <div className="flex gap-2 mr-2">
                      <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-300 p-2 rounded"
                      />

                      <select className="border border-gray-300 p-2 rounded">
                        <option value="">Filter by Storage Facility</option>
                        <option value="facility1">Facility 1</option>
                        <option value="facility2">Facility 2</option>
                        <option value="facility3">Facility 3</option>
                      </select>

                      <input
                        type="date"
                        placeholder="Filter by Date"
                        className="border border-gray-300 p-2 rounded"
                      />
                      <div className="inline-flex items-center justify-center px-2.5 py-1.5 bg-black bg-opacity-50 border rounded-sm border-black border-opacity-50">
                        <p className="text-xs text-center text-white">Export</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.List>
              <Tab.Panel>
                <AllInventoryTable />
              </Tab.Panel>

              <Tab.Panel>
                <InboundHistory />
              </Tab.Panel>
            </Tab.Group>
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
}
