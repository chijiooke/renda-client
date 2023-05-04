import axios from "axios";
export const registerCustomer = async (data: any) => {
  try {
    const response = await axios.post("/customerregister");
    return { error: false, response };
  } catch (error) {
    return { error: true, msg: error };
  }
};
