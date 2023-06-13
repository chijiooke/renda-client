import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";
import { ConfirmModal, MyModal, ProcessItemsComponent, StorageSelect } from "@/modals";
import { TableDetails } from "@/components/InventoryTable/table details";
import { TopUpTableDetails } from "@/components/InventoryTable";

export default function ConfirmInventory() {
  const router = useRouter();

  return (
    <DashBoardLayout backAction>
      <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
        <div className="border-b-2 border-b-gray-300 p-7 flex items-center relative justify-between">
          <div className="flex justify-between  space-y-1.5 ">
            <div className="flex">
              <p className="text-xl font-semibold ">Top Up Stock in Bulk </p>
            </div>
          </div>
          <ProcessItemsComponent />
        </div>
        <TopUpTableDetails />
      </div>
    </DashBoardLayout>
  );
}
