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
    businessIndustry: string;
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
