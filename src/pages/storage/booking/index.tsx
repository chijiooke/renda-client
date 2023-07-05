import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { StoreState } from "@/store/types/store-state.types";
import { StateReducerActions } from "@/types";
import { DashBoardRoutes, baseURL, formatCurrency } from "@/utils";
import axios from "axios";
import cn from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/router";
import { MouseEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { StoreState } from "@/store/reducer";

dayjs.extend(relativeTime);
export default function StorageBooking() {
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const { userId, user } = useSelector((state: StoreState) => state);

  const getBookings = async () => {
    try {
      const { data } = await axios.get(
        baseURL + `api/bookings/GetCustomerbyId/${user?.customerId}`
      );
      setBookings(data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getBookings();
  }, []);
  return (
    <>
      <DashBoardLayout backAction>
        <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
          <div className="border-b-2 border-b-gray-300 p-7 flex items-center justify-between">
            <h1 className="text-2xl font-extrabold">Storage Booking</h1>
            <div>
              <Button
                title="Book New Storage"
                size="sm"
                className="max-w-sm"
                handleClick={() => router.push(DashBoardRoutes.STORAGE)}
              />
            </div>
          </div>
          <div className="p-10">
            <p className="my-5 text-primary font-semibold">Bookings</p>
            <div className="flex flex-col w-full">
              <div className="grid grid-cols-8 justify-between   p-5 bg-[#f9f9f9] rounded border-1 border-[#bbbbbb] uppercase text-[#959595] font-bold">
                <p>Status</p>
                <p>Booking Id</p>
                <p>Facility name</p>
                <p>Start date</p>
                <p>End date</p>
                <p>Duration</p>
                <p>Amount</p>
                <p>Action</p>
              </div>
            </div>
            <div>
              {bookings.map((booking, idx) => (
                <TableData data={booking} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
}

const TableData = ({ data }: { data: any }) => {
  const time = dayjs(data?.startDate).to(dayjs(data?.endDate), true);
  const router = useRouter();
  const dispatch = useDispatch();

  const goToDetails: MouseEventHandler<HTMLDivElement> = (e) => {
    const path = e.nativeEvent.composedPath();
    if ((path[0] as HTMLElement)?.innerText !== "Make Payment") {
      dispatch({
        type: StateReducerActions.SET_BOOKING_DETAILS,
        payload: {
          amount: data?.amount,
          bookingId: data?.bookingId,
        },
      });
      router.push({
        pathname: DashBoardRoutes.BOOKING_DETAILS,
        query: { id: data?.bookingId },
      });
    }
  };
  const goToPayments: MouseEventHandler<HTMLDivElement> = () => {
    dispatch({
      type: StateReducerActions.SET_BOOKING_DETAILS,
      payload: {
        amount: data?.amount,
        bookingId: data?.bookingId,
      },
    });
    router.push(DashBoardRoutes.BOOKING_PAYMENT);
  };
  return (
    <div
      className="grid grid-cols-8 justify-evenly p-5 items-center cursor-pointer"
      onClick={goToDetails}
    >
      <p
        className={cn("", {
          "text-green-600":
            data?.status === "Approved" || data?.status === "Active",
          "text-red-500": data?.status === "Expired",
          "text-orange-400": data?.status === "Pending",
        })}
      >
        {data?.status}
      </p>
      <p>#{data?.bookingId}</p>
      <p className="px-[5px]">{data?.facilityName} </p>
      <p>{dayjs(data?.startDate).format("DD/MM/YY")}</p>
      <p>{dayjs(data?.endDate).format("DD/MM/YY")}</p>
      <p>{time}</p>
      <p>N{formatCurrency(data?.amount)} </p>
      <p
        className={cn(
          "bg-[#E1E1E1] rounded-lg font-semibold text-center capitalize text-[#979797] p-1 cursor-not-allowed",
          {
            "bg-[#c7ecff] text-primary cursor-pointer":
              data?.status === "Approved",
          }
        )}
        onClick={(e) => {
          data?.status === "Approved" && goToPayments(e);
        }}
      >
        Make Payment
      </p>
    </div>
  );
};
