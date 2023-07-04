import { AllInventoryTableDetails } from "./AllInventoryTableDetails";

export const AllInventoryTable = () => {
  return (
    <div>
      <div>
        <AllInventoryTableDetails />
      </div>
      <div className="flex justify-between bottom-0 m-4" style={{}}>
        <p className="opacity-50 text-xs font-medium text-black text-opacity-50">
          Showing 1{" "}
        </p>
        <div className="flex space-x-2.5 items-start justify-start bottom-0">
          <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
            <p className="text-xs font-medium text-center text-gray-500">
              Previous
            </p>
          </div>
          <div
            style={{ backgroundColor: `#1B547F` }}
            className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5  rounded-sm"
          >
            <p className="text-xs font-medium text-center text-white">1</p>
          </div>
          <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
            <p className="text-xs font-medium text-center text-gray-500">2</p>
          </div>
          <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
            <p className="text-xs font-medium text-center text-gray-500">3</p>
          </div>
          <div className="inline-flex flex-col items-center justify-center h-full px-2.5 py-1.5 border rounded-sm border-black border-opacity-25">
            <p className="text-xs font-medium text-center text-gray-500">
              Next
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
