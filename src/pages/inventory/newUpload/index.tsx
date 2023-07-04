import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { useRouter } from "next/router";

import { Tab } from "@headlessui/react";
import { useState } from "react";
import { AddNewInventory, AddViaApi, AddViaCsv } from "@/_tabs/Inventory";

const headers = ["Add a Single Inventory", "Add via CSV", "Import via API"];
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Inventory() {
  const router = useRouter();
  const [showUploadButton, setShowUploadButton] = useState(true);
  const handleProcessItemsClick2: any = () => {
    setShowUploadButton(false);
  };

  return (
    <>
      {/* <ImagePreview /> */}
      <DashBoardLayout>
        <div className="rounded flex-grow border-1 border-gray-300 h-[83vh] pt-2">
          {showUploadButton && (
            <div className="border-b-2 border-b-gray-300 p-7 flex flex-col ">
              <h1 className="text-3xl font-extrabold">Add New Stock</h1>
              <p>Preferred upload channel</p>
            </div>
          )}
          {!showUploadButton && (
            <div className="border-b-2 border-b-gray-300 p-7 flex items-center justify-between">
              <div className="border-b-2 border-b-gray-300 p-7 flex flex-col ">
                <h1 className="text-3xl font-extrabold">Add New Stock</h1>
                <p>Add a new stock via your preffered upload cahnnel</p>
              </div>
              <div>
                <Button title="Upload" size="sm" className="max-w-sm" />
              </div>
            </div>
          )}

          <div className="w-full px-10 py-5">
            <Tab.Group>
              <Tab.List className="flex pl-10 pt-3 gap-1 rounded-sm border-2 text-center">
                {headers.map((header, idx) => (
                  <Tab
                    key={idx}
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
              </Tab.List>
              <Tab.Panel>
                <AddNewInventory />
              </Tab.Panel>
              <Tab.Panel>
                <AddViaCsv />
              </Tab.Panel>
              <Tab.Panel>
                <AddViaApi />
              </Tab.Panel>
            </Tab.Group>
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
}
