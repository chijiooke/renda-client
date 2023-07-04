import { Button, OTPInput } from "@/components";
import { LoginContainer } from "@/layout";
import { StoreState } from "@/store/types/store-state.types";
import { StateReducerActions } from "@/types";
import { DashBoardRoutes, baseURL } from "@/utils";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const LoginOtp = () => {
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const { loginDetails } = useSelector((state: StoreState) => state);
  const router = useRouter();

  const resentOtp = async () => {
    setLoading(true);
    setError("");
    try {
      const { data: response }: AxiosResponse = await axios.post(
        baseURL + "Authorize",
        { value: loginDetails.value, password: loginDetails.password }
      );
    } catch (error) {
      setError("Error sending Otp, try logging in again");
    } finally {
      setLoading(false);
    }
  };
  const verifyOtp = async () => {
    setLoading(true);
    setError("");
    try {
      const { data: response } = await axios.post(baseURL + "OtpLogin", {
        userId: loginDetails.id,
        otp: otp,
      });
      if (response.success) {
        sessionStorage.setItem("userId", response.data.userId);
        dispatch({
          type: StateReducerActions.SET_USER_ID,
          payload: response.data.userId,
        });

        router.push(DashBoardRoutes.DASHBOARD);
      }
    } catch (error) {
      setError(
        (error as any).response?.data.errorMessage ||
          (error as any).response?.data.data
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <LoginContainer>
      <div className="w-100">
        {success && (
          <p className="text-white bg-green-500 p-4 rounded-md my-5 text-1xl">
            Login successful
          </p>
        )}
        {error && (
          <p className="text-white bg-red-500 p-4 rounded-md my-5 text-1xl">
            {" "}
            {error}
          </p>
        )}
        <div className="pb-10">
          <h1 className="text-black font-bold text-[40px]">Enter OTP</h1>
          <p className="text-gray-200  text-[18px]">
            {" "}
            Please enter the 5-digit code sent to your email
          </p>
        </div>
        <div className="my-15">
          <OTPInput handleChange={setOtp} />
          <div>
            <p className="text-gray-200 mt-10 text-[16px]">
              Didn't recieve code?
              <span className="font-bold text-primary">
                <a role="button" onClick={resentOtp}>
                  {" "}
                  Resend
                </a>
              </span>
            </p>
            <Button
              title="Proceed to Dashboard"
              className="mt-4"
              loading={loading}
              handleClick={verifyOtp}
            />
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default LoginOtp;
