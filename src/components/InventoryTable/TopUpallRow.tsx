// import { ComputerImage } from "@/icons";
// import { DashBoardRoutes } from "@/utils";
// import { useRouter } from "next/router";
// import React, { useState } from "react";

// const TableRow = () => {
//   const [expanded, setExpanded] = useState(false);
//   const router = useRouter();

//   const expandRow = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div
//       className={`flex flex-col  pt-4 mb-4 cursor-pointer transition-height duration-300 ${
//         expanded ? "h-80" : "h-16"
//       }`}
//       onClick={expandRow}
//     >
//       <div className="flex justify-around">
//         <div className="p-2">
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               className="form-checkbox h-4 w-4 text-blue-500"
//             />
//           </div>
//         </div>
//         <div className="p-2">Item 1</div>
//         <div className="p-2">Facility 1</div>
//         <div className="p-2">Facility Name 1</div>
//         <div className="p-2">10</div>
//         <div className="p-2">SKU-001</div>
//         <div className="p-2">$10.00</div>
//         <div className="p-2">
//           <div className="inline-flex items-start justify-start px-2 py-0.5 bg-blue-50 rounded-sm cursor-pointer">
//             <p className="text-xs leading-none text-blue-900">Show More</p>
//           </div>
//         </div>
//       </div>

//       {expanded && (
//         <>
//           <div
//             className="bg-blue-100 flex-grow p-4 border rounded-md border-gray-500"
//             style={{}}
//           >
//             <div className="flex flex-col py-2">
//               <div className="flex">
//                 <div className=" w-1/3">
//                   <ComputerImage />
//                 </div>
//                 <div className=" w-1/2">
//                   <div className="flex justify-around">
//                     <p className="text-xs font-semibold leading-none uppercase">
//                       Brief Description
//                     </p>
//                     <p className="text-xs font-semibold leading-none uppercase">
//                       Colour{" "}
//                     </p>
//                     <p className="text-xs font-semibold leading-none uppercase">
//                       Weight
//                     </p>
//                   </div>
//                   <div className="flex justify-around py-5">
//                     <p className="w-44 text-xs leading-none">
//                       MacBook Pros are supercharged by M1 chips.{" "}
//                     </p>
//                     <p className="text-xs leading-none">Gray</p>
//                     <p className="text-xs leading-none">2.8 Pounds</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-end mt-4 gap-1">
//                 {/* <div className="inline-flex space-x-1 items-center justify-center w-32 h-8 px-3 py-1.5 bg-blue-900 shadow border rounded-md border-blue-900">
//                   <p className="text-xs font-medium leading-none text-white">
//                     Top up Stock
//                   </p>
//                 </div> */}
//                 <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 border rounded-md border-gray-500"
//                   onClick={() =>
//                     router.push(DashBoardRoutes.INVENTORY_ALL)
//                   }
//                 >
//                   Top up Stock
//                 </button>
//                 <span className="flex rounded-full bg-black text-white p-1 items-center">
//                   -
//                 </span>
//                 <div className="w-6 h-5  items-center  border rounded-sm border-black">
//                   <p className="text-xs px-2 font-medium  ">22</p>
//                 </div>
//                 <span className=" flex rounded-full bg-black text-white p-1 items-center">
//                   -
//                 </span>
//                 <button className="bg-white hover:bg-gray-700 text-gray-400 py-2 px-4 border rounded-md border-gray-500">
//                   Create Order
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export {TableRow};
// import { ComputerImage } from "@/icons";
// import { DashBoardRoutes } from "@/utils";
// import { useRouter } from "next/router";
// import React, { useState } from "react";

// const TableRow = () => {
//   const [expanded, setExpanded] = useState(false);
//   const router = useRouter();

//   const expandRow = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="flex flex-col pt-4 mb-4 cursor-pointer">
//       <div className="flex justify-around">
//         <div className="p-2">
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               className="form-checkbox h-4 w-4 text-blue-500"
//             />
//           </div>
//         </div>
//         <div className="p-2">Item 1</div>
//         <div className="p-2">Facility 1</div>
//         <div className="p-2">Facility Name 1</div>
//         <div className="p-2">10</div>
//         <div className="p-2">SKU-001</div>
//         <div className="p-2">
//           <div
//             className="inline-flex items-start justify-start px-2 py-0.5 bg-blue-50 rounded-sm cursor-pointer"
//             onClick={expandRow}
//           >
//             <p className="text-xs leading-none text-blue-900">
//               {expanded ? "Show Less" : "Show More"}
//             </p>
//           </div>
//         </div>
//       </div>

