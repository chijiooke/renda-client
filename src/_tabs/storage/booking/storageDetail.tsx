import { Button } from "@/components";
import { CheckIcon } from "@/icons";
import { formatCurrency } from "@/utils";

const StorageDetail = ({ data }: { data: any }) => {
  const { storageDetails } = data;
  const details = {
    "Facility ID": storageDetails?.storageFacilityID,
    "Location of the facility": storageDetails?.locationOfTheFacility,
    "Name of the storage facility": storageDetails?.nameOfTheStorageFacility,
    "Minimum duration of usage":
      storageDetails?.minimumOurationOfUsage + "Months",
    Description: storageDetails?.description,
    Amenities: (
      <ul className="flex flex-wrap gap-3 max-w-2xl ">
        {storageDetails?.amenities?.split(",").map((a: string, i: number) => (
          <li key={i} className="text-[14px] pr-8 flex items-center gap-3">
            {" "}
            <CheckIcon />
            {a}
          </li>
        ))}
      </ul>
    ),
    "Price per sqm": "N" + formatCurrency(storageDetails.price),
  };
  return (
    <div className=" grid grid-cols-3 justify-between my-5 gap-5">
      <div className="col-span-2">
        {Object.entries(details).map((b: string[], i: any) => (
          <div className="grid grid-cols-2 py-4">
            <p>{b[0]}</p>
            <span>{b[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { StorageDetail };
