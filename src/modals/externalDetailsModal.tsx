import { Button, Input, Select } from "@/components";
import cn from "classnames";
import { ReactNode, useState } from "react";

import { Minus, Plus } from "@/icons";
import { capitalizeText } from "@/utils/capitalizeText";

type Props = {
  show: boolean;
  close: (data?: any) => void;
};

enum DeliveryTimeEnum {
  IMMEDIATELY = "IMMEDIATELY",
  SET_DATE = "SET_DATE",
}
const location = ["Lagos", "Ibadan", "Abuja", "Rivers"];

function ExternalOrderDetailsModal({ show, close }: Props) {
  const [data, setdata] = useState({});

  const [deliveryTime, setDliveryTime] = useState<DeliveryTimeEnum>(
    DeliveryTimeEnum.IMMEDIATELY
  );
  return show ? (
    <div className="modal">
      <div className="rounded bg-white p-10">
        <div className="relative flex ">
          <div
            className="relative w-full h-full p-4"
            // style={{ width: "600px" }}
          >
            <p
              onClick={() => close()}
              className="absolute right-0 top-0 scale-125 cursor-pointer"
            >
              X
            </p>
            <div className="grid gap-6">
              <p className="text-center text-primary font-extrabold text-[18px]">
                Create Order
              </p>

              <div className="grid gap-6">
                <Layout option="Recipient's Name" center={true}>
                  <Input
                    className="h-10"
                    name=""
                    placeholder="Enter recipient's name"
                    type="text"
                    handleChange={() => {}}
                  />
                </Layout>
                <Layout option="Recipient's phone number" center={true}>
                  <Input
                    className="h-10"
                    name=""
                    placeholder="Enter recipient's phone number"
                    type="text"
                  />
                </Layout>
                <Layout option="Pick up LGA" center={true}>
                  <Select
                    name=""
                    placeholder="Select Pick up LGA"
                    options={location}
                  />
                </Layout>
                <Layout option="Pick up address" center={true}>
                  <Input
                    className="h-10"
                    name=""
                    placeholder="Pick up address"
                    type="text"
                  />
                </Layout>
                <Layout option="Pick up contact" center={true}>
                  <Input
                    className="h-10"
                    name=""
                    placeholder="Enter Pick up contact"
                    type="text"
                  />
                </Layout>
                <Layout option="Contact Phone no." center={true}>
                  <Input
                    className="h-10"
                    name=""
                    placeholder="Enter Contact Phone no."
                    type="number"
                  />
                </Layout>
                <Layout option="Delivery LGA" center={true}>
                  <Select
                    name=""
                    placeholder="Select Delivery LGA"
                    options={location}
                  />
                </Layout>
                <Layout option="Delivery address" center={true}>
                  <Input
                    className="h-10"
                    name=""
                    placeholder="Delivery address"
                    type="text"
                  />
                </Layout>
                <div
                  className="boarder-2 rounded grid justify-center"
                  style={{ backgroundColor: "#0000001a" }}
                >
                  <div className="flex gap-2 mt-4">
                    <div>
                      <p className="font-bold">Name of Item</p>
                      <input type="text" className="my-1 rounded h-12" />
                    </div>
                    <div>
                      <p className="font-bold">Dimension</p>
                      <input type="text" className="my-1 rounded h-12" />
                    </div>
                    <div>
                      <p className="font-bold">Qty</p>
                      <input type="text" className="my-1 rounded h-12" />
                    </div>
                    <div>
                      <p className="font-bold">Unit Price</p>
                      <input type="text" className="my-1 rounded h-12" />
                    </div>
                  </div>

                  <div className="flex gap-2 my-3 justify-end">
                    <button
                      className="flex gap-2 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: "#CF0000",
                        width: "80px",
                        height: "25px",
                      }}
                    >
                      <Minus />
                      <p className="text-white">Delete</p>
                    </button>
                    <button
                      className="flex gap-2 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "#008753", width: "80px" }}
                    >
                      <Plus />
                      <p className="text-white ">Add</p>
                    </button>
                  </div>
                </div>
                <Layout option="Payment Mode" center={true}>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className="flex gap-4 border-2 rounded items-center "
                      style={{ backgroundColor: "#F5F5F5", height: "50px" }}
                    >
                      <div className="mx-3 mt-1">
                        <input type="checkbox" className="pl-3 scale-150" />
                      </div>
                      <p>Pay on Delivery</p>
                    </div>

                    <div
                      className="flex gap-4 border-2 rounded  h-40 items-center"
                      style={{ backgroundColor: "#F5F5F5", height: "50px" }}
                    >
                      <div className="mx-3 mt-1 ">
                        <input type="checkbox" className="pl-3 scale-150" />
                      </div>
                      <p> Paid</p>
                    </div>
                  </div>
                </Layout>
                <Layout option="Set Delivery Time" center={true}>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    {Object.keys(DeliveryTimeEnum).map((dtime) => (
                      <>
                         {" "}
                        <label htmlFor={dtime} className="flex gap-1">
                          <input
                            type="radio"
                            id={dtime}
                            name="delivery_time"
                            value={dtime}
                            checked={deliveryTime === dtime}
                            onChange={(e) =>
                              setDliveryTime(e.target.value as DeliveryTimeEnum)
                            }
                          />
                          {capitalizeText(dtime.replace("_", " "))}
                        </label>
                      </>
                    ))}
                  </div>
                </Layout>

                {deliveryTime === DeliveryTimeEnum.SET_DATE && (
                  <Input type="date" className="flex align-self-end w-100 " />
                )}
              </div>

              <div className=" w-full">
                <Button
                  title="Book Now"
                  className="w-full"
                  handleClick={() => close(data)}
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

export { ExternalOrderDetailsModal };
