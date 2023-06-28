import React, {
  useState,
  ReactNode,
  ChangeEventHandler,
  useEffect,
} from "react";
import cn from "classnames";
import { Input, Button, Select } from "@/components";
import axios from "axios";
import dayjs from "dayjs";
import { baseURL, DashBoardRoutes } from "@/utils";
import { useSelector } from "react-redux";
import { StoreState } from "@/store/reducer";

import customParseFormat from "dayjs/plugin/customParseFormat";
import { useRouter } from "next/router";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";

type Props = {
  show: boolean;
  data?: any;
  close: () => void;
};

const location = ["Lagos", "Ibadan", "Abuja", "Rivers"];
//   const [selectedRadio, setSelectedRadio] = useState('immediately');

//   const handleOptionChange = (event: any) => {
//     setSelectedRadio(event.target.value);
//   };

function DeliveryDetailsModal({ show, data, close }: Props) {
  return show ? (
    <div className="modal">
      <div className="rounded bg-white p-10">
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
            <div className="grid gap-6">
              <p className="text-center text-primary font-extrabold text-[18px]">
                Enter Delivery Details
              </p>

              <div className="grid gap-6">
                <Layout option="Recipient's Name" center={true}>
                  <Input
                    name=""
                    placeholder="Enter recipient's name"
                    type="text"
                  />
                </Layout>
                <Layout option="Recipient's phone number" center={true}>
                  <Input
                    name=""
                    placeholder="Enter recipient's phone number"
                    type="text"
                  />
                </Layout>
                <Layout option="Drop off address" center={true}>
                  <Input name="" placeholder="Drop off address" type="text" />
                </Layout>
                <Layout option="Drop off address" center={true}>
                  <Input name="" placeholder="Drop off address" type="text" />
                </Layout>
                <Layout option="Delivery Location" center={true}>
                  <Select
                    name=""
                    placeholder="Select Delivery location"
                    options={location}
                  />
                </Layout>
                <Layout option="State" center={true}>
                  <Select
                    name=""
                    placeholder="Select State"
                    options={location}
                  />
                </Layout>
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
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Immediately"
                        control={<Radio />}
                        label="Immediately"
                      />
                      <FormControlLabel
                        value="dateTime"
                        control={<Radio />}
                        label="Set Delivery Date & Time"
                      />
                    </RadioGroup>
                  </FormControl>
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

export { DeliveryDetailsModal };

<div className="grid grid-cols-2 gap-2">
  <Input type="date" label="Start Date" name="startDate" />
  <Input type="date" label="End Date" name="endDate" disabled />
</div>;
