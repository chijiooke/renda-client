import { LGAsOfNigeria } from "@/types/constants/lgas-of-nigeria";

export const getLga: (state: string) => {
    state: string;
    alias: string;
    lgas: string[];
  } = (state) => {
    const LGA = LGAsOfNigeria.filter((it) => it.state === state);
    return LGA[0];
  };