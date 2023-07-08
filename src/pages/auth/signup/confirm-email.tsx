import { Button } from "@/components";
import { OnboardLayout } from "@/layout";
import { StoreState } from "@/store/types/store-state.types";
import { OnboardRoutes, baseURL } from "@/utils";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

const ConfirmEmail = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { getStarted } = useSelector((state: StoreState) => state);
  const [error, setError] = useState<string>("");
  const confirmEmail = async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.post(baseURL + "verifyRegistrationEmail", {
        email: getStarted.businessEmailAddress,
      });
      if (data.success) {
        router.push(OnboardRoutes.REGISTRATION_SUCCESSFUL);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setError((error as any).response.data.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <OnboardLayout>
      <div className="max-w-2xl">
        <div>
          {error && (
            <p className="text-white bg-red-500 p-4 rounded-md  text-1xl">
              {" "}
              {error}
            </p>
          )}
          <div className="mb-10">
            <h1 className="text-[35px] text-primary font-extrabold mb-10">
              Verify Your Account
            </h1>
            <p className="text-[13px] md:text-[18px] leading-10 text-[#828282] ">
              Click the ‘Verify email’ button below to get a verification link
              sent to your registered email address.
            </p>
          </div>
          <div className="flex gap-4 pt-15 max-w-md mt-10">
            <Button
              title="Resend email"
              className=""
              variant="secondary"
              loading={loading}
              handleClick={confirmEmail}
            />
            <Button
              title="Verify email"
              className=""
              handleClick={confirmEmail}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </OnboardLayout>
  );
};

export default ConfirmEmail;
