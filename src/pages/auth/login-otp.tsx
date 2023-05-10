import { LoginContainer } from "@/layout";
import { Button, OTPInput } from "@/components";
import { useState } from "react";
import { useRouter } from "next/router";
import { AuthRoutes } from "@/utils";
const LoginOtp = () => {
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();
  const back = () => {
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };
  return (
    <LoginContainer>
      <div className="w-100">
        {success && (
          <p className="text-white bg-green-500 p-4 rounded-md my-5 text-1xl">
            Login successful
          </p>
        )}

        <div className="pb-10">
          <h1 className="text-black font-bold text-[40px]">Enter OTP</h1>
          <p className="text-gray-200  text-[18px]">
            {" "}
            Please enter the 5-digit code sent to your email
          </p>
        </div>
        <div className="my-15">
          <OTPInput />
          <Button
            title="Proceed to Dashboard"
            className="mt-20"
            loading={loading}
            handleClick={back}
          />
        </div>
      </div>
    </LoginContainer>
  );
};

export default LoginOtp;
