
import { Button } from "@/components";
import { UploadArea } from "@/components/UploadArea";
import { CheckIcon, ComputerIcon, DoubleArrow } from "@/icons";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";

const InboundHistory = () => {
  const router = useRouter();
  return (
    <div className="p-10">
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-8 justify-between   p-5 bg-[#f9f9f9] rounded border-1 border-[#bbbbbb] uppercase text-[#959595] font-bold">
          <p className=" font-semibold uppercase">Inbound ID</p>
          <p className=" font-semibold uppercase">Date created</p>
          <p className=" font-semibold uppercase">TIME created</p>
          <p className=" font-semibold uppercase">Pickup location</p>
          <p className=" font-semibold uppercase">Facility name</p>
          <p className=" font-semibold uppercase">Facility ID</p>
          <p className=" font-semibold uppercase">Delivery co</p>
          <p className=" font-semibold leading-none uppercase">STATUS</p>
        </div>
        <div
          className="grid grid-cols-8 justify-evenly p-5 items-center cursor-pointer"
          onClick={() => router.push(DashBoardRoutes.INVENTORY_INBOUND_DETAILS)}
        >
          <div className="inline-flex space-x-1 items-center justify-start">
            <p className=" leading-7">#RND1234567</p>
          </div>
          <div className="inline-flex space-x-1 items-center justify-start ">
            <p className=" leading-7">9:55am</p>
          </div>
          <div className="inline-flex space-x-1 items-center justify-start">
            <p className=" leading-7">11/04/2023</p>
          </div>
          <div className="inline-flex space-x-1 items-center justify-start ">
            <p className=" leading-7">Lagos Island</p>
          </div>
          <div className="inline-flex space-x-1 items-center justify-start">
            <p className=" leading-none">Oni ile Facility</p>
          </div>
          <div className="inline-flex space-x-1 items-center justify-start ">
            <p className=" leading-none">RND12345</p>
          </div>
          <div className="inline-flex space-x-1 items-center justify-start">
            <p className=" leading-none">Renda</p>
          </div>
          <p className=" text-green-300">Pending</p>
        </div>
        <div
          className="grid grid-cols-8 justify-evenly p-5 items-center"
          onClick={() => router.push(DashBoardRoutes.INVENTORY_INBOUND_DETAILS)}
        >
          <div className="inline-flex space-x-1 items-center justify-start">
            <p className=" leading-7">#RND1234567</p>
          </div>
          <div className="inline-flex space-x-1 items-center justify-start ">
            <p className=" leading-7">9:55am</p>
          </div>
          <div className="inline-flex space-x-1 items-center justify-start">
            <p className=" leading-7">11/04/2023</p>
          </div>
          <div className="inline-flex space-x-1 items-center justify-start ">
            <p className=" leading-7">Lagos Island</p>
          </div>
          <div className="inline-flex space-x-1 items-center justify-start">
            <p className=" leading-none">Oni ile Facility</p>
          </div>
          <div className="inline-flex space-x-1 items-center justify-start ">
            <p className=" leading-none">RND12345</p>
          </div>
          <div className="inline-flex space-x-1 items-center justify-start">
            <p className=" leading-none">Renda</p>
          </div>
          <p className=" text-red-500">Rejected</p>
        </div>{" "}
      </div>
    </div>
  );
};

export { InboundHistory };
