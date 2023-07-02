import { Button } from "@/components";
import { ArrowLeftIcon } from "@/icons/arrow-left";
import ArrowRightIcon from "@/icons/arrow-right";
import { LaptopIcon } from "@/icons/laptop";

const ApiCreateOrderDetail = () => {
  return (
    <>
      <div className="grid gap-3 justify-center items-center bg-gray-200">
        <div className="flex gap-3 mt-15 my-3 justify-center">
          <LaptopIcon />
          <div className="">
            <ArrowRightIcon />
            <ArrowLeftIcon />
          </div>
          <LaptopIcon />
        </div>

        <div>
          <div>
            <h1 className="grid justify-center text-lg font-extrabold">
              Import inventory from your ApI
            </h1>
            <p
              className="grid justify-center mt-2 text-gray-200"
              style={{ color: "#000000" }}
            >
              To import your inventory details, connect to your platform
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center my-3">
          <Button title={"Connect"} size="sm" className="w-40" />
        </div>
      </div>
    </>
  );
};

export { ApiCreateOrderDetail };
