import { Button } from "@/components";
import { StoreState } from "@/store/types/store-state.types";
import { capitalizeText } from "@/utils/capitalizeText";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CSVReader } from "./CSVReader";


const CSVInternalOrderCreation = () => {
  const router = useRouter();
  const { user } = useSelector((store: StoreState) => store);
  const [data, setdata] = useState<string[][]>();

  const list: any[] = [];

  const generateCSVData = (csvData: string[][]) => {
    const order: any = {};
    csvData?.forEach((dt, idx) => {
      if (idx === 0) {
        return;
      }
      dt.forEach(
        (d, i) =>
          (order[
            csvData[0][i]
              .toLowerCase()
              .replace("'", "")
              .replace("&", "")
              .split(" ")
              .map((word, i) => (i === 0 ? word : capitalizeText(word)))
              .join("")
          ] = d)
      );
      list.push(order);
    });
  };

  const [isLoading, setisLoading] = useState(false);
  const processOrder = () => {
    // setisLoading(true);
    // try {
    //   axios.post(`${baseURL}api/InternalOrders`, csvData);
    //   router.push("/ordermgt");
    // } catch {
    //   console.error("failed");
    // } finally {
    //   setisLoading(false);
    // }

    if (data) {
      generateCSVData(data);
    }
    console.log(data);
    console.log(list);
  };
  return (
    <>
      {!data ? (
        <div>
          <h1 className="font-extrabold text-xl my-3">Upload your CSV file</h1>
          <div>
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
              sx={{ mb: 2, fontWeight: "600" }}
            >
              <TableRow>
                {data[0]?.map((item: string) => (
                  <TableCell>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((dt, indx) => (
                <TableRow key={indx}>
                  {indx === 0
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
                      ))}
                </TableRow>
              ))}
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

export { CSVInternalOrderCreation  };
