import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";

import { Tab } from "@headlessui/react";
import { CreateOrderModal } from "@/modals/createordermodal";
import { useState } from "react";
import { capitalizeText } from "@/utils/capitalizeText";
import { CreateExternalOrderModal } from "@/modals/CreateExternalOrderModal";
import { InventoryOrders } from "@/_tabs/ordermgt/InventoryOrders";
import { ExternalOrders } from "@/_tabs/ordermgt/ExternalOrders";

export enum OrderManagementTabsEnum {
  INVENTORY_ORDERS = "INVENTORY_ORDERS",
  EXTERNAL_ORDERS = "EXTERNAL_ORDERS",
}

export default function Ordermgt() {
  let [isOpen, setIsOpen] = useState(false);
  let [isSingleOrderModalOpen, setIsSingleOrderModalOpen] = useState(false);
  let [modalType, setModalType] = useState<OrderManagementTabsEnum>(
    OrderManagementTabsEnum.INVENTORY_ORDERS
  );

  const createExternalOrder = () => {};

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }
  const clipStyle = {
    clipPath:
      "polygon(, 74% 074% 1%, 0% 1%, 0% 1%, 0% 99%, 0% 99%, 99% 100%, 74% 0);",
  };

  return (
    <DashBoardLayout backAction backText="back">
      <div className="rounded border-1 border-gray-300  pt-2">
        <div className="border-b-2 border-b-gray-300 p-7 flex justify-between">
          <h1 className="text-2xl font-extrabold">Order Management</h1>
          <div className="">
            <Button
              title="Create Order"
              size="sm"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>

        <div className="w-full px-10 ">
          <Tab.Group
            onChange={(index) => {
              setModalType(
                index === 0
                  ? OrderManagementTabsEnum.INVENTORY_ORDERS
                  : OrderManagementTabsEnum.EXTERNAL_ORDERS
              );
            }}
          >
            <Tab.List className="flex pt-3 gap-1">
              {Object.keys(OrderManagementTabsEnum).map((header, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    classNames(
                      "py-3 px-7 outline-none rounded-tl-lg clip-path-polygon  ",
                      selected ? "bg-primary text-white  " : "bg-[#f4f4f4]"
                    )
                  }
                >
                  {capitalizeText(header.replace("_", " "))}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panel>
              <InventoryOrders
                openModal={() => {
                  setIsOpen(true);
                }}
              />
            </Tab.Panel>
            <Tab.Panel>
              <ExternalOrders openModal={() => setIsOpen(true)} />
            </Tab.Panel>
          </Tab.Group>
        </div>
      </div>
      <CreateOrderModal
        openCreateModal={() => {
          setIsOpen(false);
          setIsSingleOrderModalOpen(true);
        }}
        show={isOpen}
        close={() => setIsOpen(false)}
        modalType={modalType}
      />
      <CreateExternalOrderModal
        show={isSingleOrderModalOpen}
        close={(data) => {
          if (!data) {
            setIsSingleOrderModalOpen(false);
          }
          setIsSingleOrderModalOpen(false);
          createExternalOrder();
        }}
      />
    </DashBoardLayout>
  );
}
