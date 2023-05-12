import { OnboardLayout } from "@/layout";
import { Input, Button } from "@/components";
import { useRouter } from "next/router";
import { AuthRoutes, OnboardRoutes, baseURL, obscureEmail } from "@/utils";
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
              Confirm your Email Address
            </h1>
            <p className="text-gray-200 text-[13px] md:text-[18px] leading-10">
              An email has been sent to{" "}
              <span className="font-bold">
                {obscureEmail(getStarted.businessEmailAddress)}
              </span>{" "}
              with a link to verify your account. If you have not received the
              email after a few minutes, please check your spam folder.
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
