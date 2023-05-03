import { useContext } from "react";
import { OnboardContext } from "@/context";

const useOnboardContext = () => {
  const context = useContext(OnboardContext);
  if (!context) {
    throw Error(
      "useOnboardContext must be used inside an OnboardContextProvider"
    );
  }
  return context;
};

export { useOnboardContext };
