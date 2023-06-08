import React, { useState, ReactNode, ChangeEventHandler } from "react";
import cn from "classnames";
import { Input, Button, Select } from "@/components";
import axios from "axios";
import { baseURL } from "@/utils";
import { useSelector } from "react-redux";
import { StoreState } from "@/store/reducer";

type Props = {
  show: boolean;
  data?: any;
  close: () => void;
};

function BookStorageModal({ show, data, close }: Props) {
  const [details, setDetails] = useState({} as any);
  const [loading, setLoading] = useState(false);
  const { userId } = useSelector((state: StoreState) => state);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > = (e) => {
    const target = e.target as HTMLInputElement;
    const dt = {
      ...details,
      [target.name]: target.value,
      amount: +details?.spaceRequired * +data?.priceOfStorage!,
      storageFacilityId: data?.storageFacilityId,
      customerId: userId,
    };
    setDetails(dt);
    console.log(dt);
  };
  const bookStorage = async () => {
    setLoading(true);
    try {
      const response = await axios.post(baseURL + "api/bookings", details);
      close();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return show ? (
    <div className="modal">
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "4px",
        }}
      >
        <div className="relative flex ">
          <div
            className="relative w-full h-full p-4"
            style={{ width: "600px" }}
          >
            <p
              onClick={close}
              className="absolute right-0 top-0 scale-125 cursor-pointer"
            >
              X
            </p>
            <div className="inline-flex w-fit flex-col space-y-10 gap-5 items-center justify-start rounded mx-auto">
              <div className="w-full flex flex-col gap-8 justify-between my-10">
                <p className="text-center text-primary font-extrabold text-[18px]">
                  Book a Storage Facility
                </p>
                <Layout option="Duration of Usage" center={false}>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-3 gap-2">
                      <Input name="" handleChange={handleChange} />
                      <div className="col-span-2">
                        <Select options={["Months", "Years"]} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        type="date"
                        label="Start Date"
                        name="startDate"
                        handleChange={handleChange}
                      />
                      <Input
                        type="date"
                        label="End Date"
                        name="endDate"
                        handleChange={handleChange}
                      />
                    </div>
                  </div>
                </Layout>

                <Layout option="Size of Space Required">
                  <Input
                    placeholder="Minimum of 100sqm"
                    name="spaceRequired"
                    handleChange={handleChange}
                  />
                </Layout>
                <Layout option="Amount to be paid">
                  <Input
                    placeholder=""
                    name="amount"
                    handleChange={handleChange}
                    disabled={true}
                    value={
                      "₦ " +
                      (String(
                        +details?.spaceRequired * +data?.priceOfStorage!
                      ) || 0)
                    }
                  />
                </Layout>
              </div>
              <div className=" w-full">
                <Button
                  title="Book Now"
                  className="w-full"
                  loading={loading}
                  handleClick={bookStorage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

const Layout = ({
  children,
  option,
  center = true,
}: {
  children: ReactNode;
  option: string;
  center?: boolean;
}) => {
  return (
    <div
      className={cn("grid grid-cols-3 w-full ", {
        "items-center": center,
      })}
    >
      <p className="text-[14px] font-semibold "> {option}</p>
      <div className=" w-full col-span-2">{children}</div>
    </div>
  );
};

export { BookStorageModal };