//       {expanded && (
//          <>
//            <div
//              className="bg-blue-100 flex-grow p-4 border rounded-md border-gray-500"
//              style={{}}
//            >
//              <div className="flex flex-col py-2">
//                <div className="flex">
//                  <div className=" w-1/3">
//                    <ComputerImage />
//                  </div>
//                  <div className=" w-1/2">
//                    <div className="flex justify-around">
//                      <p className="text-xs font-semibold leading-none uppercase">
//                        Brief Description
//                      </p>
//                      <p className="text-xs font-semibold leading-none uppercase">
//                        Colour{" "}
//                      </p>
//                      <p className="text-xs font-semibold leading-none uppercase">
//                        Weight
//                      </p>
//                    </div>
//                    <div className="flex justify-around py-5">
//                      <p className="w-44 text-xs leading-none">
//                        MacBook Pros are supercharged by M1 chips.{" "}
//                      </p>
//                      <p className="text-xs leading-none">Gray</p>
//                      <p className="text-xs leading-none">2.8 Pounds</p>
//                    </div>
//                  </div>
//                </div>
//                <div className="flex justify-end mt-4 gap-1">
//                  {/* <div className="inline-flex space-x-1 items-center justify-center w-32 h-8 px-3 py-1.5 bg-blue-900 shadow border rounded-md border-blue-900">
//                    <p className="text-xs font-medium leading-none text-white">
//                      Top up Stock
//                    </p>
//                  </div> */}
//                  <button
//                    className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 border rounded-md border-gray-500"
//                    onClick={() =>
//                      router.push(DashBoardRoutes.INVENTORY_ALL)
//                    }
//                  >
//                    Top up Stock
//                  </button>
//                  <span className="flex rounded-full bg-black text-white p-1 items-center">
//                    -
//                  </span>
//                  <div className="w-6 h-5  items-center  border rounded-sm border-black">
//                    <p className="text-xs px-2 font-medium  ">22</p>
//                  </div>
//                  <span className=" flex rounded-full bg-black text-white p-1 items-center">
//                    -
//                  </span>
//                  <button className="bg-white hover:bg-gray-700 text-gray-400 py-2 px-4 border rounded-md border-gray-500">
//                    Create Order
//                  </button>
//                </div>
//              </div>
//            </div>
//          </>
//       )}
//     </div>
//   );
// };

// export { TableRow };

// import { ComputerImage } from "@/icons";
// import { DashBoardRoutes } from "@/utils";
// import { useRouter } from "next/router";
// import React, { useState } from "react";

// const TableRow = () => {
//   const [expanded, setExpanded] = useState(false);
//   const router = useRouter();

//   const expandRow = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div
//       className={`flex flex-col pt-4 mb-4 cursor-pointer transition-height duration-300 ${
//         expanded ? "h-80" : "h-16"
//       }`}
//       onClick={expandRow}
//     >
//       <div className="flex justify-around">
//         <div className="p-2">
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               className="form-checkbox h-4 w-4 text-blue-500"
//             />
//           </div>
//         </div>
//         <div className="p-2">Item 1</div>
//         <div className="p-2">Facility 1</div>
//         <div className="p-2">Facility Name 1</div>
//         <div className="p-2">10</div>
//         <div className="p-2">SKU-001</div>
//         <div className="p-2">
//           <div
//             className="inline-flex items-start justify-start px-2 py-0.5 bg-blue-50 rounded-sm cursor-pointer"
//             onClick={expandRow}
//           >
//             <p className="text-xs leading-none text-blue-900">
//               {expanded ? "Show Less" : "Show More"}
//             </p>
//           </div>
//         </div>
//       </div>

