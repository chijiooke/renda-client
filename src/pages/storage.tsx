import { DashBoardLayout } from "@/layout";
import { StorageCard } from "@/components";
export default function Storage() {
  return (
    <DashBoardLayout>
      <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
        <div className="border-b-2 border-b-gray-300 p-7">
          <h1 className="text-2xl font-extrabold">Storage Facilities</h1>
        </div>
        <div className="grid grid-cols-4 gap-8 p-6 mt-5 ">
          <StorageCard />
          <StorageCard />
          <StorageCard />
          <StorageCard />
        </div>
      </div>
    </DashBoardLayout>
  );
}
