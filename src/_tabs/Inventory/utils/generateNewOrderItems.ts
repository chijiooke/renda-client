import { InternalOrdersPostRequestType } from "../types/inventory-order-types";

type generateNewOrderItemType = ({
    storageFacilityId,
    orderItems,
  }: {
    storageFacilityId: any;
    orderItems: any;
  }) => InternalOrdersPostRequestType;

export const generateNewOrderItem: generateNewOrderItemType = ({
    storageFacilityId,
    orderItems,
  }) => {
    const order = new InternalOrdersPostRequestType();
    order.storageFacilityId = storageFacilityId;
    order.customerId = "";
    order.deliveryAddress = "";
    order.deliveryLGA = "";
    order.deliveryState = "";
    order.dispatchTime = "";
    order.numberOfItems = 1;
    order.paymentMode = "";
    order.pickUpAddress = "";
    order.pickUpTime = "";
    order.reciepientName = "";
    order.reciepientPhoneNo = "";
    order.orderItems = orderItems;
    return order;
  };