//       {expanded && (
//         <>
//           <div
//             className="bg-blue-100 flex-grow p-4 border rounded-md border-gray-500"
//             style={{}}
//           >
//             <div className="flex justify-around">
//               <div className="p-2">
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     className="form-checkbox h-4 w-4 text-blue-500"
//                   />
//                 </div>
//               </div>
//               <div className="p-2">
//                 <p className="text-xs uppercase">Item name</p>
//               </div>
//               <div className="p-2">
//                 <p className="text-xs uppercase">FACILITY ID</p>
//               </div>
//               <div className="p-2">
//                 <p className="text-xs uppercase">Facility NAME</p>
//               </div>
//               <div className="p-2">
//                 <p className="text-xs uppercase">QTY IN STOCK</p>
//               </div>
//               <div className="p-2">
//                 <p className="text-xs leading-none uppercase">SKU ID</p>
//               </div>
//               <div className="p-2">
//                 <div
//                   className="inline-flex items-start justify-start px-2 py-0.5 bg-blue-50 rounded-sm cursor-pointer"
//                   onClick={expandRow}
//                 >
//                   <p className="text-xs leading-none text-blue-900">
//                     Show Less
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col py-2">
//               <div className="flex">
//                 <div className=" w-1/3">
//                   <ComputerImage />
//                 </div>
//                 <div className=" w-1/2">
//                   <div className="flex justify-around">
//                     <p className="text-xs font-semibold leading-none uppercase">
//                       Brief Description
//                     </p>
//                     <p className="text-xs font-semibold leading-none uppercase">
//                       Colour{" "}
//                     </p>
//                     <p className="text-xs font-semibold leading-none uppercase">
//                       Weight
//                     </p>
//                   </div>
//                   <div className="flex justify-around py-5">
//                     <p className="w-44 text-xs leading-none">
//                       MacBook Pros are supercharged by M1 chips.{" "}
//                     </p>
//                     <p className="text-xs leading-none">Gray</p>
//                     <p className="text-xs leading-none">2.8 Pounds</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-end mt-4 gap-1">
//                 {/* <div className="inline-flex space-x-1 items-center justify-center w-32 h-8 px-3 py-1.5 bg-blue-900 shadow border rounded-md border-blue-900">
//                   <p className="text-xs font-medium leading-none text-white">
//                     Top up Stock
//                   </p>
//                 </div> */}
//                 <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 border rounded-md border-gray-500"
//                   onClick={() => router.push(DashBoardRoutes.INVENTORY_ALL)}
//                 >
//                   Top up Stock
//                 </button>
//                 <span className="flex rounded-full bg-black text-white p-1 items-center">
//                   -
//                 </span>
//                 <div className="w-6 h-5  items-center  border rounded-sm border-black">
//                   <p className="text-xs px-2 font-medium  ">22</p>
//                 </div>
//                 <span className=" flex rounded-full bg-black text-white p-1 items-center">
//                   -
//                 </span>
//                 <button className="bg-white hover:bg-gray-700 text-gray-400 py-2 px-4 border rounded-md border-gray-500">
//                   Create Order
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export { TableRow };
import { ComputerImage } from "@/icons";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Input } from "../Input";

const TopUpTableRow = () => {
  const [expanded, setExpanded] = useState(false);
  const [initialRowVisible, setInitialRowVisible] = useState(true);
  const router = useRouter();


  return (
    <div
      className={`flex flex-col pt-4 mb-4 cursor-pointer transition-height duration-300 ${
        expanded ? "h-80" : "h-16"
      }`}
    >
      <div className="flex justify-around">
        <div className="p-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-500"
            />
          </div>
        </div>
        <div className="p-2">Item 1</div>
        <div className="p-2">Facility 1</div>
        <div className="p-2">
          <Input placeholder="" size="sm" className=" pt-0" />
        </div>

        <div className="p-2">
          <p className="">Badagry, Lagos</p>
        </div>
        <div className="p-2">Facility Name 1</div>
        <div className="p-2">
          <p className="">Black</p>
        </div>
        <div className="p-2">
          <p className="">22kg</p>
        </div>
        <div className="p-2">
          <p className="">456,000</p>
        </div>
      </div>
    </div>
  );
};

export { TopUpTableRow };
