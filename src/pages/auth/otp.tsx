import { Button, OTPInput } from "@/components";
import { OnboardLayout } from "@/layout";
import { StateReducerActions } from "@/types";
import { AuthRoutes, baseURL } from "@/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { EmailMask } from "@/container";
import axios from "axios";
import { StoreState } from "@/store/types/store-state.types";
const ConfirmOTP = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { loginDetails } = useSelector((state: StoreState) => state);

  const resentOtp = async () => {
    setLoading(true);
    setError("");
    try {
      const { data: response } = await axios.post(baseURL + "AccountRecovery", {
        email: loginDetails.value,
      });
    } catch (error) {
      setError(
        (error as any).response.data.errorMessage ||
          (error as any).response.data.data
      );
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    setError("");
    try {
      const { data: response } = await axios.post(baseURL + "VerifyOtp", {
        userId: loginDetails.id,
        otp: otp,
      });
      if (response.success) {
        dispatch({
          type: StateReducerActions.SET_LOGIN_DETAILS,
          payload: { ...loginDetails, otp },
        });
        router.push(AuthRoutes.RESET_PASSWORD);
      }
    } catch (error) {
      setError(
        (error as any).response.data.errorMessage ||
          (error as any).response.data.data
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <OnboardLayout steps={false}>
      <div className="w-100">
        {error && (
          <p className="text-white bg-red-500 p-4 rounded-md my-5 text-1xl">
            {" "}
            {error}
          </p>
        )}
        <div className="">
          <h1 className="text-primary mb-10 text-[35px] font-extrabold">
            Check your email for your <br />
            Password reset code
          </h1>
          <p className="text-gray-500 text-[16px]">
            {" "}
            We sent a code to{" "}
            <span className="text-black font-bold">
              <EmailMask email={loginDetails.value!} maskDomain />
            </span>
          </p>
        </div>
        <div className="mb-10">
          <OTPInput handleChange={setOtp} />
        </div>
        <div className="flex gap-5 justify-center max-w-2xl">
          <Button
            title="Back to Login"
            variant="secondary"
            className="w-50"
            handleClick={() => router.push(AuthRoutes.LOGIN)}
          />
          <Button title="Next" handleClick={verifyOtp} loading={loading} />
        </div>
        <p className="text-gray-200 mt-15 text-[16px]">
          Didn't recieve the email?{" "}
          <span className="font-bold text-primary">
            <a role="button" onClick={resentOtp}>
              Click to Resend
            </a>
          </span>
        </p>
      </div>
    </OnboardLayout>
  );
};

export default ConfirmOTP;
