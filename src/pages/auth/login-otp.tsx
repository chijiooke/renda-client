import { LoginContainer } from "@/layout";
import { Button, OTPInput } from "@/components";

const LoginOtp = () => {
  return (
    <LoginContainer>
      <div className="w-100">
        <div>
          <h1 className="text-black font-bold text-[40px]">Enter OTP</h1>
          <p className="text-gray-500 ">
            {" "}
            Please enter the 5-digit code sent to your email
          </p>
        </div>
        <div className="my-10">
          <OTPInput />
          <Button title="Proceed to Dashboard" className="mt-10" />
        </div>
      </div>
    </LoginContainer>
  );
};

export default LoginOtp;
