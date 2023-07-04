import { UploadArea } from "@/components/UploadArea";
import { useRouter } from "next/router";

const AddViaCsv = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full">
        <div className="ml-10 mt-5 cursor-pointer">
          <p className="text-sm font-semibold">Upload your CSV file</p>

          <UploadArea />
          {/* <CSVReader/> */}
          <p className="text-xs leading-snug" style={{ width: 684 }}>
            To import your inventory details from CSV file, it has to be
            formatted correctly. Each file should have an Item name, <br />{" "}
            Quantity, Size, Picture of the Item, SKU ID, Unit Price, Brief
            Description. Click to download CSV Sample
          </p>
        </div>
      </div>
    </div>
  );
};

export { AddViaCsv };
