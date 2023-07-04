import { UploadArea } from "@/components/UploadArea";
import { useState } from "react";
import { CSVReader } from "./components/CSVReader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const CsvCreateOrderDetail = () => {
  //   type dataType = string[];
  const [data, setdata] = useState<string[][]>();
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
      )}
    </>
  );
};

export { CsvCreateOrderDetail };
