import { DashBoardLayout } from "@/layout";
import { StorageCard } from "@/components";
import { useRouter } from "next/router";
import { DashBoardRoutes } from "@/utils";
export default function Storage() {
  const router = useRouter();
  return (
    <DashBoardLayout>
      <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
        <div className="border-b-2 border-b-gray-300 p-7">
          <h1 className="text-2xl font-extrabold">Storage Facilities</h1>
        </div>
        <div className="grid grid-cols-4 gap-8 p-6 mt-5 ">
          <StorageCard
            handleClick={() => router.push(DashBoardRoutes.STORAGE + "/ajaahh")}
          />
          <StorageCard
            handleClick={() => router.push(DashBoardRoutes.STORAGE + "/ajaahh")}
          />
          <StorageCard
            handleClick={() => router.push(DashBoardRoutes.STORAGE + "/ajaahh")}
          />
          <StorageCard
            handleClick={() => router.push(DashBoardRoutes.STORAGE + "/ajaahh")}
          />
        </div>
      </div>
    </DashBoardLayout>
  );
}
