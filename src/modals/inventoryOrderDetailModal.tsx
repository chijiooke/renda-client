import { Button, Input, PhoneNumberInput, Select } from "@/components";
import { Minus, Plus } from "@/icons";
import { baseURL, formikCaption, formikError } from "@/utils";
import { capitalizeText } from "@/utils/capitalizeText";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import cn from "classnames";
import { useFormik } from "formik";
import { ReactNode, useEffect, useState } from "react";
import * as Yup from "yup";

import {
  CreateExternalOrderItemType,
  CreateExternalOrderType,
  ExternalOrderType,
} from "@/_tabs/ordermgt/types/external-order-types";
import { hasInValidItems } from "@/_tabs/ordermgt/utils/has-invalid-items";
import { StoreState } from "@/store/reducer";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import axios from "axios";
import { useSelector } from "react-redux";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Refresh } from "@mui/icons-material";
import { InternalOrdersType } from "@/_tabs/ordermgt/types/internal-order-types";

type Props = {
  show: boolean;
  close: (data?: any) => void;
  item: InternalOrdersType | null;
};

export const InventoryOrderDetailsModal = ({ show, close, item }: Props) => {
  return show ? (
    <div className="modal">
      <div
        className="rounded bg-white  w-[40vw] max-h-36 h-36"
        style={{ height: "85vh", width: "60rem" }}
      >
        <div className="relative flex flex-column border-box h-full">
          <div className="w-full flex justify-end">
            <IconButton onClick={() => close()}>
              <CloseRoundedIcon />
            </IconButton>
          </div>
          <p className="text-center text-primary font-extrabold text-[18px]">
            Order Details
          </p>
          <div
            className="mt-2 grid grid-cols-2 p-4"
            style={{
              //   height: "100%",
              overflowY: "scroll",
              boxSizing: "border-box",
            }}
          >
            <div>
              <div className="grid grid-cols-2 p-1">
                <p className="font-semibold">Order ID</p>
                <p>{item?.orderId}</p>
              </div>
              <div className="grid grid-cols-2 p-1">
                <p className="font-semibold">Date & time created</p>
                {/* <p>{item?.dateCreated}</p> */}
              </div>
              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">Status</p>
                <p style={{ color: "orange" }}>{item?.status}</p>
              </div>
              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">Date and time accepted</p>
                <p>{item?.dispatchTime}</p>
              </div>
              <div className="grid grid-cols-2  p-1 ">
                <p className="font-semibold">Date and time delivered</p>
                <p>{item?.pickUpTime}</p>
              </div>
              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">Recipient's name</p>
                <p>{item?.reciepientName}</p>
              </div>
              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">Recipient's phone number</p>
                <p>{item?.reciepientPhoneNo}</p>
              </div>
              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">Delivery address</p>
                <p>{item?.deliveryAddress}</p>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">LGA & State</p>
                <p>
                  {item?.deliveryLGA}, {item?.deliveryState}{" "}
                </p>
              </div>
              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">Dispatch time</p>
                <p>{item?.dispatchTime}</p>
              </div>
              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">Total number of Items</p>
                <p>{item?.numberOfItems}</p>
              </div>
              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">Total value of items</p>
                <p>{item?.numberOfItems}</p>
              </div>
              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">Facility Name</p>
                <p>{item?.storageFacilityId}</p>
              </div>
              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">Facility ID</p>
                <p>{item?.storageFacilityId}</p>
              </div>
              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">Mode of Payment</p>
                <p>{item?.paymentMode}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center text-primary font-extrabold text-[18px]">
              Order Items
            </p>
            <div className="flex flex-col overscroll-x-auto my-6 w-full rounded ">
              <div className="grid grid-c-5 uppercase p-4  justify-between">
                <p className="text-center font-semibold">Item Name</p>
                <p className="text-center font-semibold">SKU ID</p>
                <p className="text-center font-semibold">QTY</p>
                <p className="text-center font-semibold">SIZE</p>
                <p className="text-center font-semibold">UNIT PRICE</p>
              </div>
              <div className="px-5">
                <ModalTableData />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              title="Print"
              size="sm"
              className="w-24 max-w-sm justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const ModalTableData = ({ last = false }) => {
  return (
    <>
      <div
        className={cn(
          "grid grid-c-5 justify-between p-6 relative cursor-pointer"
        )}
        // onClick={goToDetails}
      >
        <p className="text-center ">#RND9801</p>
        <p className="text-center">dgvx</p>
        <p className="text-center">01/07/2023</p>
        <p className="text-center">dxxs</p>
        <p className="text-center">wedx</p>
      </div>
    </>
  );
};
