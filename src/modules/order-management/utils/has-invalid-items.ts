import { ExternalOrderItemType } from "../types/external-order-types";

export  const hasInValidItems = (items:ExternalOrderItemType[]) => {
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