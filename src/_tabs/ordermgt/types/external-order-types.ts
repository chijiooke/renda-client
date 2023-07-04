export type DataType = {
  nameOfItem: string;
  dimension: string;
  quantity: string;
  unitPrice: string;
};

export type ExternalOrderType = {
  externalOrdersId: string;
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
};

export type CreateExternalOrderType = {
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
  orderItems: CreateExternalOrderItemType[];
};

export type CreateExternalOrderItemType = {
  dimension: string;
  quantity: number;
  itemName: string;
  unitPrice: number;
};
