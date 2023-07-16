
import { InventoryItemType, StorageFacilityType } from "@/modules/inventory/types/inventory-data-type";
import { InternalOrdersPostRequestType } from "@/modules/inventory/types/inventory-order-types";
import { InventoryType } from "../reducer";
import { UserType } from "./user-types";

export interface UserData {
  businessName: string;
  contactPerson: string;
  businessEmailAddress: string;
  emailAddress: string;
  officeAddress: string;
  phoneNumber: string;
  businessPhoneNumber: string;
  businessIndustry: string | undefined;
  businessAddress?: string;
  password?: string;
}

export interface StoreState {
  getStarted: UserData;
  userId: string;
  user: UserType | null;
  companyRegistrationNumber: string;
  Kyc: FormData;
  KycFileList: {
    registrationCertificate: File[];
    proofOfAddress: File[];
    directorsIds: File[];
  };
  storageFacilityFilterList?: StorageFacilityType[];
  loginDetails: {
    value: string;
    password: string;
    id: string;
    otp: string;
  };
  onboardSteps: {
    getStarted: "done" | "not-done";
    kycUpload: "done" | "not-done";
    createPassword: "done" | "not-done";
    confirmEmail: "done" | "not-done";
  };
  bookingDetails: {
    amount: number;
    bookingId: string;
    detail?: {
      facility: string;
      location: string;
      type: string;
      duration: string;
      id: string;
    };
  };
  inventoryItems: InventoryType[];
  myDeliveryVanOrders: InternalOrdersPostRequestType[];
  selectedInventoryItemsToOrder: InventoryItemType[];
}
