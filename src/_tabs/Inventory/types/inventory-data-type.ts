export class InventoryDataType {
  id?: number;
  dateAdded?: Date;
  dateUpdated?: Date;
  customerBusinessId?: string;
  deliveryDetails?: DeliveryDetailsType;
  inventoryItems?: InventoryItemType[];
  storageFacilityId?: string;
  storageFacility?: StorageFacilityType;
}

export type DeliveryDetailsType = {
  id: number;
  customerBusinessId: string;
  deliveryDetailsId: number;
  pickupLocation: string;
  customerDeliveryDetails: null;
  rendaPickUpDetails: null;
  deliveryBy: string;
  totalNumberOfItems: number;
  totalValue: number;
  deliveryStatus: string;
};

export type InventoryItemType = {
  id: number;
  skuId: string;
  itemName: string;
  quantity: number;
  orderQuantity?: number;
  description: string;
  size: number;
  colour: string;
  picture: string;
  unitPrice: number;
  weight: null;
  customerBusinessId: string;
  storageFacilityId: string;
  storageFacility: StorageFacilityType;
  quantityRecieved: number;
  quantityDamaged: number;
  quantityMissing: number;
  itemPosition: string;
  acceptanceStatus: string;
};
export type StorageFacilityType = {
  storageFacilityId: string;
  dateOfCreation: Date;
  storageFacilityName: string;
  locationOfStorage: string;
  amenities: string;
  status: string;
  paymentStructure: string;
  minimumDurationOfUsage: number;
  maximumDurationOfUsage: number;
  storageType: string;
  partnerName: string;
  partnerPhoneNumber: number;
  rendermarkUp: null;
  serviceCharge: null;
  availableSpace: number;
  rendaPrice: number;
  priceOfStorage: number;
  commission: number;
  partnerEmail: string;
  dateCreated: Date;
  lastUpdated: null;
  totalSpaces: number;
  briefDescription: string;
  storageFacilityGovComplianceDocs: null;
  storageFacilityPropertyDocs: null;
  storageFacilityMedia: null;
  bookings: null;
};
