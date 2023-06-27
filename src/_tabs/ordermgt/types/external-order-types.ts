export type DataType = {
  nameOfItem: string;
  dimension: string;
  quantity: string;
  unitPrice: string;
};

export interface IOrderItemsDataType {
  orderItemsId: string;
  dimension: string;
  quantity: number;
  skuId: string;
  unitPrice: number;
  orderId: string;
  orders: IOrderType;
}

export interface IOrderType {
  orderId: string;
  recipientName: string;
  storageFacilityId: string;
  paymentMode: string;
  numberOfItems: number;
  dateCreated: Date;
  lastUpdated: Date;
  reciepientName: string;
  reciepientPhoneNo: string;
  pickUpAddress: string;
  deliveryLocation: string;
  deliveryAddress: string;
  pickUpTime: string;
  dispatchTime: string;
  status: string;
  customerId: string;
  customers: IOrderingCustomerDataType;
}

export interface IOrderingCustomerDataType {
  customerBusinessId: string;
  customerBusinessName: string;
  customerBusinessEmailAddress: string;
  customerBusinessAddress: string;
  customerOfficeAddress: string;
  customerBusinessPhoneNumber: string;
  customerBusinessIndustry: string;
  createdBy: string;
  createdDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  status: string;
  appUserId: string;
  appUsers: IAppUserType;
}

export interface IAppUserType {
  appUserId: string;
  contactName: string;
  email: string;
  passwordHash: string;
  phoneNo: string;
  emailConfirmationCode: string;
  emailConfirmed: true;
  resetPasswordCode: string;
  resetPasswordCodeExpiration: Date;
  failedLoginAttempts: number;
  isActive: boolean;
  isLocked: boolean;
  roleName: string;
  createdAt: Date;
  deactivationDate: Date;
  passwordResetExpirationTime: Date;
  isLockedOut: true;
  otpCode: string;
  otpExpirationTime: string;
  passwordResetRequestedAt: string;
  lockoutEnabled: true;
  lockoutEnd: Date;
}
