import { Button } from "@/components";
import { CheckIcon } from "@/icons";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";

const BookingDetail = () => {
  const router = useRouter();
  return (
    <div className=" grid grid-cols-3 justify-between my-5 gap-5">
      <div className="col-span-2">
        <div className="grid grid-cols-2 py-4">
          <p>Status</p>
          <p>Pending</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Booking ID</p>
          <p>#12345678</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Name of storage facility</p>
          <p>Omo-onile storage facility</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Booking date and time</p>
          <p>Wed. 21st April 2023, 10:00am</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Duration of usage</p>
          <p>6 Months</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Start date</p>
          <p>Jul 1st, 2023</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>End date</p>
          <p>Dec 31st, 2023</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Storage type</p>
          <p>Shared</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Size of Space required (sqm)</p>
          <p>100</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Renewal Status </p>
          <p>None</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Payment Structure</p>
          <p>Monthly payment</p>
        </div>
        {/* <div className="grid grid-cols-2 py-4">
          <p>Other Renda services booked</p>
          <ul className="flex flex-wrap gap-3 max-w-2xl ">
            <li className="text-[14px] pr-8 flex items-center gap-3">
              {" "}
              <CheckIcon />
              Inbound Shipping
            </li>
            <li className="text-[14px] pr-8 flex items-center gap-3">
              <CheckIcon />
              Delivery
            </li>{" "}
            <li className="text-[14px] pr-8 flex items-center gap-3">
              <CheckIcon />
              Cash Collection
            </li>{" "}
            <li className="text-[14px] pr-8 flex items-center gap-3">
              <CheckIcon />
              Generator
            </li>{" "}
            <li className="text-[14px] pr-8 flex items-center gap-3">
              <CheckIcon />
              Returns Management
            </li>
          </ul>
        </div> */}
      </div>
      <div>
        <div className="max-w-sm items-center flex flex-col gap-3 justify-end">
          <Button
            title="Pay for Booking "
            size="sm"
            className="w-[40%]"
            handleClick={() => router.push(DashBoardRoutes.BOOKING_PAYMENT)}
          />
          <Button title="Renew Bookings" size="sm" className="w-[40%]" />
        </div>
      </div>
    </div>
  );
};

export { BookingDetail };
