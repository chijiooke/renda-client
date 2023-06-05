import { Button } from "@/components";
import { CheckIcon, UploadIcon } from "@/icons";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";

const AddViaCsv = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full">
        <div className="ml-10 mt-5">
          <p className="text-sm font-semibold">Upload your CSV file</p>

          <div className=" my-5 h-[300px] bg-gray-200 " style={{ width: 684 }}>
            <div className="flex flex-col items-center justify-center h-full py-10">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <UploadIcon />
                </div>
                <p className="text-xs leading-tight">
                  Click to upload or drag to upload
                </p>
                <p className="text-xs pt-4 leading-tight text-black text-opacity-50">
                  Only CSV files are allowed
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs leading-snug" style={{ width: 684 }}>
            To import your inventory details from CSV file, it has to be
            formatted correctly. Each file should have an Item name, <br />{" "}
            Quantity, Size, Picture of the Item, SKU ID, Unit Price, Brief
            Description. Click to download CSV Sample
          </p>
        </div>
      </div>
    </div>
  );
};

export { AddViaCsv };
