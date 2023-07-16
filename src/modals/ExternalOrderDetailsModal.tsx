import { Button } from "@/components";
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import cn from "classnames";

import { ExternalOrderResponseType } from "@/modules/order-management/types/external-order-types";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { formatAmount } from "@/utils/format-currency";
import dayjs from "dayjs";

type Props = {
  show: boolean;
  close: (data?: any) => void;
  item: ExternalOrderResponseType | null;
};

export const ExternalOrderDetailsModal = ({ show, close, item }: Props) => {
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
            <div className="flex flex-col gap-1">
              <div className="grid grid-cols-2 p-1">
                <p className="font-semibold">Order ID</p>
                <p>{item?.externalOrderId}</p>
              </div>
              <div className="grid grid-cols-2 p-1">
                <p className="font-semibold">Date & time created</p>
                {dayjs(item?.dateCreated).format("DD MMM, YYYY (h:mm A)")}
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
                <p>
                  {" "}
                  ₦
                  {formatAmount(
                    item?.externalOrderItemsRes
                      .map((it) => it.unitPrice)
                      .reduce((sum, cur) => sum + cur, 0)
                      .toString() || ""
                  )}
                </p>
              </div>

              <div className="grid grid-cols-2  p-1">
                <p className="font-semibold">Mode of Payment</p>
                <p>{item?.paymentMode}</p>
              </div>
            </div>
          </div>
          <div className="px-4 mt-3">
            <p className="font-semibold text-blue-600 text-center  text-lg">
              Order Items
            </p>
            <Table>
              <TableHead className=" uppercase font-bold">
                <TableRow>
                  <TableCell>ITEM NAME</TableCell>
                  <TableCell>QTY</TableCell>
                  <TableCell>DIMENSION</TableCell>
                  <TableCell>UNIT PRICE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {item?.externalOrderItemsRes.map((orderItem) => (
                  <TableRow>
                    <TableCell>{orderItem?.itemName}</TableCell>
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
          <div className="flex justify-center mt-4">
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
