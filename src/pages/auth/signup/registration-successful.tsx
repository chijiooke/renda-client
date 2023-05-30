import { Button } from "@/components";
import { LoginContainer } from "@/layout";
import { useRouter } from "next/router";
import { AuthRoutes } from "@/utils";

const RegistrationSuccessful = () => {
  const router = useRouter();
  return (
    <LoginContainer autoCenter>
      <div
        className="flex flex-col mt-7 items-center gap-8 text-start "
        style={{ width: "700px" }}
      >
        <img
          src="/assets/images/Icon.svg"
          alt="successful icon"
          className="w-[100px] mb-2"
        />
        <div className="flex flex-col gap-7">
          <h2 className="text-primary font-bold text-5xl text-center">
            Welcome
          </h2>

          <p className="text-2xl text-center">
            Your account is now under review and will be activated within
            24hours. Kindly check your email for a link to login.
          </p>
          <Button
            handleClick={() => router.push(AuthRoutes.LOGIN)}
            title="Back to Login"
          />
        </div>
      </div>
    </LoginContainer>
  );
};

export default RegistrationSuccessful;
