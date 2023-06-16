import React, { useState, useEffect } from "react";
import { ConfirmModal, MyModal } from "@/modals";
import axios from "axios";
import { Button } from "@/components";

interface MyModalProps {
  onClose: () => void;
  show: boolean;
  handleSubmit: (id: string) => void;
}
interface StorageFacility {
  storageFacilityId: string;
  storageFacilityName: string;
  // Add other necessary properties here
}

const StorageSelectModal: React.FC<MyModalProps> = ({
  onClose,
  show,
  handleSubmit,
}) => {
  const [storageFacilities, setStorageFacilities] = useState<StorageFacility[]>(
    []
  );
  const [facilityId, setFacilityId] = useState("");
  useEffect(() => {
    // Fetch the storage facility data from the API
    const fetchStorageFacilities = async () => {
      try {
        const response = await axios.get(
          "http://tradeplaorg-001-site9.gtempurl.com/api/v1/Storage/StorageList"
        );
        setStorageFacilities(response.data);
      } catch (error) {
        console.error("Error fetching storage facilities:", error);
      }
    };

    fetchStorageFacilities();
  }, []);

  return show ? (
    <div className="modal">
      <div className="rounded bg-white p-10">
        <div className="relative flex ">
          <div
            className="relative w-full h-full p-4"
            style={{ width: "400px" }}
          >
            <p
              onClick={onClose}
              className="absolute right-0 top-0 scale-125 cursor-pointer text-black"
            >
              X
            </p>
            <div className="inline-flex w-fit flex-col space-y-10 gap-5 items-center justify-start rounded mx-auto">
              <div className="w-full flex flex-col gap-8 justify-between mt-4">
                <p className="text-center flex justify-center text-primary font-extrabold text-[18px]">
                  Confirm the storage facility you are adding inventory to
                </p>
                <div
                  className="h-[50px] overflow-scroll"
                  style={{ height: "350px" }}
                >
                  {storageFacilities.map((facility) => (
                    <div
                      key={facility.storageFacilityId}
                      className="flex py-3 gap-3 my-2 items-center"
                    >
                      <input
                        type="radio"
                        className="scale-150"
                        name="facility"
                        onChange={() =>
                          setFacilityId(facility.storageFacilityId)
                        }

                        // Add necessary props based on the facility data
                      />
                      <label className="text-black text-[15px]">
                        {facility.storageFacilityName}
                      </label>
                    </div>
                  ))}
                </div>
                <Button
                  title="Submit"
                  handleClick={() => handleSubmit(facilityId)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export { StorageSelectModal };
