import { AddForm, Button, Input } from "@/components";
import { AddIcon, CheckIcon, DeleteIcon } from "@/icons";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";

const AddNewInventory = () => {
  const router = useRouter();
  return (
    <div className="relative">

    
      <AddForm />

    </div>
  );
};

export { AddNewInventory };
