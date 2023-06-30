import { AllInventoryTable } from "@/components/InventoryTable";
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
