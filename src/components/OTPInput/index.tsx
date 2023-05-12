import { FC, useState } from "react";
import OtpInput from "react-otp-input";
type Props = {
  handleChange?: any;
};
const OTPInput: FC<Props> = ({ handleChange }) => {
  const [otp, setOtp] = useState("");
  const onChange = (val: string) => {
    if (Number(val)) {
      setOtp(val);
      handleChange(val);
    }
  };
  return (
    <OtpInput
      value={otp}
      onChange={onChange}
      numInputs={5}
      renderSeparator={""}
      renderInput={(props) => <input {...props} />}
      inputStyle={{
        width: "6rem",
        height: "6rem",
        margin: "20px 0rem",
        marginRight: "1.2rem",
        fontSize: "2rem",
        borderRadius: 4,
        border: "2px solid #1b547f",
      }}
    />
  );
};

export { OTPInput };
