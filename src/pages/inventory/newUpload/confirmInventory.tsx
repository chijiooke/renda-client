import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";
import { MyModal } from "@/modals";

export default function ConfirmInventory() {
  const router = useRouter();
    
  
  return (
    <DashBoardLayout backAction>
      <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
        <div className="border-b-2 border-b-gray-300 p-7 flex items-center justify-between">
          <div className="inline-flex flex-col space-y-1.5 items-start justify-start">
            <p className="text-xl font-semibold leading-none">
              Inventory upload confirmation
            </p>
            <p className="text-xs font-medium leading-tight text-gray-500">
              Confirm uploaded items before processing your inventory
            </p>
          </div>
        </div>
        <div className="p-10">
          <p className="my-5 text-primary font-semibold">15 Items</p>
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-8 mt-2 justify-between   p-5 border-1 border-[#bbbbbb] uppercase text-[#959595] font-bold">
              <p>ITEM NAME</p>
              <p>QTY</p>
              <p>DIMENSION</p>
              <p>COLOUR</p>
              <p>WEIGHT</p>
              <p>UNIT PRICE</p>
              <p>BRIEF DESCRIPTION</p>
              <p>IMAGE</p>
            </div>
            <button>
              <div className="grid grid-cols-8 mt-2 justify-evenly p-5 bg-[#f9f9f9] border-1 border-[#bbbbbb] items-center cursor-pointer">
                <p className="text-green-300">Active</p>
                <MyModal />
                <p>#RND9801</p>
                <p>Facility Name </p>
                <p>12-03-2023</p>
                <p>Lagos Island, Lagos</p>
                <p>N8,000,000 </p>
                <p>3 Weeks</p>
                <p className="bg-[#E1E1E1] text-center capitalize text-[#979797] p-1">
                  Make Payment
                </p>
              </div>
            </button>
            <div className="grid grid-cols-8 mt-2 justify-evenly p-5 bg-[#f9f9f9] border-1 border-[#bbbbbb] items-center">
              <p className="text-green-300">Active</p>
              <p>#RND9801</p>
              <p>Facility Name </p>
              <p>12-03-2023</p>
              <p>Lagos Island, Lagos</p>
              <p>N8,000,000 </p>
              <p>3 Weeks</p>
              <p className="bg-[#E1E1E1] text-center capitalize text-[#979797] p-1">
                Make Payment
              </p>
            </div>{" "}
            <div className="grid grid-cols-8 mt-2 justify-evenly p-5 bg-[#f9f9f9] border-1 border-[#bbbbbb] items-center">
              <p className="text-red-500">Expired</p>
              <p>#RND9801</p>
              <p>Facility Name </p>
              <p>12-03-2023</p>
              <p>Lagos Island, Lagos</p>
              <p>N8,000,000 </p>
              <p>3 Weeks</p>
              <p className="bg-[#E1E1E1] text-center capitalize text-[#979797] p-1">
                Make Payment
              </p>
            </div>
          </div>

          <div className="flex justify-end py-5 gap-3">
            <div className="inline-flex space-x-1 items-center justify-center w-36 h-10 px-3 py-1.5 bg-blue-900 rounded-md">
              <p className="text-xs font-semibold leading-none text-white">
                Confirm Items
              </p>
            </div>
            <div className="inline-flex space-x-1 items-center justify-center w-36 h-10 px-3 py-1.5 border-1 rounded-md border-blue-900">
              <p className="text-xs font-semibold leading-none text-blue-900">
                Back{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
}
