export type DataType = {
  nameOfItem: string;
  dimension: string;
  quantity: string;
  unitPrice: string;
};

export interface IOrderType {
  recipientName: string;
  storageFacilityId: string;
  paymentMode: string;
  numberOfItems: number;
  reciepientName: string;
  reciepientPhoneNo: string;
  pickUpAddress: string;
  deliveryLocation: string;
  deliveryAddress: string;
  pickUpTime: string;
  dispatchTime: string;
  customerId: string;
  orderItems: IOrderItemType[];
}

export interface IOrderItemType {
  dimension: string;
  quantity: number;
  skuId: string;
  unitPrice: number;
}

export interface IExternalOrderType {
  recipientName: string;
  paymentMode: string;
  numberOfItems: number;
  recipientPhoneNo: string;
  pickUpAddress: string;
  pickUpLGA: string;
  deliveryLGA: string;
  deliveryAddress: string;
  deliveryDate:string;
  orderItems: IExternalOrderItemType[];
  contactName: string;
  contactPhoneNumber: string;
  // customerId: string;
  // deliveryLocation: string;
   // pickUpTime: string;
  // dispatchTime: string;
}

export interface IExternalOrderItemType {
  dimension: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
}
