import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import {
  BookingDetail,
  RenewalDetails,
  StorageDetail,
  TransactionDetails,
} from "@/_pages/storage/booking";
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
const BookingDetails = () => {
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
              <BookingDetail />
            </Tab.Panel>
            <Tab.Panel>
              <StorageDetail />
            </Tab.Panel>
            <Tab.Panel>
              <TransactionDetails />
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
