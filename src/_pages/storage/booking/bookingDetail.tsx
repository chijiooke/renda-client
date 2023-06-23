import { Button } from "@/components";
import { CheckIcon } from "@/icons";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import cn from "classnames";

dayjs.extend(relativeTime);
const BookingDetail = ({ data }: { data: any }) => {
  const { bookingDetails, storageDetails } = data;
  const router = useRouter();
  const details = {
    Status: (
      <p
        className={cn("", {
          "text-green-600":
            bookingDetails?.status === "Approved" ||
            bookingDetails?.status === "Active",
          "text-red-500": bookingDetails?.status === "Expired",
          "text-orange-400": bookingDetails?.status === "Pending",
        })}
      >
        {bookingDetails?.status}
      </p>
    ),
    "Booking ID": bookingDetails?.bookingID,
    "Name of storage facility": storageDetails?.locationOfTheFacility,
    "Booking date and time": "",
    "Duration of usage": dayjs(bookingDetails?.startDate).to(
      dayjs(bookingDetails?.endDate),
      true
    ),
    "Start date": dayjs(bookingDetails?.startDate).format("DD/MM/YY"),
    "End date": dayjs(bookingDetails?.endDate).format("DD/MM/YY"),
    "Storage type": bookingDetails?.storageType,
    "Size of Space required (sqm)": bookingDetails?.sizeOfSpaceRequired,
    "Renewal Status": bookingDetails?.renewalStatus || "null",
    "Payment Structure": bookingDetails?.paymentStructure,
  };
  return (
    <div className=" grid grid-cols-3 justify-between my-5 gap-5">
      <div className="col-span-2">
        {Object.entries(details).map((b: string[], i: any) => (
          <div className="grid grid-cols-2 py-4">
            <p>{b[0]}</p>
            <p>{b[1]}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="max-w-sm items-center flex flex-col gap-3 justify-end">
          <Button
            title="Pay for Booking "
            size="sm"
            className="w-[40%]"
            disabled={!(bookingDetails?.status === "Approved")}
            handleClick={() => router.push(DashBoardRoutes.BOOKING_PAYMENT)}
          />
          <Button
            title="Renew Bookings"
            size="sm"
            className="w-[40%]"
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export { BookingDetail };
