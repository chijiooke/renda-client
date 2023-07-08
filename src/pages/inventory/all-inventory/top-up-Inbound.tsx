import { TopUpTableDetails } from "@/components/InventoryTable";
import { DashBoardLayout } from "@/layout";
import { ProcessItemsComponent } from "@/modals";
import { useRouter } from "next/router";

export default function ConfirmInventory() {
  const router = useRouter();

  return (
    <DashBoardLayout backAction>
      <div className="relative rounded border-gray-300 pt-2">
        <div className=" border-b-2 border-b-gray-300 p-7 flex items-center  justify-between">
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
