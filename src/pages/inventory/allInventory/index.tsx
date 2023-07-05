import { InboundHistory } from "@/_tabs/Inventory/all/inboundHistory";
import { AllInventoryTable } from "@/components/InventoryTable";
import { DashBoardLayout } from "@/layout";
import { DashBoardRoutes } from "@/utils";
import { Tab } from "@headlessui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import { SelectedInventoryModal } from "@/_tabs/Inventory/modals/SelectedInventoryModal";
import { InternalOrdersPostRequestType } from "@/_tabs/Inventory/types/inventory-order-types";
import { StoreState } from "@/store/types/store-state.types";
import { StateReducerActions } from "@/types";
import { useDispatch, useSelector } from "react-redux";

enum tabsEnum {
  ALL_INVENTORY = "ALL_INVENTORY",
  INBOUND_HISTORY = "INBOUND_HISTORY",
}
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Inventory() {
  const router = useRouter();
  const [showUploadButton, setShowUploadButton] = useState(true);
  const { selectedInventoryItemsToOrder } = useSelector(
    (state: StoreState) => state
  );

  const [activeTab, setActiveTab] = useState<tabsEnum>(tabsEnum.ALL_INVENTORY);
  const [open, setOpen] = useState(false);
  const handleProcessItemsClick2: any = () => {
    setShowUploadButton(false);
  };
  const dispatch = useDispatch();

  type generateNewOrderItemType = ({
    storageFacilityId,
    orderItems,
  }: {
    storageFacilityId: any;
    orderItems: any;
  }) => InternalOrdersPostRequestType;

  const generateNewOrderItem: generateNewOrderItemType = ({
    storageFacilityId,
    orderItems,
  }) => {
    const order = new InternalOrdersPostRequestType();
    order.storageFacilityId = storageFacilityId;
    order.customerId = "";
    order.deliveryAddress = "";
    order.deliveryLGA = "";
    order.deliveryState = "";
    order.dispatchTime = "";
    order.numberOfItems = 1;
    order.paymentMode = "";
    order.pickUpAddress = "";
    order.pickUpTime = "";
    order.reciepientName = "";
    order.reciepientPhoneNo = "";
    order.orderItems = orderItems;
    return order;
  };

  const addAllItemsToVan = () => {
    dispatch({
      type: StateReducerActions.ADD_MULTIPLE_INVENTORY_ITEM_TO_VAN,
      payload: selectedInventoryItemsToOrder.map((it) =>
        generateNewOrderItem({
          storageFacilityId: it.storageFacilityId,
          orderItems: [
            {
              itemName: it?.itemName,
              orderQuantity: it?.orderQuantity,
              dimension: it.size.toString(),
              unitPrice: it?.unitPrice,
              quantity: it?.quantity,
              skuId: it?.skuId,
            },
          ],
        })
      ),
    });
    router.push("/ordermgt/deliveryVan");
  };

  return (
    <>
      {/* <ImagePreview /> */}
      <DashBoardLayout>
        <div className="rounded  border-1 h-full  pt-2">
          {showUploadButton && (
            <>
              <div className="flex justify-between items-center border-b-2">
                <div className=" p-7 flex flex-col ">
                  <h1 className="text-3xl font-extrabold">
                    {" "}
                    {activeTab === tabsEnum.ALL_INVENTORY
                      ? "All Inventory"
                      : "Inbound History"}
                  </h1>
                </div>
                <div className="flex justify-center gap-2 mr-7">
                  <button>
                    <div
                      style={{ backgroundColor: `#1B547F` }}
                      onClick={() =>
                        router.push(DashBoardRoutes.INVENTORY_TOPUP)
                      }
                      className=" flex items-center bg-[#1B547F] justify-center w-36 h-10 px-3 cursor-pointer  rounded-md text-xs font-semibold text-center items-center  text-white"
                    >
                      Top-Up Stock
                    </div>
                  </button>
                  <button
                    onClick={() => setOpen(true)}
                    className=" flex items-center justify-center w-36 h-10 px-3  cursor-pointer  border-1 rounded-md border-blue-900 text-[#1B547F] text-xs font-semibold"
                  >
                    Create Order
                  </button>
                </div>
              </div>
            </>
          )}
          {!showUploadButton && (
            <div className="border-b-2 border-b-gray-300  flex items-center justify-between">
              <div className=" flex flex-col ">
                <h1 className="text-3xl font-extrabold"></h1>
              </div>
              <div></div>
            </div>
          )}

          <div className="w-full px-10 py-5">
            <Tab.Group>
              <div className="flex pt-3 gap-1  rounded-sm  justify-between text-center">
                {" "}
                <Tab.List className="flex">
                  {Object.values(tabsEnum).map((header, idx) => (
                    <Tab
                      key={idx}
                      onClick={() => setActiveTab(header)}
                      className={({ selected }) =>
                        classNames(
                          "py-3 px-7 outline-none rounded-tl-lg rounded-tr-lg clip-path-polygon",

                          selected ? "bg-primary text-white  " : "bg-[#f4f4f4]"
                        )
                      }
                    >
                      {header.replace("_", " ")}
                    </Tab>
                  ))}
                </Tab.List>
                <div className="flex">
                  <div className="flex-inline justify-end ">
                    <div></div>
                    <div className="flex gap-2 mr-2">
                      <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-300 p-2 rounded"
                      />

                      <select className="border border-gray-300 p-2 rounded">
                        <option value="">Filter by Storage Facility</option>
                        <option value="facility1">Facility 1</option>
                        <option value="facility2">Facility 2</option>
                        <option value="facility3">Facility 3</option>
                      </select>

                      <input
                        type="date"
                        placeholder="Filter by Date"
                        className="border border-gray-300 p-2 rounded"
                      />
                      <div className="inline-flex items-center justify-center px-2.5 py-1.5 bg-black bg-opacity-50 border rounded-sm border-black border-opacity-50">
                        <p className="text-xs text-center text-white">Export</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <Tab.Panel style={{ padding: 0 }}>
                  <AllInventoryTable />
                </Tab.Panel>
                <Tab.Panel>
                  <InboundHistory />
                </Tab.Panel>
              </div>
            </Tab.Group>
          </div>
        </div>
      </DashBoardLayout>
      <SelectedInventoryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
