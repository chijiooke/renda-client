import { Button } from "@/components";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import cn from "classnames";

import {
  InternalOrderItemType,
  InternalOrdersTypeResponseType,
} from "@/modules/inventory/types/inventory-order-types";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import dayjs from "dayjs";
import { FC } from "react";
import { formatAmount } from "@/utils/format-currency";

type Props = {
  show: boolean;
  close: (data?: any) => void;
  item: InternalOrdersTypeResponseType | null;
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
            style={{
              //   height: "100%",
              overflowY: "scroll",
              boxSizing: "border-box",
            }}
          >
            <div className="mt-2 grid grid-cols-2 p-4">
              {" "}
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 p-1">
                  <p className="font-semibold">Order ID</p>
                  <p>{item?.internalOrderId}</p>
                </div>
                <div className="grid grid-cols-2 p-1">
                  <p className="font-semibold">Date & time created</p>
                  <p>
                    {" "}
                    {dayjs(item?.dateCreated).format("DD, MMM, YYYY (h:mm A)")}
                    {}
                  </p>
                </div>
                <div className="grid grid-cols-2  p-1">
                  <p className="font-semibold">Status</p>
                  <p style={{ color: "orange" }}>{item?.status || "N/A"}</p>
                </div>
                <div className="grid grid-cols-2  p-1">
                  <p className="font-semibold">Dispatch Time & Date</p>
                  <p>
                    {dayjs(item?.dispatchTime).format("DD, MMM, YYYY (h:mm A)")}
                  </p>
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
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2  p-1">
                  <p className="font-semibold">LGA & State</p>
                  <p>
                    {item?.deliveryLGA}, {item?.deliveryState}{" "}
                  </p>
                </div>
                <div className="grid grid-cols-2  p-1">
                  <p className="font-semibold">Dispatch time</p>
                  <p>{dayjs(item?.dispatchTime).format("DD, MMM, YYYY")}</p>
                </div>
                <div className="grid grid-cols-2  p-1">
                  <p className="font-semibold">Total number of Items</p>
                  <p>{item?.internalOrderitem?.length}</p>
                </div>
                <div className="grid grid-cols-2  p-1">
                  <p className="font-semibold">Total value of items</p>
                  <p>
                    ₦
                    {formatAmount(
                      item?.internalOrderitem
                        .map((it) => it.unitPrice)
                        .reduce((sum, cur) => sum + cur, 0)
                        .toString() || ""
                    )}
                  </p>
                </div>
                {/* <div className="grid grid-cols-2  p-1">
                  <p className="font-semibold">Facility Name</p>
                  <p>{item?.}</p>
                </div> */}
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
            <div className="px-4 mt-3">
              <p className="font-semibold text-blue-600 text-center  text-lg">Order Items</p>
              <Table>
                <TableHead className=" uppercase font-bold">
                  <TableRow>
                    <TableCell>SKU ID</TableCell>
                    <TableCell>QTY</TableCell>
                    <TableCell>Item Name</TableCell>
                    <TableCell>Unit Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item?.internalOrderitem.map((orderItem) => (
                    <TableRow>
                      <TableCell>{orderItem?.skuId}</TableCell>
                      <TableCell>{orderItem?.quantity}</TableCell>
                      <TableCell>{orderItem?.dimension}</TableCell>
                      <TableCell>
                        {" "}
                        ₦{formatAmount(orderItem?.unitPrice.toString())}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="flex justify-center  p-3">
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

const ModalTableData: FC<{ orderItem: InternalOrderItemType }> = ({
  orderItem,
}) => {
  return (
    <>
      <div
        className={cn(
          "grid grid-c-5 justify-between p-6 relative cursor-pointer"
        )}
        // onClick={goToDetails}
      >
        {/* <p className="text-center ">{orderItem?.itemName}</p> */}
        <p className="text-center">{orderItem?.skuId}</p>
        <p className="text-center">{orderItem?.quantity}</p>
        <p className="text-center">{orderItem?.dimension}</p>
        <p className="text-center">{orderItem?.unitPrice}</p>
      </div>
    </>
  );
};
