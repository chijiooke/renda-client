import { InternalOrdersPostRequestType } from "@/_tabs/Inventory/types/inventory-order-types";
import { InventoryType } from "../reducer";
import { UserType } from "./user-types";
import { InventoryItemType } from "@/_tabs/Inventory/types/inventory-data-type";

export interface StoreState {
  getStarted: {
    businessName: string;
    contactPerson: string;
    businessEmailAddress: string;
    emailAddress: string;
    officeAddress: string;
    phoneNumber: string;
    businessPhoneNumber: string;
    businessIndustry: string | undefined;
    businessAddress?: string;
  };
  userId: string;
  user: UserType | null;
  companyRegistrationNumber: string;
  Kyc: FormData;
  fileList: {
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
  };
  inventoryItems: InventoryType[];
  myDeliveryVanItems: InternalOrdersPostRequestType[];
  selectedInventoryItemsToOrder: InventoryItemType[];
}
