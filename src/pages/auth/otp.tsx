import { LoginContainer } from "@/layout";
import { Input, Button, OTPInput } from "@/components";
import { useRouter } from "next/router";
import { AuthRoutes } from "@/utils";

const ConfirmOTP = () => {
  const router = useRouter();
  return (
    <LoginContainer>
      <div className="w-100">
        <div className="my-10">
          <h1 className="text-black mb-10 text-[30px]">
            Check your email for your <br />
            Password reset code
          </h1>
          <p className="text-gray-500 text-[16px]">
            {" "}
            We sent a code to{" "}
            <span className="text-black font-bold">ad**@g****.com</span>
          </p>
        </div>
        <div className="mb-10">
          <OTPInput />
        </div>
        <div className="flex gap-5 justify-center">
          <Button
            title="Back to Login"
            type="secondary"
            className="w-50"
            handleClick={() => router.push(AuthRoutes.LOGIN)}
          />
          <Button
            title="Next"
            handleClick={() => router.push(AuthRoutes.RESET_PASSWORD)}
          />
        </div>
        <p className="text-gray-500 mt-10">
          Didn't recieve the email?{" "}
          <span className="font-bold text-primary">
            <a role="button">Click to Resend</a>
          </span>
        </p>
      </div>
    </LoginContainer>
  );
};

export default ConfirmOTP;
