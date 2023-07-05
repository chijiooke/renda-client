import { Button } from "@/components";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";

import { InventoryOrderDetailsModal } from "@/modals/inventoryOrderDetailModal";
import { baseURL } from "@/utils";
import dayjs from "dayjs";
import { InfinitySpin } from "react-loader-spinner";
import { InternalOrdersType } from "../Inventory/types/inventory-order-types";

const InventoryOrders: FC<{ openModal: () => void }> = ({ openModal }) => {
  const [data, setdata] = useState<InternalOrdersType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  let [itemToShow, setItemToShow] = useState<InternalOrdersType | null>(null);

  const getInventoryOrders = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseURL}api/InternalOrders`);
      console.log(res?.data);
      setdata(res?.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInventoryOrders();
  }, []);

  const tableHeaders = [
    "Order ID",
    "Name of Items",
    "Facility Name",
    "Facility ID",

    "Date Created",
    "Reciepients Name",
    "Delivery Location",
    "Mode Of Payment",
    "Status",
  ];
  return (
    <>
      <Typography
        variant="body2"
        className=" bg-[#E7F4FF] p-3 font-medium text-[#7A7A7A]  rounded-md flex items-center gap-1 "
      >
        Orders from your Renda storage
      </Typography>
      <div className=" overflow-scroll">
        <Table>
          <TableHead className=" border-solid border-2 border-sky-500">
            <TableRow>
              {/* <TableCell variant="head">
                <Checkbox />
              </TableCell> */}
              {tableHeaders.map((tableHead) => (
                <TableHeaderCell text={tableHead} />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && (
              <TableRow>
                <TableCell colSpan={10}>
                  <Box className="flex  items-center justify-center min-w-full">
                    {" "}
                    <InfinitySpin color="#f99b21" />
                  </Box>
                </TableCell>
              </TableRow>
            )}
            {!data.length && !loading && (
              <TableRow>
                <TableCell colSpan={10}>
                  <Box className="flex  items-center justify-center min-w-full flex-col gap-2">
                    <p className="flex justify-center mb-6">
                      You have no order
                    </p>
                    <Button
                      size="sm"
                      title="Create order from inventory"
                      handleClick={openModal}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            )}

            {data.length && !loading
              ? data.map((item: InternalOrdersType) => (
                  <TableRow
                    className="cursor-pointer"
                    onClick={() => {
                      setItemToShow(item);
                    }}
                  >
                    {/* <TableCell variant="body">
                      <Checkbox />
                    </TableCell> */}
                    <TableCell variant="body">{item?.orderId}</TableCell>
                    <TableCell variant="body">{item?.numberOfItems}</TableCell>
                    <TableCell variant="body">
                      {item?.storageFacilityId}
                    </TableCell>
                    <TableCell variant="body">{item?.pickUpAddress}</TableCell>

                    <TableCell variant="body">
                      {dayjs(item?.dateCreated).format("DD, MMM, YYYY")}
                    </TableCell>
                    <TableCell variant="body">{item?.reciepientName}</TableCell>
                    <TableCell variant="body">
                      {`${item?.deliveryAddress}, ${item?.deliveryLGA}, ${item?.deliveryState}`}
                    </TableCell>
                    <TableCell variant="body">{item?.paymentMode}</TableCell>
                    <TableCell variant="body">{item?.status}</TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>

      <InventoryOrderDetailsModal
        show={!!itemToShow}
        close={() => setItemToShow(null)}
        item={itemToShow}
      />
    </>
  );
};

export { InventoryOrders };

const TableHeaderCell: FC<{ text: string }> = ({ text }) => (
  <TableCell variant="head" className=" font-bold rounded-md whitespace-nowrap">
    {text}
  </TableCell>
);
