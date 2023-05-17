import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import { CheckIcon } from "@/icons";
const Facility = () => {
  return (
    <DashBoardLayout backAction backText="Back to Storage">
      <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
        <div className="border-b-2 border-b-gray-300 p-7 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold">Storage Facilities</h1>
          <div className="bg-[#EAF6FF] p-3 rounded border-1 border-[#1B547F] flex gap-4">
            <img src="/assets/images/box-check.svg" />
            <p className="font-normal">
              Notify me when there is more space available
            </p>
          </div>
        </div>
        <div className="flex gap-10 p-10">
          <div className="grid grid-cols-2 gap-5">
            <img
              src="/assets/images/storage-0.png"
              className="w-full object-cover rounded col-span-2 row-span-5"
            />
            <img
              src="/assets/images/storage-0.png"
              className="w-full object-cover rounded"
            />
            <img
              src="/assets/images/storage-0.png"
              className="w-full object-cover rounded"
            />{" "}
            <img
              src="/assets/images/storage-0.png"
              className="w-full object-cover rounded"
            />{" "}
            <img
              src="/assets/images/storage-0.png"
              className="w-full object-cover rounded"
            />
          </div>
          <div>
            <div className="mb-10 max-w-4xl">
              <h1 className="text-[25px] font-bold my-3">Name of Facility</h1>
              <p className="leading-10">
                Facility Description Lorem ipsum dolor sit amet consectetur.
                Euismod ac duis malesuada nascetur facilisi sed risus. Amet nunc
                nascetur pellentesque arcu consectetur integer felis. Sem
                ultrices eget sit vestibulum aliquam posuere tellus iaculis.
                Nunc fermentum sagittis fringilla mi.
              </p>
              <ul className="flex flex-wrap gap-3 max-w-2xl my-5">
                <li className="text-[16px] pr-8 flex items-center gap-3">
                  {" "}
                  <CheckIcon />
                  Generator
                </li>
                <li className="text-[16px] pr-8 flex items-center gap-3">
                  <CheckIcon />
                  Generator, CCTV
                </li>{" "}
                <li className="text-[16px] pr-8 flex items-center gap-3">
                  <CheckIcon />
                  CCTV
                </li>{" "}
                <li className="text-[16px] pr-8 flex items-center gap-3">
                  <CheckIcon />
                  Generator
                </li>{" "}
                <li className="text-[16px] pr-8 flex items-center gap-3">
                  <CheckIcon />
                  Generator, CCTV
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[18px] font-bold my-10">Facility Details</h1>
              <div>
                <div className="grid gap-1 grid-cols-2 max-w-2xl my-5">
                  <p className="text-[14px]">Facility ID</p>
                  <p className="text-[14px] opacity-60">#RN1234</p>
                </div>
                <div className="grid gap-1 grid-cols-2 max-w-2xl my-5">
                  <p className="text-[14px]">Facility ID</p>
                  <p className="text-[14px] opacity-60">#RN1234</p>
                </div>{" "}
                <div className="grid gap-1 grid-cols-2 max-w-2xl my-5">
                  <p className="text-[14px]">Facility ID</p>
                  <p className="text-[14px] opacity-60">#RN1234</p>
                </div>{" "}
                <div className="grid gap-1 grid-cols-2 max-w-2xl my-5">
                  <p className="text-[14px]">Facility ID</p>
                  <p className="text-[14px] opacity-60">#RN1234</p>
                </div>{" "}
                <div className="grid gap-1 grid-cols-2 max-w-2xl my-5">
                  <p className="text-[14px]">Facility ID</p>
                  <p className="text-[14px] opacity-60">#RN1234</p>
                </div>
              </div>
            </div>
            <div className="w-[25%] my-6">
              <Button title="Book Storage" className="w-[90%]" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Facility;
