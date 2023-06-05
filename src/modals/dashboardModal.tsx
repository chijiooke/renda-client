import React, { useState, ReactNode } from "react";
import cn from "classnames";
import { Input, Button, Select } from "@/components";

type Props = {
  show: boolean;
};

function MyModal({ show }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
            <div className="inline-flex w-fit flex-col space-y-10 gap-5 items-center justify-start rounded mx-auto">
              <div className="w-full flex flex-col gap-8 justify-between my-10">
                <p className="text-center text-primary font-extrabold text-[18px]">
                  Book a Storage Facility
                </p>
                <Layout option="Duration of Usage" center={false}>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-3 gap-2">
                      <Input name="" />
                      <div className="col-span-2">
                        <Select options={["Monthly", "Yearly"]} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="date" label="Start Date" name="startDate" />
                      <Input type="date" label="End Date" name="endDate" />
                    </div>
                  </div>
                </Layout>

                <Layout option="Size of Space Required">
                  <Input placeholder="Minimum of 100sqm" name="spaceRequired" />
                </Layout>
              </div>
              <div className=" w-full">
                <Button title="Book Now" className="w-full" />
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

export { MyModal };
