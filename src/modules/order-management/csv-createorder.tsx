import { Button } from "@/components";
import { baseURL } from "@/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { CSVReader } from "./components/CSVReader";
import { Router, useRouter } from "next/router";
import { useSelector } from "react-redux";
import { StoreState } from "@/store/types/store-state.types";

const CsvCreateOrderDetail = () => {
  //   type dataType = string[];
  const router = useRouter();
  const { user } = useSelector((store: StoreState) => store);
  const [data, setdata] = useState<string[][]>();
  const csvData: any = {
    storageFacilityId: data ? data[1][3] : "",
    numberOfItems: data ? data?.length - 1 : 0,
    reciepientName: data ? data[1][4] : "",
    reciepientPhoneNo: data ? data[1][5] : "",
    pickUpAddress: "",
    deliveryState: data ? data[1][7] : "",
    deliveryLGA: data ? data[1][8] : "",
    deliveryAddress: data ? data[1][6] : "",
    CustomerId: user?.customerId,
    // dateCreated:
    paymentMode: data ? data[1][9] : "",
    dispatchTime: new Date(),
    PickUpTime: new Date(),
    orderItems: [
      {
        dimension: data ? data[1][1] : "",
        quantity: data ? data[1][2] : "",
        skuId: data ? data[1][0] : "",
        unitPrice: data ? data[1][11] : "",
      },
    ],
  };

  const [isLoading, setisLoading] = useState(false);

  const processOrder = () => {
    // setisLoading(true);
    try {
      axios.post(`${baseURL}api/InternalOrders`, csvData);
      router.push("/ordermgt");
    } catch {
      console.error("failed");
    } finally {
      setisLoading(false);
    }

    console.log(csvData);
  };
  return (
    <>
      {!data ? (
        <div>
          <h1 className="font-extrabold text-xl my-3">Upload your CSV file</h1>
          <div>
            {/* <UploadArea/> */}
            <CSVReader setData={setdata} />
          </div>
          <div style={{ width: "700px" }}>
            <p>
              To import your inventory from CSV file it has to be formatted
              correctly. Each file should have an Item name, Quantity, Size,
              Picture of item, SKU ID, Unit price, Brief description.
              <a href="/" style={{ color: "#3694EB" }}>
                {" "}
                Click to download CSV sample.
              </a>
            </p>
          </div>
        </div>
      ) : (
        <>
          <Table>
            <TableHead
              sx={{ mb: 2, border: "1px solid #666", fontWeight: "600" }}
            >
              <TableRow>
                {data[0]?.map((item: string) => (
                  <TableCell>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((dt, indx) =>
                indx === 0
                  ? null
                  : dt.map((dtItem) => (
                      <TableCell
                        sx={{
                          boxShadow: "0px 10px 10px -5px #0000000A",
                          padding: "1rem",
                          marginTop: 5,
                        }}
                      >
                        {dtItem}
                      </TableCell>
                    ))
              )}
            </TableBody>
          </Table>
          <Button
            title={!isLoading ? "Process Order" : "loading..."}
            handleClick={() => {
              processOrder();
            }}
            loading={isLoading}
          />
        </>
      )}
    </>
  );
};

export { CsvCreateOrderDetail };
