import { DashBoardLayout } from "@/layout";
import { DashBoardRoutes } from "@/utils";
import { Tab } from "@headlessui/react";
import { useRouter } from "next/router";
import { useState } from "react";
// import { InboundHistory } from "@/_pages/inventory/all/inboundHistory";
import { InboundHistory } from "@/_tabs/Inventory/all/inboundHistory";
import { AllInventoryTable } from "@/components/InventoryTable";
import { inventoryDataType } from "@/components/InventoryTable/inventoryTableRow";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const headers = ["ALL Inventory", "Inbound History"];
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Inventory() {
  const router = useRouter();
  const [showUploadButton, setShowUploadButton] = useState(true);
  const [open, setOpen] = useState(false);
  const handleProcessItemsClick2: any = () => {
    setShowUploadButton(false);
  };

  const inventoryData: inventoryDataType[] = [
    {
      title: "mac Book Pro",
      SKUId: 12345,
      facilityID: 12345,
      position: "Upper Shelf",
      facilityName: "Badagry, lagos",
      quantity: 20,
      unitPrice: 100,
      dmgItems: 10,
      description: "Lorem ipsum dolor emet",
      color: "grey",
      weight: "100 pounds",
      img: "string",
    },
    {
      title: "Samsung Z Book ",
      SKUId: 12346,
      facilityID: 12346,
      position: "Upper Shelf",
      facilityName: "Badagry, lagos",
      quantity: 50,
      unitPrice: 100,
      dmgItems: 10,
      description: "Lorem ipsum dolor emet",
      color: "grey",
      weight: "100 pounds",
      img: "string",
    },
  ];

  return (
    <>
      {/* <ImagePreview /> */}
      <DashBoardLayout>
        <div className="rounded flex-grow border-1 border-gray-300 h-[83vh] pt-2">
          {showUploadButton && (
            <>
              <div className="flex justify-between items-center">
                <div className=" p-7 flex flex-col ">
                  <h1 className="text-3xl font-extrabold">All Inventory</h1>
                </div>
                <div className="flex justify-center gap-2 mr-7">
                  <button>
                    <div
                      style={{ backgroundColor: `#1B547F` }}
                      onClick={() =>
                        router.push(DashBoardRoutes.INVENTORY_TOPUP)
                      }
                      className=" flex items-center bg-[#1B547F] justify-center w-36 h-10 px-3 cursor-pointer  rounded-md text-xs font-semibold text-center items-center  text-white"
                    >
                      Top-Up Stock
                    </div>
                  </button>
                  <button
                    onClick={() => setOpen(true)}
                    className=" flex items-center justify-center w-36 h-10 px-3  cursor-pointer  border-1 rounded-md border-blue-900 text-[#1B547F] text-xs font-semibold"
                  >
                    Create Order
                  </button>
                </div>
              </div>
            </>
          )}
          {!showUploadButton && (
            <div className="border-b-2 border-b-gray-300 p-7 flex items-center justify-between">
              <div className=" flex flex-col ">
                <h1 className="text-3xl font-extrabold">Inbound History</h1>
              </div>
              <div></div>
            </div>
          )}

          <div className="w-full px-10 py-5">
            <Tab.Group>
              <Tab.List className="flex pl-10 pt-3 gap-1 justify-between rounded-sm border-2  text-center">
                <div>
                  {headers.map((header, idx) => (
                    <Tab
                      key={idx}
                      onClick={handleProcessItemsClick2}
                      className={({ selected }) =>
                        classNames(
                          "py-3 px-7 outline-none rounded-tl-lg rounded-tr-lg clip-path-polygon",

                          selected ? "bg-primary text-white  " : "bg-[#f4f4f4]"
                        )
                      }
                    >
                      {header}
                    </Tab>
                  ))}
                </div>

                <div className="flex">
                  <div className="flex-inline justify-end ">
                    <div></div>
                    <div className="flex gap-2 mr-2">
                      <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-300 p-2 rounded"
                      />

                      <select className="border border-gray-300 p-2 rounded">
                        <option value="">Filter by Storage Facility</option>
                        <option value="facility1">Facility 1</option>
                        <option value="facility2">Facility 2</option>
                        <option value="facility3">Facility 3</option>
                      </select>

                      <input
                        type="date"
                        placeholder="Filter by Date"
                        className="border border-gray-300 p-2 rounded"
                      />
                      <div className="inline-flex items-center justify-center px-2.5 py-1.5 bg-black bg-opacity-50 border rounded-sm border-black border-opacity-50">
                        <p className="text-xs text-center text-white">Export</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.List>
              <Tab.Panel>
                <AllInventoryTable />
              </Tab.Panel>

              <Tab.Panel>
                <InboundHistory />
              </Tab.Panel>
            </Tab.Group>
          </div>
        </div>
      </DashBoardLayout>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
            minWidth: "100%",
          }}
        >
          <IconButton onClick={() => setOpen(false)}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <Typography variant="h5" fontWeight={600} textAlign="center" color="primary">
            Create Order
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SKU ID</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Unit Price</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            {inventoryData.map((item) => (
              <TableRow>
                <TableCell>{item?.SKUId}</TableCell>
                <TableCell>{item?.title}</TableCell>
                <TableCell>{item?.unitPrice}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                      <AddCircleIcon />
                    </IconButton>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {" "}
                      <Typography variant="body2" sx={{}}>
                        {0}/{item?.quantity}
                      </Typography>
                    </Box>
                    <IconButton>
                      <RemoveCircleIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </Table>
          <Button variant="contained" fullWidth sx={{ mt: 2 }} >
            Add to delivery van
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
