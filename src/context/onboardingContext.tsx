import { createContext, useReducer, Dispatch, ReactNode } from "react";
import { StateReducerActions } from "@/types";
export interface ContextState {
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
}
export const initialValues = {
  getStarted: {
    businessName: "jhgfd",
    contactPerson: "",
    businessEmail: "",
    email: "",
    businessAddress: "",
    phoneNumber: "",
    businessPhoneNumber: "",
    industry: "",
    address: "",
  },
};
interface OnboardContextType {
  state: ContextState;
  dispatch: Dispatch<ActionType>;
}

interface ActionType {
  type: StateReducerActions;
  payload: any;
}
export const OnboardContext = createContext<OnboardContextType>({
  state: initialValues,
  dispatch: {} as Dispatch<ActionType>,
});

export const onboardReducer = (state: ContextState, action: ActionType) => {
  switch (action.type) {
    case StateReducerActions.SET_GET_STARTED:
      return {
        ...state,
        getStarted: action.payload,
      };
    default:
      return state;
  }
};

export const OnboardContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(onboardReducer, initialValues);

  return (
    <OnboardContext.Provider value={{ state, dispatch }}>
      {children}
    </OnboardContext.Provider>
  );
};
