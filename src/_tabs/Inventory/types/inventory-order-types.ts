export class InternalOrdersPostRequestType {
  recipientName?: string;
  storageFacilityId?: string;
  paymentMode?: string;
  numberOfItems?: number;
  reciepientPhoneNo?: string;
  reciepientName?: string;
  deliveryState?: string;
  deliveryLGA?: string;
  deliveryAddress?: string;
  pickUpAddress?: string;
  pickUpTime?: string;
  dispatchTime?: string;
  customerId?: string;
  orderItems?: InternalOrderItemType[];
}

export type InternalOrderItemType = {
  orderQuantity?: number;
  itemName?: string;
  dimension: string;
  quantity: number;
  skuId: string;
  unitPrice: number;
};

export type InternalOrdersType = {
  orderId: string;
  storageFacilityId: string;
  paymentMode: "PAID" | "PAY_ON_DELIVERY";
  numberOfItems: number;
  dateCreated: Date;
  lastUpdated: Date;
  reciepientName: string;
  reciepientPhoneNo: "2348083612288";
  pickUpAddress: string;
  deliveryState: string;
  deliveryLGA: string;
  deliveryAddress: string;
  pickUpTime: Date;
  dispatchTime: Date;
  status: string;
  customerId: string;
  customers: null;
};
