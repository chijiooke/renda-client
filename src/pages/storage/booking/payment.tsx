import {
  BankTransfer,
  CardPayment,
  GenerateInvoice,
} from "@/_tabs/storage/payment";
import { BankIcon, RightArrowWithBg, DebitCardIcon } from "@/icons";
import { DashBoardLayout } from "@/layout";
import { Tab } from "@headlessui/react";

const tabs = [
  // {
  //   icon: DebitCardIcon,
  //   title: "Generate Invoice",
  //   text: "Pay with your Debit card",
  // },
  {
    icon: DebitCardIcon,
    title: "Pay  Instantly",
    text: "Pay with your Debit card",
  },
];
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function StoragePayment() {
  return (
    <DashBoardLayout backAction backText="Back to Storage Payment ">
      <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
        <div className="border-b-2 border-b-gray-300 p-7">
          <h1 className="text-2xl font-extrabold">Book Storage - Payment</h1>
        </div>
        <div className="w-full  p-10">
          <Tab.Group vertical>
            <div className="flex gap-15">
              <div>
                <Tab.List className="flex justify-start flex-col  bg-[#f2f2f2]  rounded">
                  {tabs.map(({ title, icon: Icon, text }, idx) => (
                    <Tab
                      key={idx}
                      className={({ selected }) =>
                        classNames(
                          "flex gap-10 p-10 outline-none item-center justify-between cursor-pointer",
                          selected ? "bg-[#EDF9FF]" : ""
                        )
                      }
                    >
                      <div className="flex items-center gap-5">
                        <div className="bg-[#d9d9d9] p-5 rounded-full  ">
                          <Icon />
                        </div>

                        <div>
                          <p className="text-black font-bold text-[14px] text-start">
                            {title}
                          </p>
                          <p className="text-[12px] opacity-50">{text}</p>
                        </div>
                      </div>
                      <RightArrowWithBg />
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels>
                {/* <Tab.Panel>
                  <GenerateInvoice />
                </Tab.Panel> */}
                <Tab.Panel>
                  <CardPayment />
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </DashBoardLayout>
  );
}
