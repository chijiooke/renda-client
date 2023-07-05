import { useState } from "react";
import { LoginContainer, OnboardLayout } from "@/layout";
import { Button, Input } from "@/components";
import { useRouter } from "next/router";
import { AuthRoutes, baseURL } from "@/utils";
import { useFormik } from "formik";
import { formikCaption, formikError } from "@/utils";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { StateReducerActions } from "@/types";

const ForgotPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const next = async (email: string) => {
    setLoading(true);
    setError("");
    try {
      const { data: response } = await axios.post(baseURL + "AccountRecovery", {
        email,
      });
      if (response.success) {
        dispatch({
          type: StateReducerActions.SET_LOGIN_DETAILS,
          payload: { value: email, password: "", id: response.data.userid },
        });
        router.push(AuthRoutes.RESET_OTP);
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
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required(" email required"),
    }),
    onSubmit: ({ email }) => {
      next(email);
    },
  });
  return (
    <OnboardLayout steps={false}>
      <div className="w-100 mb-20">
        {error && (
          <p className="text-white bg-red-500 p-4 rounded-md my-5 text-1xl">
            {" "}
            {error}
          </p>
        )}
        <div>
          <h1 className="font-bolder text-[35px] text-primary font-extrabold my-5">
            Oops! Forgotten Password?
          </h1>
          <p className="text-gray-600 text-2xl my-5">
            No worries, we'll send you reset instructions. Please fill in the
            email you've used to create your account and we'll send you a reset
            link
          </p>
        </div>
        <div className="max-w-3xl">
          <Input
            type="email"
            placeholder="Enter email"
            className="my-5"
            value={formik.values.email}
            handleChange={formik.handleChange}
            name="email"
            caption={formikCaption("email", formik)}
            error={formikError("email", formik)}
          />
          <div className="flex justify-center gap-5 mt-10 max-w-2xl">
            <Button
              title="Back to Login"
              variant="secondary"
              className="w-[30%]"
              handleClick={() => router.push(AuthRoutes.LOGIN)}
            />
            <Button
              title="Next"
              handleClick={formik.handleSubmit}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </OnboardLayout>
  );
};

export default ForgotPassword;
