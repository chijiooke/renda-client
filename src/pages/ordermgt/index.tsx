import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { ExternalOrders } from "@/_pages/ordermgt/externalOrders";
import { InventoryOrders } from "@/_pages/ordermgt/inventoryOrders";
import { Tab } from "@headlessui/react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Ordermgt() {
  const headers = ["Inventory Orders", "External orders"];

  return (
    <DashBoardLayout backAction backText="back">
      <div className="rounded border-1 border-gray-300  h-[83vh] pt-2">
        <div className="border-b-2 border-b-gray-300 p-7 flex justify-between">
          <h1 className="text-2xl font-extrabold">Order Management</h1>
          <div className="mr-6 w-72">
            <Button title="Create Order" size="sm" />
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
              <InventoryOrders />
            </Tab.Panel>
            <Tab.Panel>
              <ExternalOrders />
            </Tab.Panel>
          </Tab.Group>
        </div>
      </div>
    </DashBoardLayout>
  );
}
