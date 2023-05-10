import { ImageWindowIcon } from "@/icons";
import { Button } from "../Button";
const StorageCard = () => {
  return (
    <div className="p-5 border-gray-300 border-2 rounded">
      <div className="relative ">
        <img
          src="/assets/images/storage-0.png"
          className="w-full object-cover rounded"
        />
        <p className="absolute top-[20px] font-bold p-2 text-white bg-orange-400 rounded-r">
          Dedicated storage
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-3">
        <div>
          <div className=" flex justify-between items-center">
            <p className="font-extrabold">Name of Storage Facilities</p>
            <div className="cursor-pointer">
              <ImageWindowIcon />
            </div>
          </div>
        </div>

        <div>
          <p className="text-[10px]">
            {" "}
            6 Months | Badagry | Available Space (100qm)
          </p>
        </div>
        <div>
          <p>
            From <span className="font-bold text-1xl">NGN 780,000</span>
          </p>
        </div>
        <Button title="Contact Us" size="sm" />
      </div>
    </div>
  );
};

export { StorageCard };
