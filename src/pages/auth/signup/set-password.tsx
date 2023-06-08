import { useState } from "react";
import { OnboardLayout } from "@/layout";
import { Input, Button } from "@/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formikCaption, passwordRegex, formikError } from "@/utils";
import { OnboardingAction } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { OnboardRoutes, baseURL } from "@/utils";
import { registerCustomer } from "@/request/onboarding";
import { StoreState } from "@/store/reducer";
import axios from "axios";
const ConfirmPassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  console.log(router.pathname);
  const { getStarted, Kyc, companyRegistrationNumber } = useSelector(
    (state: StoreState) => state
  );
  const dispatch = useDispatch();
  const register = async (data: any) => {
    setLoading(true);
    setError("");
    try {
      const { data: result } = await axios.post(
        baseURL + "CreateIdentity",
        data
      );

      if (result.success) {
        const { data: response } = await axios.post(
          baseURL +
            `UploadKyc?CompanyRegistrationNumber=${companyRegistrationNumber}&userid=${result.data.userId}`,
          Kyc
        );
        if (response.success) {
          router.push(OnboardRoutes.CONFIRM_EMAIL);
        }
      }
    } catch (error) {
      setError(
        (error as any).response?.data.errorMessage ||
          (error as any).response?.data.data ||
          "Error creating account"
      );
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .matches(
          passwordRegex,
          "Password must contain at least an uppercase letter, a number, a symbol and at least 8 characters"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password must match")
        .required("Confirm password is required"),
    }),
    onSubmit: ({ password }) => {
      register({ ...getStarted, password });
    },
  });
  return (
    <OnboardLayout>
      <div className="max-w-5xl">
        <div>
          <h1 className="text-[35px] text-primary font-extrabold">
            Create A Password
          </h1>
          <p className=" text-[13px] md:text-[16px] text-gray-200">
            {" "}
            Password should be at least 8 characters. To create a password, use
            at least one upper case (e.g. ABC), one number (e.g. 123) and one
            symbol (e.g. @#$).
          </p>
        </div>
        {error && (
          <p className="text-white bg-red-500 p-4 rounded-md my-5 text-1xl">
            {" "}
            {error}
          </p>
        )}
        <form className="max-w-2xl">
          <div className="my-10 flex flex-col gap-10">
            <Input
              label="Create Password"
              type="password"
              value={formik.values.password}
              handleChange={formik.handleChange}
              caption={formikCaption("password", formik)}
              error={formikError("password", formik)}
              name="password"
            />
            <Input
              label="Confirm Password"
              type="password"
              value={formik.values.confirmPassword}
              handleChange={formik.handleChange}
              caption={formikCaption("confirmPassword", formik)}
              error={formikError("confirmPassword", formik)}
              name="confirmPassword"
            />
            <div className="flex max-w-md">
              <Button
                title="Submit"
                handleClick={formik.handleSubmit}
                loading={loading}
              />
            </div>
          </div>
        </form>
      </div>
    </OnboardLayout>
  );
};

export default ConfirmPassword;
