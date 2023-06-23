import React, { useEffect, useState } from "react";
import { TableRow } from "./allRow";
import { StoreState } from "@/store/reducer";
import { baseURL } from "@/utils";
import axios from "axios";
import { useSelector } from "react-redux";

type Inventorie = {
  id: number;
  dateAdded: string;
  dateUpdated: string;
  customerBusinessId: string;
  deliveryDetails: {
    id: number;
    customerBusinessId: string;
    deliveryDetailsId: number;
    pickupLocation: string;
    customerDeliveryDetails: any;
    rendaPickUpDetails: any;
    deliveryBy: string;
    totalNumberOfItems: number;
    totalValue: number;
    deliveryStatus: string;
  };
  inventoryItems: Array<{
    id: number;
    skuId: string;
    itemName: string;
    quantity: number;
    description: string;
    size: string;
    colour: string;
    picture: string;
    unitPrice: number;
    weight: null;
    customerBusinessId: string;
    storageFacilityId: string;
    storageFacility: null;
    itemPosition: string;
    quantityRecieved: number;
    quantityDamaged: number;
    quantityMissing: number;
    acceptanceStatus: string;
  }>;
  storageFacilityId: string;
  storageFacility: {
    storageFacilityName: string;
  };
};

const TableDetails = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleShowMore = (row :any) => {
    if (expandedRow === row) {
      setExpandedRow(null);
    } else {
      setExpandedRow(row);
    }
  };

    const { user } = useSelector((state: StoreState) => state);
    const [inventories, setInventories] = useState<Inventorie[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            baseURL +
              `api/customers/${user.customerId}/InboundInventory/inventories`
          );
          setInventories(data);
        } catch (error) {
          console.error("Failed to fetch data from the endpoint:", error);
        }
      };

      fetchData();
    }, []);

  return (
    <div className="container h-[60vh] mx-auto pt-4">
      <div
        className="bg-white pl-10 h-20 grid grid-cols-8 border rounded-sm border-black border-opacity-25"
        style={{}}
      >
        <div className="flex items-center p-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
          />
        </div>
        <div className="pl-0 flex items-center">
          <p className=" leading-none font-semibold uppercase">SKU ID</p>
        </div>
        <div className="pl-0 flex items-center">
          <p className="font-semibold uppercase">Item name</p>
        </div>
        <div className=" flex items-center">
          <p className=" font-semibold uppercase">FACILITY ID</p>
        </div>
        <div className=" flex items-center">
          <p className=" font-semibold uppercase">Facility NAME</p>
        </div>
        <div className=" flex items-center">
          <p className=" font-semibold uppercase">QTY IN STOCK</p>
        </div>
        <div className=" flex items-center">
          <p className=" font-semibold uppercase">Unit price</p>
        </div>
        <div className="p-2 flex items-center">
          <p className=" font-semibold uppercase">ACTION</p>
        </div>
      </div>
      {inventories.map(
        (inventory) =>
          inventory.inventoryItems.map((inx) => (
            <TableRow key={inx.id} inventoryItem={inx} Inventory={inventory} />
          ))
        // <TableRow key={inventory.id} inventory={inventory} />
      )}
      {/* <TableRow />
      <TableRow /> */}
    </div>
  );
};

export { TableDetails };
