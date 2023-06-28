import { IExternalOrderItemType } from "../types/external-order-types";

export  const hasInValidItems = (items:IExternalOrderItemType[]) => {
    let isValid = true;
    items.forEach((item) => {
      if (
        item.dimension === "" ||
        item.itemName == "" ||
        item.quantity === undefined ||
        item.unitPrice === undefined
      ) {
        isValid = false;
      }
    });
    return isValid;
  };