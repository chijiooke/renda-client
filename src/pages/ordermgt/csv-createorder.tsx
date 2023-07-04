import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { ApiCreateOrderDetail } from "@/_tabs/ordermgt/api-createorderdetail";
import { CsvCreateOrderDetail } from "@/_tabs/ordermgt/csv-createorder";
import { Tab } from "@headlessui/react";



export default function CsvCreateorder () {
    const headers = ["Add via CSV", "import via API"];
    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(" ");
      }
      const clipStyle = {
        clipPath:
          "polygon(, 74% 074% 1%, 0% 1%, 0% 1%, 0% 99%, 0% 99%, 99% 100%, 74% 0);",
      };

    return (
    <DashBoardLayout backAction backText="back">
         <div className="rounded border-1 border-gray-300  h-[83vh] pt-2 ">
          <div className="border-b-2 border-b-gray-300 p-7 flex justify-between ">
            <div>
            <h1 className="text-2xl font-extrabold">Create Order</h1>
            <p>Create order from inventory</p>
            </div>
           
            <div className="mr-6 w-72" >
                <Button title="Create Order" size="sm" />
            </div>
          </div>

          <div className="w-full px-10 py-5">
          <Tab.Group>
            <Tab.List className="flex py-3 gap-1">
              {headers.map((header, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    classNames(
                      "py-3 px-7 outline-none rounded-tl-lg  ",
                      selected ? "bg-primary text-white  " : "bg-[#f4f4f4]"
                    )
                  }
                >
                  {header}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panel>
            <CsvCreateOrderDetail/>
            </Tab.Panel>
            <Tab.Panel>
             <ApiCreateOrderDetail/>
            </Tab.Panel>
      
          </Tab.Group>
        </div>
        
        </div>
        </DashBoardLayout>
    )
}