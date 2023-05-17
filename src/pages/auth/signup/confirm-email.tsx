import { OnboardLayout } from "@/layout";
import { Input, Button } from "@/components";
import { useRouter } from "next/router";
import { AuthRoutes, OnboardRoutes, baseURL } from "@/utils";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "@/store/reducer";
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
      <div className="max-w-4xl">
        <div>
          {error && (
            <p className="text-white bg-red-500 p-4 rounded-md  text-1xl">
              {" "}
              {error}
            </p>
          )}
          <div className="pt-10">
            <h1 className="text-[35px] text-primary font-extrabold my-5">
              Verify Your Account
            </h1>
            <p className="text-gray-200 text-[13px] md:text-[18px] leading-10">
              Click the ‘Verify email’ button below to get a verification link
              sent to your registered email address.
            </p>
          </div>
          <div className="flex gap-4 pt-15 max-w-2xl mb-15">
            <Button
              title="Resend email"
              className=""
              type="secondary"
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
