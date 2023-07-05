import { Button } from "@/components";
import { baseURL } from "@/utils";
import { InfoOutlined, Pending } from "@mui/icons-material";
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
import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { ExternalOrderType } from "./types/external-order-types";
import { ExternalOrderDetailsModal } from "@/modals/ExternalOrderDetailsModal";

export const ExternalOrders: FC<{ openModal: () => void }> = ({
  openModal,
}) => {
  const [data, setdata] = useState<ExternalOrderType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  let [itemToShow, setItemToShow] = useState<ExternalOrderType | null>(null);

  const getExternalOrders = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseURL}api/ExternalOrders`);
      console.log(res?.data);
      setdata(res?.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getExternalOrders();
  }, []);

  const tableHeaders = [
    "Order ID",
    "No of Items",
    "Pickup Location",
    "Delivery Location",
    "Reciepients Name",
    "Date Created",
    "Mode Of Payment",
    "Status",
  ];

  return (
    <>
      <Typography
        variant="body2"
        className=" bg-[#E7F4FF] p-3 font-medium text-[#7A7A7A]  rounded-md flex items-center gap-1 "
      >
        Orders from external Pickup Locations
      </Typography>
      <div className=" overflow-scroll">
        <Table className="p-1">
          <TableHead className=" border-solid border-2 border-sky-500">
            <TableRow>
              {tableHeaders.map((tableHead) => (
                <TableHeaderCell text={tableHead.toLocaleUpperCase()} />
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
              ? data.map((item: ExternalOrderType) => (
                  <TableRow
                    className="cursor-pointer"
                    onClick={() => {
                      setItemToShow(item);
                    }}
                  >
                    <TableCell variant="body">
                      {item?.externalOrdersId}
                    </TableCell>
                    <TableCell variant="body">{item?.numberOfItems}</TableCell>
                    <TableCell variant="body">{item?.pickUpAddress}</TableCell>
                    <TableCell variant="body">
                      {`${item?.deliveryAddress}, ${item?.deliveryLGA}, ${item?.deliveryState}`}
                    </TableCell>
                    <TableCell variant="body">{item?.reciepientName}</TableCell>
                    <TableCell variant="body">
                      {dayjs(item?.dateCreated).format("DD, MMM, YYYY")}
                    </TableCell>
                    <TableCell variant="body">{item?.paymentMode}</TableCell>
                    <TableCell variant="body" sx={{color: item?.status?.toUpperCase()}}>{item?.status}</TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>

      <ExternalOrderDetailsModal
        show={!!itemToShow}
        close={() => setItemToShow(null)}
        item={itemToShow}
      />
    </>
  );
};

const TableHeaderCell: FC<{ text: string }> = ({ text }) => (
  <TableCell variant="head" className=" font-bold rounded-md">
    {text}
  </TableCell>
);
