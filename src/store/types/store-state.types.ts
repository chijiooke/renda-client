import { InternalOrdersPostRequestType } from "@/_tabs/inventory/types/inventory-order-types";
import { InventoryType } from "../reducer";
import { UserType } from "./user-types";
import { InventoryItemType } from "@/_tabs/inventory/types/inventory-data-type";

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
  myDeliveryVanItems: InternalOrdersPostRequestType[];
  selectedInventoryItemsToOrder: InventoryItemType[];
}
