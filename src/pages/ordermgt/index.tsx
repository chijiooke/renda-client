import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { ExternalOrders } from "@/_tabs/ordermgt/externalOrders";
import { InventoryOrders } from "@/_tabs/ordermgt/inventoryOrders";
import { Tab } from "@headlessui/react";
import { CreateOrderModal } from "@/modals/createordermodal";
import { useState } from "react";
import { capitalizeText } from "@/utils/capitalizeText";
import { ExternalOrderDetailsModal } from "@/modals/externalDetailsModal";

export enum OrderManagementTabsEnum {
  INVENTORY_ORDERS = "INVENTORY_ORDERS",
  EXTERNAL_ORDERS = "EXTERNAL_ORDERS",
}

export default function Ordermgt() {
  let [isOpen, setIsOpen] = useState(false);
  let [openCreateModal, setopenCreateModal] = useState(false);
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
      <div className="rounded border-1 border-gray-300  h-[83vh] pt-2">
        <div className="border-b-2 border-b-gray-300 p-7 flex justify-between">
          <h1 className="text-2xl font-extrabold">Order Management</h1>
          <div className="mr-6 w-72">
            <Button
              handleClick={() => setIsOpen(true)}
              title="Create Order"
              size="sm"
            />
          </div>
        </div>

        <div className="w-full px-10 py-5">
          <Tab.Group
            onChange={(index) => {
              setModalType(
                index === 0
                  ? OrderManagementTabsEnum.INVENTORY_ORDERS
                  : OrderManagementTabsEnum.EXTERNAL_ORDERS
              );
            }}
          >
            <Tab.List className="flex py-3 gap-1">
              {Object.keys(OrderManagementTabsEnum).map((header, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    classNames(
                      "py-3 px-7 outline-none rounded-tl-lg  ",
                      selected ? "bg-primary text-white  " : "bg-[#f4f4f4]"
                    )
                  }
                >
                  {capitalizeText(header.replace("_", " "))}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panel>
              <InventoryOrders openModal={() => setIsOpen(true)} />
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
          setopenCreateModal(true);
        }}
        show={isOpen}
        close={() => setIsOpen(false)}
        modalType={modalType}
      />
      <ExternalOrderDetailsModal
        show={openCreateModal}
        close={(data) => {
          if (!data) {
            setopenCreateModal(false);
          }
          setopenCreateModal(false);
          createExternalOrder();
        }}
      />
    </DashBoardLayout>
  );
}
