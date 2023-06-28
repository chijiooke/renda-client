import { Button } from "@/components";
import { CheckIcon } from "@/icons";
import { DashBoardLayout } from "@/layout";
import { BookStorageModal } from "@/modals";

import { useRouter } from "next/router";
import axios from "axios";
import { imageURL, storageURL } from "@/utils/constant";
import { formatCurrency } from "@/utils";
import cn from "classnames";
interface mediaType {
  storageFacilityId: string;
  storageFacilityMediaId: string;
  storageFacilityMediaLocation: string;
}
import { useLayoutEffect, useMemo, useState } from "react";
const Facility = () => {
  const router = useRouter();
  const [facility, setFacility] = useState({} as any);
  const [show, setShow] = useState(false);
  const { id } = router.query;
  const getFacilityDetails = async () => {
    try {
      const { data } = await axios.get(storageURL + "api/v1/Storage/" + id);
      setFacility(data);
    } catch (error) {}
  };

  useLayoutEffect(() => {
    getFacilityDetails();
  }, [id]);
  const details = useMemo(() => {
    return {
      "Facility ID": facility?.storageFacilityId,
      "Storage Size": facility?.totalSpaces + "sqm",
      "Available Space": facility?.availableSpace + "sqm",
      "Storage Location": facility?.locationOfStorage,

      "Minimum duration of usage":
        facility?.minimumDurationOfUsage + " " + "Months",

      "Storage Type": facility?.storageType,
      "Payment Structure": facility?.paymentStructure,

      "Price per sqm": "NGN" + " " + formatCurrency(facility?.rendaPrice),
    };
  }, [facility]);

  const images = useMemo(() => {
    const { storageFacilityMedia: media } = facility;
    return media?.map(
      (m: mediaType) => imageURL + m.storageFacilityMediaLocation
    );
  }, [facility]);
  return (
    <>
      <BookStorageModal
        close={() => setShow(false)}
        show={show}
        data={facility}
      />

      <DashBoardLayout backAction backText="Back to Storage">
        {Object.keys(facility).length > 0 && (
          <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
            <div className="border-b-2 border-b-gray-300 p-7 flex justify-between items-center">
              <h1 className="text-2xl font-extrabold">Storage Facilities</h1>
              {/* <div className="bg-[#EAF6FF] p-3 rounded border-1 border-[#1B547F] flex gap-4">
                <img src="/assets/images/box-check.svg" />
                <p className="font-normal">
                  Notify me when there is more space available
                </p>
              </div> */}
            </div>
            <div className="flex gap-10 p-10">
              <div className="grid grid-cols-2 gap-5">
                {images.slice(0, 3).map((m: string, i: number) => (
                  <img
                    key={i}
                    src={m}
                    className={cn(
                      "w-full object-cover rounded  row-span-5 h-[300px] md:w-[300px]",
                      {
                        "col-span-2 md:w-[600px]": i === 0,
                      }
                    )}
                  />
                ))}
              </div>
              <div>
                <div className="mb-10 max-w-4xl">
                  <h1 className="text-[25px] font-bold my-3 capitalize">
                    {facility?.storageFacilityName}
                  </h1>
                  <p className="leading-10">{facility?.briefDescription}</p>
                  <ul className="flex flex-wrap gap-3 max-w-2xl my-5">
                    {facility?.amenities
                      .split(",")
                      .map((f: string, i: number) => (
                        <li
                          className="text-[16px] pr-8 flex items-center gap-3"
                          key={i}
                        >
                          {" "}
                          <CheckIcon />
                          {f}
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h1 className="text-[18px] font-bold my-10">
                    Facility Details
                  </h1>
                  <div>
                    {Object.entries(details).map((detail, idx) => (
                      <div
                        className="grid gap-1 grid-cols-2 max-w-2xl my-5"
                        key={idx}
                      >
                        <p className="text-[14px]">{detail[0]}</p>
                        <p className="text-[14px] opacity-60">{detail[1]}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w[50%] my-6">
                  <Button
                    title="Book Storage"
                    className="w-[90%]"
                    size="sm"
                    handleClick={() => setShow(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </DashBoardLayout>
    </>
  );
};

// e;
export default Facility;
