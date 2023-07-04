// import { Button } from "@/components";
// import { FC } from "react";

// const ExternalOrders: FC<{ openModal: () => void }> = ({ openModal }) => {
//   return (
//     <div>
//       <div className=" bg-[#E7F4FF] p-5 font-medium text-[#7A7A7A]">
//         Orders from external Pickup Locations
//       </div>
//       <div className="flex flex-col my-6 rounded border-1 border-gray-300 ">
//         <div className="grid grid-c-9 uppercase p-4  justify-between relative">

//           <div>
//             <div className="absolute top-5  ">
//               <input type="checkbox" className="pl-3 scale-150" />
//             </div>
//           </div>
//         </div>
//         <div className="px-5"></div>
//       </div>

//       <div className="grid justify-center mt-3 mb-40">
//         <p className="flex justify-center mb-6">You have no order</p>
//         <Button size="sm" title="Create order" handleClick={openModal} />
//       </div>
//     </div>
//   );
// };

// export { ExternalOrders };

import { Button } from "@/components";
import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { InternalOrdersType } from "./types/internal-order-types";
import { InfinitySpin } from "react-loader-spinner";
import dayjs from "dayjs";
import { Info, InfoOutlined } from "@mui/icons-material";
import { baseURL } from "@/utils";
import { ExternalOrderType } from "./types/external-order-types";

export const ExternalOrders: FC<{ openModal: () => void }> = ({
  openModal,
}) => {
  const [data, setdata] = useState<ExternalOrderType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
        className=" bg-[#E7F4FF] p-2 font-medium text-[#7A7A7A]  rounded-md flex items-center gap-1 "
      >
        <InfoOutlined /> Orders from external Pickup Locations
      </Typography>
      <div className=" overflow-scroll">
        <Table>
          <TableHead className=" bg-gray-100">
            <TableRow>
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
              ? data.map((item: ExternalOrderType) => (
                  <TableRow>
                    <TableCell variant="body">
                      {item?.externalOrdersId}
                    </TableCell>
                    <TableCell variant="body">{item?.numberOfItems}</TableCell>
                    <TableCell variant="body">
                      {item?.storageFacilityId}
                    </TableCell>
                    <TableCell variant="body">{item?.pickUpAddress}</TableCell>

                    <TableCell variant="body">
                      {dayjs(item?.dateCreated).format("DD, MMM, YYYY")}
                    </TableCell>
                    <TableCell variant="body">{item?.recipientName}</TableCell>
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
    </>
  );
};

const TableHeaderCell: FC<{ text: string }> = ({ text }) => (
  <TableCell variant="head" className=" font-bold rounded-md whitespace-nowrap">
    {text}
  </TableCell>
);
