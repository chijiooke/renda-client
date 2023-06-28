import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import {
  BookingDetail,
  RenewalDetails,
  StorageDetail,
  TransactionDetails,
} from "@/_tabs/storage/booking";
import { useRouter } from "next/router";
import { baseURL } from "@/utils";
import axios from "axios";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const clipStyle = {
  clipPath:
    "polygon(, 74% 074% 1%, 0% 1%, 0% 1%, 0% 99%, 0% 99%, 99% 100%, 74% 0);",
};
const headers = [
  "Booking Details",
  "Storage Details",
  "Transaction Details",
  "Renewals",
];
// Task: write interface for both booking details and storage facility

const BookingDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [details, setDetails] = useState({});
  const getBookingDetails = async () => {
    try {
      const { data } = await axios.get(baseURL + `api/bookings/booking/${id}`);
      setDetails(data);
    } catch (error) {}
  };
  useEffect(() => {
    getBookingDetails();
  }, []);
  return (
    <DashBoardLayout backAction>
      <div className="rounded border-1 border-gray-300 h-[83vh] pt-2">
        <div className="border-b-2 border-b-gray-300 p-7 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">Booking</h1>
          <div>
            <Button
              title="Add inventory to storage facility"
              size="sm"
              disabled
            />
          </div>
        </div>
        <div className="w-full px-10 py-5">
          <Tab.Group>
            <Tab.List className="flex py-3 gap-1">
              {headers.map((header, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    classNames(
                      "py-3 px-7 outline-none rounded-tl-lg  ",
                      selected ? "bg-primary text-white  " : "bg-[#f4f4f4]"
                    )
                  }
                >
                  {header}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panel>
              <BookingDetail data={details} />
            </Tab.Panel>
            <Tab.Panel>
              <StorageDetail data={details} />
            </Tab.Panel>
            <Tab.Panel>
              <TransactionDetails data={details} />
            </Tab.Panel>
            <Tab.Panel>
              <RenewalDetails />
            </Tab.Panel>
          </Tab.Group>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default BookingDetails;
