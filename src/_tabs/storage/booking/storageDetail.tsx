import { Button } from "@/components";
import { CheckIcon } from "@/icons";

const StorageDetail = () => {
  return (
    <div className=" grid grid-cols-3 justify-between my-5 gap-5">
      <div className="col-span-2">
        <div className="grid grid-cols-2 py-4">
          <p>Facility ID</p>
          <p>RND234656</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Location of the facility</p>
          <p>Lagos Island, Lagos</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Name of the storage facility</p>
          <p>Name of storage facility</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Minimum duration of usage</p>
          <p>6 Months</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Description</p>
          <p>
            Facility Description Lorem ipsum dolor sit amet consectetur. Euismod
            ac duis malesuada nascetur facilisi sed risus.
          </p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Amenities</p>
          <ul className="flex flex-wrap gap-3 max-w-2xl ">
            <li className="text-[14px] pr-8 flex items-center gap-3">
              {" "}
              <CheckIcon />
              Inbound Shipping
            </li>
            <li className="text-[14px] pr-8 flex items-center gap-3">
              <CheckIcon />
              Delivery
            </li>{" "}
            <li className="text-[14px] pr-8 flex items-center gap-3">
              <CheckIcon />
              Cash Collection
            </li>{" "}
            <li className="text-[14px] pr-8 flex items-center gap-3">
              <CheckIcon />
              Generator
            </li>{" "}
            <li className="text-[14px] pr-8 flex items-center gap-3">
              <CheckIcon />
              Returns Management
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Price</p>
          <p>NGN 780,000</p>
        </div>
        <div className="grid grid-cols-2 py-4">
          <p>Pictures of the storage facility</p>
          <span className="flex gap-5">
            <img
              src="/assets/images/storage-0.png"
              className="w-full object-cover rounded"
            />{" "}
            <img
              src="/assets/images/storage-0.png"
              className="w-full object-cover rounded"
            />{" "}
            <img
              src="/assets/images/storage-0.png"
              className="w-full object-cover rounded"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export { StorageDetail };
