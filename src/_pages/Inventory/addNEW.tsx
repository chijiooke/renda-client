import { AddForm, Button, Input } from "@/components";
import { AddIcon, CheckIcon, DeleteIcon } from "@/icons";
import { DashBoardRoutes } from "@/utils";
import { useRouter } from "next/router";

const AddNewInventory = () => {
  const router = useRouter();
  return (
    <div>
      <table className="w-full bg-white  text-center">
        <thead>
          <tr className="rounded-sm border-2 text-center">
            <div className="invisible">
              <Button title="Delete All" size="sm" className="w-[.5%] " />
            </div>

            <th className="py-4 ">ITEM NAME</th>
            <th>QTY</th>
            <th>BRIEF DESCRIPTION</th>
            <th>DIMENTION</th>
            <th>COLOUR</th>
            <th>WEIGHT</th>
            <th>UNIT PRICE</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
      {/* <form className="flex gap-2 text-center m-5">
        <div className="flex items-center justify-center flex-1 bg-white ">
          <AddIcon />
        </div>
        <div className="flex items-center justify-center flex-1 bg-white ">
          <DeleteIcon />
        </div>
        <Input placeholder="Item name" size="md" />
        <Input placeholder="Qty" size="md" />
        <Input placeholder="Brief description" size="md" />
        <Input placeholder="Dimension" size="md" />
        <Input placeholder="Colour" size="md" />
        <Input placeholder="Weight" size="md" />
        <Input placeholder="Unit price" size="md" />
        <Input placeholder="Image" size="md" />
        <div className=" justify-start w-28 px-3 bg-blue-900  border rounded-md border-black border-opacity-25">
          <button
            type="submit"
            className="text-center p-6 leading-3 text-white px-3"
          >
            Upload
          </button>
        </div>
      </form> */}
      <AddForm />
    </div>
  );
};

export { AddNewInventory };
