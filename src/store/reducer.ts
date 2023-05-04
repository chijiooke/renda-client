import { OnboardingAction } from "@/types";
export interface StoreState {
  getStarted: {
    businessName: string;
    contactPerson: string;
    businessEmailAddress: string;
    contactEmailAddress: string;
    officeAddress: string;
    contactPhoneNumber: string;
    businessPhoneNumber: string;
    businessIndustry: string;
    businessAddress?: string;
  };
  authenticated: boolean;
}
export const initialValues: StoreState = {
  getStarted: {
    businessName: "",
    contactPerson: "",
    businessEmailAddress: "",
    contactEmailAddress: "",
    businessAddress: "",
    contactPhoneNumber: "",
    businessPhoneNumber: "",
    businessIndustry: "",
    officeAddress: "",
  },
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
    default:
      return state;
  }
};

export default reducer;
