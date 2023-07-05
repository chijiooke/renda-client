import { Button } from "@/components";
import { StoreState } from "@/store/types/store-state.types";
import { baseURL } from "@/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface MyModalProps {
  onClose: () => void;
  show: boolean;
  handleSubmit: (id: string) => void;
}
interface StorageFacility {
  id: string;
  facilityName: string;
  // Add other necessary properties here
}

const StorageSelectModal: React.FC<MyModalProps> = ({
  onClose,
  show,
  handleSubmit,
}) => {
  const { user } = useSelector((state: StoreState) => state);
  const [storageFacilities, setStorageFacilities] = useState<StorageFacility[]>(
    []
  );
  const [facilityId, setFacilityId] = useState("");
  useEffect(() => {
    // Fetch the storage facility data from the API
    const fetchStorageFacilities = async () => {
      try {
        const { data } = await axios.get(
          baseURL + `api/bookings/${user?.customerId}/MyBookedStorage`
        );
        setStorageFacilities(data.data);
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
                      key={facility.id}
                      className="flex py-3 gap-3 my-2 items-center"
                    >
                      <input
                        type="radio"
                        className="scale-100 cursor-pointer"
                        name="facility"
                        onChange={() => setFacilityId(facility.id)}

                        // Add necessary props based on the facility data
                      />
                      <label className="text-black text-[15px]">
                        {facility.facilityName}
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
