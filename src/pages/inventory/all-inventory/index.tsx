import { DashBoardLayout } from "@/layout";
import { DashBoardRoutes, baseURL } from "@/utils";
import { Tab } from "@headlessui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { AllInventoryTableDetails } from "@/components/InventoryTable/AllInventoryTable";
import { SelectedInventoryModal } from "@/modules/inventory/modals/SelectedInventoryModal";
import { InboundHistory } from "@/modules/inventory/sub-modules/inbound-history/inboundHistory";
import {
  InventoryDataType,
  InventoryItemType,
  StorageFacilityType,
} from "@/modules/inventory/types/inventory-data-type";
import { StoreState } from "@/store/types/store-state.types";
import axios from "axios";
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
  const { user } = useSelector((state: StoreState) => state);

  const [activeTab, setActiveTab] = useState<tabsEnum>(tabsEnum.ALL_INVENTORY);
  const [storageFacilityFiltersList, setStorageFacilityFiltersList] = useState<
    StorageFacilityType[] | null
  >(null);
  const [inventories, setInventories] = useState<InventoryDataType[]>([]);

  const [loadingInventoryItems, setloadingInventoryItems] =
    useState<boolean>(false);
  const [storageFacilityFilter, setStorageFacilityFilter] =
    useState<string>("");

  const [open, setOpen] = useState(false);

  const refinedData: InventoryItemType[] = inventories
    ?.map((inventory) =>
      inventory?.inventoryItems?.map((inventoryItem) => {
        return {
          ...inventoryItem,
          storageFacility: inventory.storageFacility,
          storageFacilityId: inventory.storageFacilityId,
        };
      })
    )
    .flatMap((inv) =>
      inv?.filter(
        (inv) => !!inv.skuId && storageFacilityFilter === inv.storageFacilityId
      )
    );

  const fetchData = async () => {
    if (!user?.customerId) return;
    try {
      const { data } = await axios.get(
        baseURL +
          `api/customers/${user?.customerId}/InboundInventory/inventories`
      );
      setInventories(data);

      if (!!data) {
        setStorageFacilityFiltersList(
          (data as InventoryDataType[]).map((it) => it?.storageFacility)
        );
        setStorageFacilityFilter(
          (data as InventoryDataType[]).map((it) => it?.storageFacilityId)[0]
        );
      }
    } catch (error) {
      console.error("Failed to fetch data from the endpoint:", error);
    } finally {
      setloadingInventoryItems(false);
    }
  };

  useEffect(() => {
    setloadingInventoryItems(true);
    fetchData();
  }, [user?.customerId]);

  const dispatch = useDispatch();

  return (
    <>
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
              <div className="flex pt-3 gap-1  rounded-sm  justify-between text-center max-w-full">
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
                <select
                  className="border border-gray-300 p-2 rounded"
                  value={storageFacilityFilter}
                  onChange={(e) => setStorageFacilityFilter(e.target.value)}
                >
                  <option value="">Filter by Storage Facility</option>
                  {storageFacilityFiltersList?.map((item) => (
                    <option value={item?.storageFacilityId}>
                      {item?.storageFacilityName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                {" "}
                <Tab.Panel style={{ padding: 0, margin: 0 }}>
                  <AllInventoryTableDetails
                    loading={loadingInventoryItems}
                    data={
                      !!refinedData ? refinedData : ([] as InventoryItemType[])
                    }
                  />
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
