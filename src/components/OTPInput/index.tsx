import { FC, useState } from "react";
import OtpInput from "react-otp-input";

const OTPInput = () => {
  const [otp, setOtp] = useState("");
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={""}
      renderInput={(props) => <input {...props} />}
      inputStyle="p-10 w-[25px] h-[25px] border-primary mx-3 text-black text-center font-xl flex place-content-center"
    />
  );
};

export { OTPInput };
