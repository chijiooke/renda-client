export type DataType = {
  nameOfItem: string;
  dimension: string;
  quantity: string;
  unitPrice: string;
};

export type ExternalOrderResponseType = {
  externalOrderId: string;
  recipientName: string;
  storageFacilityId: string;
  paymentMode: string;
  numberOfItems: string;
  dateCreated: Date;
  lastUpdated: Date;
  reciepientName: string;
  reciepientPhoneNo: string;
  pickUpAddress: string;
  deliveryState: string;
  deliveryLGA: string;
  deliveryAddress: string;
  pickUpTime: string;
  dispatchTime: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
  customerId: string;
  customers: null;
  externalOrderItemsRes: ExternalOrderItemType[];
};

export type ExternalOrderRequestType = {
  // recipientName: string;
  storageFacilityId: string;
  paymentMode: string;
  numberOfItems: number;
  reciepientPhoneNo: string;
  reciepientName: string;
  pickUpAddress: string;
  deliveryState: string;
  deliveryLGA: string;
  pickUpLGA: string;
  deliveryAddress: string;
  pickUpTime: string;
  contactPhoneNo: string;
  dispatchTime: string;
  customerId: string;
  ExternalOrderItems: ExternalOrderItemType[];
};

export type ExternalOrderItemType = {
  dimension: string;
  quantity: number;
  itemName: string;
  unitPrice: number;
};
