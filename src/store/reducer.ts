import { OnboardingAction } from "@/types";
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
  authenticated: boolean;
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
}
export const initialValues: StoreState = {
  getStarted: {
    businessName: "",
    contactPerson: "",
    businessEmailAddress: "",
    emailAddress: "",
    businessAddress: "",
    phoneNumber: "",
    businessPhoneNumber: "",
    businessIndustry: "",
    officeAddress: "",
  },
  authenticated: false,
  companyRegistrationNumber: "",
  Kyc: new FormData(),
  fileList: {
    registrationCertificate: [],
    proofOfAddress: [],
    directorsIds: [],
  },
  loginDetails: {
    value: "",
    password: "",
    id: "",
    otp: "",
  },
  onboardSteps: {
    getStarted: "not-done",
    kycUpload: "not-done",
    createPassword: "not-done",
    confirmEmail: "not-done",
  },
};
interface ActionType {
  type: OnboardingAction;
  payload: any;
}

const reducer = (
  state: StoreState = initialValues,
  action: ActionType
): StoreState => {
  switch (action.type) {
    case OnboardingAction.SET_GET_STARTED:
      return {
        ...state,
        getStarted: action.payload,
      };
    case OnboardingAction.SET_COMPANY_NUMBER:
      return {
        ...state,
        companyRegistrationNumber: action.payload,
      };
    case OnboardingAction.SET_KYC:
      return {
        ...state,
        Kyc: action.payload,
      };
    case OnboardingAction.SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload,
      };
    case OnboardingAction.UPDATE_FILE_LIST:
      return {
        ...state,
        fileList: action.payload,
      };
    case OnboardingAction.SET_LOGIN_DETAILS:
      return {
        ...state,
        loginDetails: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
