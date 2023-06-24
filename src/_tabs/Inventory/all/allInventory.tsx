import { AddForm, Button, Input } from "@/components";
import { AllInventoryTable } from "@/components/InventoryTable";
import { AddIcon, CheckIcon, DeleteIcon } from "@/icons";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";

const AllInventory = () => {
  const router = useRouter();
  return (
    <div className="relative">
      <AllInventoryTable />
    </div>
  );
};

export { AllInventory };
