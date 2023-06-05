import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";
export default function StorageBooking() {
  const router = useRouter();
  return (
    <DashBoardLayout backAction>
      <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
        <div className="border-b-2 border-b-gray-300 p-7 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">Storage Booking</h1>
          <div>
            <Button title="Book New Storage" size="sm" className="max-w-sm" />
          </div>
        </div>
        <div className="p-10">
          <p className="my-5 text-primary font-semibold">Bookings</p>
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-8 justify-between   p-5 bg-[#f9f9f9] rounded border-1 border-[#bbbbbb] uppercase text-[#959595] font-bold">
              <p>Status</p>
              <p>Booking Id</p>
              <p>Facility Name</p>
              <p>Booking date</p>
              <p>Facility location</p>
              <p>Amount</p>
              <p>Duration</p>
              <p>Action</p>
            </div>
            <div
              className="grid grid-cols-8 justify-evenly p-5 items-center cursor-pointer"
              onClick={() => router.push(DashBoardRoutes.BOOKING_DETAILS)}
            >
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
            </div>
            <div className="grid grid-cols-8 justify-evenly p-5 items-center">
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
            <div className="grid grid-cols-8 justify-evenly p-5 items-center">
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
        </div>
      </div>
    </DashBoardLayout>
  );
}
