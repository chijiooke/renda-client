import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";
import { ConfirmModal, MyModal, StorageSelect } from "@/modals";

export default function InboundDetail() {
  const router = useRouter();

  return (
    <DashBoardLayout backAction>
      <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
        <div className="border-b-2 border-b-gray-300 p-7 flex items-center justify-between">
          <div className="inline-flex flex-col space-y-1.5 items-start justify-start">
            <div className="inline-flex flex-col space-y-1.5 items-start justify-start">
              <p className="text-xl font-semibold leading-none">
                Inbound request details
              </p>
              <p className=" font-medium leading-tight text-gray-500">
                Inbound ID - #RND1234
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between m-5">
          <div className="flex gap-5">
            <div>
              <div className="inline-flex flex-col space-y-1.5 items-start justify-start">
                <p className="">Facility ID</p>
                <p className="text-sm leading-7">Facility name</p>
                <p className="text-sm leading-7">Date and time of creation</p>
                <p className="text-sm leading-7">Status</p>
                <p className="text-sm leading-7">Pickup location</p>
                <p className="text-sm leading-7">Contact Person</p>
                <p className="text-sm leading-7">
                  Total number of items to be picked up
                </p>
                <p className="text-sm leading-7">Total value of items</p>
                <p className="text-sm leading-7">Date Received</p>
              </div>
            </div>
            <div>
              <div className="inline-flex flex-col space-y-1.5 items-start justify-start">
                <p className="text-sm leading-7 text-black text-opacity-50">
                  1111122232233
                </p>
                <p className="text-sm leading-7 text-black text-opacity-50">
                  Omo Onile{" "}
                </p>
                <p className="text-sm leading-7 text-black text-opacity-50">
                  Wed. 21st April 2023, 10:00am
                </p>
                <p className="text-sm leading-7 text-yellow-500">Pending</p>
                <p className="text-sm leading-7 text-black text-opacity-50">
                  Badagry, Lagos
                </p>
                <p className="text-sm leading-7 text-black text-opacity-50">
                  Promise, 0808968666
                </p>
                <p className="text-sm leading-7 text-black text-opacity-50">
                  12
                </p>
                <p className="text-sm leading-7 text-black text-opacity-50">
                  500000
                </p>
                <p className="text-sm leading-7 text-black text-opacity-50">
                  Fri. 23rd April 2023
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center justify-center px-2.5 py-1.5 bg-blue-900 border rounded-sm">
              <p className=" text-center text-white">Download</p>
            </div>
          </div>
        </div>
        <div className="m-5">
          <div className="rounded-lg border border-black border-opacity-25">
            <div
              className="bg-blue-900 flex  items-center"
              style={{ height: 40 }}
            >
              <p className="text-white pl-3 text-center">Items</p>
            </div>
            <div
              className="bg-white flex justify-between items-center pl-2 border border-black border-opacity-25"
              style={{ height: 48 }}
            >
              <p className=" uppercase">Item Name</p>
              <p className=" text-center uppercase">SKU ID</p>
              <p className=" uppercase">QTY</p>
              <p className=" uppercase">Received Items</p>
              <p className=" uppercase">Missing items</p>
              <p className=" uppercase">Damaged Items</p>
            </div>
          </div>

          <div
            className="bg-white flex justify-between items-center pl-2"
            style={{ height: 48 }}
          >
            <p className="">123</p>
            <p className="">Mac Book Pro</p>
            <p className="">22</p>
            <p className="">0</p>
            <p className="">0</p>
            <p className="">0</p>
          </div>
        </div>
        <div>
          <div
            className="flex space-x-96 items-center justify-between m-4"
            style={{ }}
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
              <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 bg-blue-900 rounded-sm">
                <p className=" font-medium text-center text-white">1</p>
              </div>
              <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
                <p className=" font-medium text-center text-gray-500">
                  2
                </p>
              </div>
              <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
                <p className=" font-medium text-center text-gray-500">
                  3
                </p>
              </div>
              <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
                <p className=" font-medium text-center text-gray-500">
                  Next
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
}
