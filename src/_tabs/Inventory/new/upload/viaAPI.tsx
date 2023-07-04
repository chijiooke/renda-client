import { Button } from "@/components";
import { UploadArea } from "@/components/UploadArea";
import { CheckIcon, ComputerIcon, DoubleArrow } from "@/icons";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";

const AddViaApi = () => {
  const router = useRouter();
  return (
    <div>
      <div className={`my-5 h-[300px] bg-gray-200 py-3`} style={{ width: 684 }}>
        <input type="file" style={{ display: "none" }} />
        <div className="flex flex-col items-center justify-center h-full py-10 ">
          <div className="text-center">
            <div className="flex items-center justify-center">
              {/* <UploadIcon /> */}
              <ComputerIcon />
              <DoubleArrow />
              <ComputerIcon />
            </div>
            <div className="inline-flex flex-col space-y-96  justify-end w-96">
              <p className="text-sm font-semibold">
                Import inventory from your Platorm
              </p>
              <p className="text-xs font-medium leading-snug text-black text-opacity-50">
                To import your inventory details, connect to your platform
              </p>
            </div>
            <div className="inline-flex space-x-1 items-center justify-center h-10 px-3 py-2 bg-blue-900 rounded">
              <p className="text-xs font-semibold leading-none text-white">
                Connect
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AddViaApi };
