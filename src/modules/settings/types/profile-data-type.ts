export type ProfileDataType = {
  businessId: null;
  businessName: string;
  businessEmail: string;
  businessaddress: string;
  officeaddress: string;
  businessPhoneNo: string;
  contactPerson: string;
  emailAddress: string;
  phoneNumber: string;
  country: string;
  industry: string;
  zipCode: string;
  profilePic: string;
  publicKey: string;
  secretKey: string;
  signature: string;
  cacNo: string;
  registrationCertificate: string;
  proofOfAddress: string;
  directorIDs: DirectorIDType[];
  password?: string;
  city?: string;
//   zipCode?: string;
};

export type DirectorIDType = {
  directorId: string;
  imageUrl: string;
  createdDate: string;
  lastUpdated: string;
  customerKycId: string;
  customerKyc: null;
};
