import { OnboardLayout } from "@/layout";
import { Input, Button } from "@/components";
import { useRouter } from "next/router";
import { AuthRoutes } from "@/utils";

const ConfirmEmail = () => {
  const router = useRouter();

  return (
    <OnboardLayout>
      <div className="max-w-4xl mt-20">
        <div>
          <div className="pt-10">
            <h1 className="text-[35px] text-primary">
              Yeah! Confirm your Email
            </h1>
            <p className="text-gray-200 text-[13px] md:text-[16px]">
              An email has been sent to{" "}
              <span className="font-bold">o**@r****.com</span> with a link to
              verify your account. If you have not received the email after a
              few minutes, please check your spam folder.
            </p>
          </div>
          <div className="flex gap-4 pt-15">
            <Button
              title="Back to Login"
              className="max-w-1xl"
              handleClick={() => router.push(AuthRoutes.LOGIN)}
            />
          </div>
        </div>
      </div>
    </OnboardLayout>
  );
};

export default ConfirmEmail;
