import { Button } from "@/components";
import {
  Checkbox,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";

const InventoryOrders: FC<{ openModal: () => void }> = ({ openModal }) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <div>
        <Typography
          variant="body2"
          className=" bg-[#E7F4FF] p-2 font-medium text-[#7A7A7A]  rounded-md "
        >
          Orders from your Renda storage
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell variant="head">
                <Checkbox />
              </TableCell>
              < TableHeaderCell text="Order Id"/>
              < TableHeaderCell text="Name of Items"/>
              < TableHeaderCell text="facility"/>
              < TableHeaderCell text="facility ID"/>
              < TableHeaderCell text="Order Id"/>
             
             
             
              <TableCell
                variant="head"
                className=" font-bold rounded-md whitespace-nowrap"
              >
                FACILITY ID
              </TableCell>
              <TableCell
                variant="head"
                className=" font-bold rounded-md whitespace-nowrap"
              >
                DATE CREATED
              </TableCell>
              <TableCell
                variant="head"
                className=" font-bold rounded-md whitespace-nowrap"
              >
                RECIPIENTS NAME
              </TableCell>
              <TableCell
                variant="head"
                className=" font-bold rounded-md whitespace-nowrap"
              >
                DELIVERY LOCATION
              </TableCell>
              <TableCell
                variant="head"
                className=" font-bold rounded-md whitespace-nowrap"
              >
                MODE OF PAYMENT
              </TableCell>
              <TableCell
                variant="head"
                className=" font-bold rounded-md whitespace-nowrap"
              >
                STATUS
              </TableCell>

              <TableCell></TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <div className="flex flex-col my-6 rounded border-1 border-gray-300 ">
          <div className="grid grid-c-9 uppercase p-4  justify-between relative">
            <p className="text-center">ORDER ID</p>
            <p className="text-center">NO OF ITEMS</p>
            <p className="text-center">FACILITY NAME</p>
            <p className="text-center">FACILITY ID</p>
            <p className="text-center">DATE CREATED</p>
            <p className="text-center">RECIPIENTS NAME</p>
            <p className="text-center">DELIVERY LOCATION</p>
            <p className="text-center">MODE OF PAYMENT</p>
            <p className="text-center">status</p>
            <div>
              <div className="absolute top-5  ">
                <input type="checkbox" className="pl-3 scale-150" />
              </div>
            </div>
          </div>
          <div className="px-5"></div>
        </div>

        <div className="grid grid-c-9 p-4 justify-between relative">
          <p className="text-center">1234567</p>
          <p className="text-center">34</p>
          <p className="text-center">Oni Ile facility</p>
          <p className="text-center">RND12345</p>
          <p className="text-center">11/04/2023</p>
          <p className="text-center">Promise Eze</p>
          <p className="text-center">Ketu</p>
          <p className="text-center">paid</p>
          <p className="text-center">Pending</p>
          <div>
            <div className="absolute top-5  ">
              <input type="checkbox" className="pl-3 scale-150" />
            </div>
          </div>
        </div>
        {loading && "loading..."}
        {!data.length && !loading ? (
          <div className="grid justify-center mt-40 mb-40">
            <p className="flex justify-center mb-6">You have no order</p>
            <Button
              size="sm"
              title="Create order from inventory"
              handleClick={openModal}
            />
          </div>
        ) : (
          data.map((item) => <div>item</div>)
        )}
      </div>
    </>
  );
};

export { InventoryOrders };

const TableHeaderCell: FC<{ text: string }> = ({ text }) => (
  <TableCell variant="head" className=" font-bold rounded-md whitespace-nowrap">
    {text}
  </TableCell>
);
