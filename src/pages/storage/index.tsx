import { useEffect, useState } from "react";
import { DashBoardLayout, ReactPortal } from "@/layout";
import { GetInTouch, Input, Select, StorageCard } from "@/components";
import { useRouter } from "next/router";
import { DashBoardRoutes } from "@/utils";
import { ArrowNextIcon, ArrowPreviousIcon } from "@/icons";
import { ConfirmModal } from "@/modals/success";
import axios from "axios";
import { storageURL } from "@/utils/constant";
import { BookStorageModal } from "@/modals";
export default function Storage() {
  const router = useRouter();
  const [facilities, setFacilities] = useState([]);
  const getStorage = async () => {
    try {
      const { data } = await axios.get(storageURL + "api/v1/Storage");
      setFacilities(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStorage();
  }, []);
  return (
    <>
      {/* <BookStorageModal /> */}
      <DashBoardLayout>
        <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
          <div className="border-b-2 border-b-gray-300 p-7 flex justify-between">
            <h1 className="text-2xl font-extrabold">Storage Facilities</h1>
            <div className="flex gap-3 items-center">
              <Input placeholder="Search" size="sm" className="w-100" />
              <Select options={["1", "2"]} size="sm" placeholder="Duration" />
              <Select
                options={["Shared", "Dedicated"]}
                size="sm"
                placeholder="Storage type"
              />
            </div>
          </div>
          {facilities.length > 0 && (
            <div className="grid md:grid-cols-4 md:gap-8 p-6 mt-5 grid-cols-1 ">
              {facilities.map((facility: any, idx) => (
                <StorageCard
                  data={facility}
                  key={idx}
                  handleClick={() =>
                    router.push({
                      pathname: DashBoardRoutes.STORAGE_DETAILS,
                      query: { facility: facility?.storageFacilityId },
                    })
                  }
                />
              ))}
              <GetInTouch />
            </div>
          )}
        </div>
      </DashBoardLayout>
    </>
  );
}

const ImagePreview = () => {
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <ArrowPreviousIcon />
      <div className="">
        <img src="/assets/images/storage-lg-0.png" />
      </div>
      <ArrowNextIcon />
    </ReactPortal>
  );
};
