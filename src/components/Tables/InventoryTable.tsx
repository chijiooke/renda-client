import React from "react";

interface InventoryTableProps {
  // Define any props needed for the InventoryTable component
}

const InventoryTable: React.FC<InventoryTableProps> = () => {
  return (
    <div>
      <div className="inline-flex space-x-1 items-center justify-center w-36 h-10 px-3 py-1.5 bg-black bg-opacity-50 shadow rounded-md">
        <p className="text-xs font-semibold leading-none text-white">
          Process Items
        </p>
      </div>
      <div
        className="bg-pink-900 bg-opacity-50 rounded-lg"
        style={{ width: 1071.28, height: 59.55 }}
      />
      <img
        className="w-28 h-8 rounded-lg"
        src="https://via.placeholder.com/106.6875x31.6875"
        alt="Logo"
      />
      <div className="w-4 h-10 bg-gray-300 border rounded-lg border-black" />
      <div className="w-56 h-10">
        <div className="flex items-center justify-start flex-1 h-full pl-7 pr-9 py-2.5 bg-blue-900 rounded-lg">
          <p className="text-sm font-medium leading-tight text-white">
            Add a Single Inventory
          </p>
        </div>
      </div>
      <div className="w-44 h-10">
        <div className="flex items-center justify-center flex-1 h-full pl-10 pr-12 py-2.5 bg-gray-100 rounded-lg">
          <p className="text-sm font-medium leading-tight text-gray-500">
            Add via CSV
          </p>
        </div>
      </div>
      <div className="w-48 h-10">
        <div className="flex items-center justify-start flex-1 h-full pl-9 pr-16 py-2.5 bg-gray-100 rounded-lg">
          <p className="text-sm font-medium leading-tight text-black text-opacity-50">
            Import via API
          </p>
        </div>
      </div>
      <div
        className="bg-white border rounded-sm border-black border-opacity-25"
        style={{ width: 1013, height: 48 }}
      />
      <div className="inline-flex flex-col space-y-1.5 items-start justify-start">
        <p className="text-xl font-semibold leading-none">Add New Stock</p>
        <p className="text-xs font-medium leading-tight text-gray-500">
          Add new stock via your preferred upload channel
        </p>
      </div>
      <table className="main-table">
        <thead>
          <tr>
            <th className="text-xs font-medium uppercase">Item name</th>
            <th className="text-xs font-medium uppercase">Qty</th>
            <th className="text-xs font-medium uppercase">Dimension</th>
            <th className="text-xs font-medium uppercase">Brief Description</th>
            <th className="text-xs font-medium uppercase">Colour</th>
            <th className="text-xs font-medium uppercase">Unit Price</th>
            <th className="text-xs font-medium uppercase">IMAGE</th>
            <th className="text-xs font-medium uppercase">Weight</th>
          </tr>
        </thead>
        <tbody>{/* Add your table rows here */}</tbody>
      </table>
      <div className="inline-flex items-center justify-start w-36 h-10 px-3 py-1.5 bg-white shadow border rounded-md border-black border-opacity-25">
        <p className="text-xs leading-3 text-black text-opacity-50">
          enter item name
        </p>
      </div>
      <div className="inline-flex items-center justify-start w-16 h-10 px-3 py-1.5 bg-white shadow border rounded-md border-black border-opacity-25">
        <p className="text-xs leading-3 text-black text-opacity-50">qty</p>
      </div>
      <div className="inline-flex items-center justify-start w-20 h-10 px-3 py-1.5 bg-white shadow border rounded-md border-black border-opacity-25">
        <p className="text-xs leading-3 text-black text-opacity-50">
          dimension
        </p>
      </div>
      <div className="inline-flex items-center justify-start w-16 h-10 px-3 py-1.5 bg-white shadow border rounded-md border-black border-opacity-25">
        <p className="text-xs leading-3 text-black text-opacity-50">colour</p>
      </div>
      <div className="inline-flex items-center justify-start w-24 h-10 px-3 py-1.5 bg-white shadow border rounded-md border-black border-opacity-25">
        <p className="text-xs leading-3 text-black text-opacity-50">
          unit price
        </p>
      </div>
      <div className="inline-flex items-center justify-start w-28 h-10 px-3 py-1.5 bg-black bg-opacity-25 shadow border rounded-md border-black border-opacity-25">
        <p className="text-xs leading-3 text-white">upload</p>
      </div>
      <div className="inline-flex items-center justify-start w-44 h-10 px-3 py-1.5 bg-white shadow border rounded-md border-black border-opacity-25">
        <p className="text-xs leading-3 text-black text-opacity-50">
          enter brief description
        </p>
      </div>
      <div className="w-10 h-10">
        <div className="flex items-center justify-center flex-1 h-full p-3 bg-white border rounded-md border-black border-opacity-50">
          <img
            className="flex-1 h-full rounded-full"
            src="https://via.placeholder.com/16x16"
            alt="Image"
          />
        </div>
      </div>
      <div className="w-10 h-10">
        <div className="flex items-center justify-center flex-1 h-full p-3 bg-white border rounded-md border-black border-opacity-50">
          <img
            className="flex-1 h-full rounded-full"
            src="https://via.placeholder.com/16x16"
            alt="Image"
          />
        </div>
      </div>
      <div className="inline-flex items-center justify-start w-20 h-10 px-3 py-1.5 bg-white shadow border rounded-md border-black border-opacity-25">
        <p className="text-xs leading-3 text-black text-opacity-50">weight</p>
      </div>
      <div className="inline-flex flex-col items-end justify-end w-32 h-14">
        <div className="inline-flex space-x-2.5 items-center justify-end">
          <div className="flex space-x-1 items-center justify-center w-12 h-6 px-3 py-2 shadow rounded-sm">
            <p className="text-sm font-semibold leading-none text-green-700">
              Active
            </p>
          </div>
          <div className="relative" style={{ width: 22.75, height: 22.75 }}>
            <img
              className="w-6 h-6 absolute left-0 top-0 rounded-lg"
              src="https://via.placeholder.com/22.746450424194336x22.746450424194336"
              alt="Image"
            />
            <img
              className="w-1.5 h-1.5 absolute right-0 top-0 rounded-full"
              src="https://via.placeholder.com/6.498985767364502x6.498985767364502"
              alt="Image"
            />
          </div>
          <div
            className="relative rounded-full"
            style={{ width: 37.91, height: 37.91 }}
          >
            <div className="w-9 h-9 absolute left-0 top-0 border rounded-full border-white">
              <img
                className="flex-1 h-full rounded-full"
                src="https://via.placeholder.com/37.91075897216797x37.91075897216797"
                alt="Image"
              />
            </div>
            <img
              className="w-2 h-2 absolute right-0 bottom-0 rounded-full"
              src="https://via.placeholder.com/7.582150936126709x7.582150936126709"
              alt="Image"
            />
          </div>
        </div>
        <p className="text-xs font-bold">Business Name</p>
      </div>
    </div>
  );
};
export default { InventoryTable };