import { LoginContainer } from "@/layout";
import { Button, Input } from "@/components";
import { useRouter } from "next/router";
import { AuthRoutes } from "@/utils";
const ForgotPassword = () => {
  const router = useRouter();
  return (
    <LoginContainer>
      <div className="w-100">
        <div>
          <h1 className="font-bolder text-[35px] text-black">
            Oops! Forgotten Password?
          </h1>
          <p className="text-gray-500">
            No worries, we'll send you reset instructions. Please fill in the
            email you've used to create your account and we'll send you a reset
            link
          </p>
        </div>
        <div>
          <Input type="email" placeholder="Enter email" className="my-5" />
          <div className="flex justify-center gap-5 mt-10">
            <Button title="Back to Login" type="secondary" />
            <Button
              title="Reset Password"
              handleClick={() => router.push(AuthRoutes.RESET_OTP)}
            />
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default ForgotPassword;
