import { LoginContainer, OnboardLayout } from "@/layout";
import { Input, Button, OTPInput } from "@/components";
import { useRouter } from "next/router";
import { AuthRoutes } from "@/utils";

const ConfirmOTP = () => {
  const router = useRouter();
  return (
    <OnboardLayout steps={false}>
      <div className="w-100">
        <div className="my-10">
          <h1 className="text-black mb-10 text-[30px] font-extrabold">
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
        <div className="flex gap-5 justify-center max-w-2xl">
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
        <p className="text-gray-200 mt-15 text-[16px]">
          Didn't recieve the email?{" "}
          <span className="font-bold text-primary">
            <a role="button">Click to Resend</a>
          </span>
        </p>
      </div>
    </OnboardLayout>
  );
};

export default ConfirmOTP;
