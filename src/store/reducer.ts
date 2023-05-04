import { OnboardingAction } from "@/types";
export interface StoreState {
  getStarted: {
    businessName: string;
    contactPerson: string;
    businessEmail: string;
    email: string;
    businessAddress: string;
    phoneNumber: string;
    businessPhoneNumber: string;
    industry: string;
    address?: string;
  };
  password: string;
  authenticated: boolean;
}
export const initialValues: StoreState = {
  getStarted: {
    businessName: "",
    contactPerson: "",
    businessEmail: "",
    email: "",
    businessAddress: "",
    phoneNumber: "",
    businessPhoneNumber: "",
    industry: "",
    address: "",
  },
  password: "",
  authenticated: false,
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
    case OnboardingAction.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
