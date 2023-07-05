import { Trash } from "@/icons";
import { FC, useState } from "react";
import { InternalOrderItemType } from "../Inventory/types/inventory-order-types";
import { StateReducerActions } from "@/types";
import { useDispatch } from "react-redux";
import { formatAmount } from "@/utils/format-currency";

export const DeliveryDetails: FC<{
  data: InternalOrderItemType;
  index: number;
}> = ({ data, index }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="grid grid-c-6 mx-5 justify-center py-5 items-center cursor-pointer">
        <p className="text-center">{data?.skuId}</p>
        <p className="text-center">{data?.itemName}</p>
        <p className="text-center">{data?.dimension}</p>
        <p className="text-center">
          ₦{formatAmount(data?.unitPrice.toString())}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            className="bg-black text-white text-lg font-bold flex items-center justify-center w-10 h-10 rounded-full"
            onClick={() => {
              dispatch({
                type: StateReducerActions.DECREMENT_DELIVERY_VAN_ORDER_QUANTITY,
                payload: { orderIndex: index, itemID: data?.skuId },
              });
            }}
          >
            -
          </button>
          <span className="mx-2 text-lg font-bold">
            {data?.orderQuantity}/{data?.quantity}
          </span>
          <button
            className="bg-black text-white text-lg font-bold flex items-center justify-center w-10 h-10 rounded-full"
            onClick={() => {
              dispatch({
                type: StateReducerActions.INCREMENT_DELIVERY_VAN_ORDER_QUANTITY,
                payload: { orderIndex: index, itemID: data?.skuId },
              });
            }}
          >
            +
          </button>
        </div>
        <p className="flex justify-center">
          <Trash />
        </p>
      </div>
    </>
  );
};
