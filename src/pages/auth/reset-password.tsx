import { Button, Input } from "@/components";
import { OnboardLayout } from "@/layout";
import { StoreState } from "@/store/types/store-state.types";

import {
  AuthRoutes,
  baseURL,
  formikCaption,
  formikError,
  passwordRegex,
} from "@/utils";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
const ResetPassword = () => {
  const [done, setDone] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { loginDetails } = useSelector((state: StoreState) => state);
  const submit = async (password: string) => {
    setLoading(true);
    setError("");

    try {
      const { data: response } = await axios.post(baseURL + "ResetPassword", {
        userId: loginDetails.id,
        password,
        code: loginDetails.otp,
      });
      if (response.success) {
        setDone(true);
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
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .matches(
          passwordRegex,
          "Password must contain at least a letter, a number and six characters"
        )
        .required("Password must be entered"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password must match")
        .required("Confirm password must match"),
    }),
    onSubmit: ({ password }) => {
      submit(password);
    },
  });
  return (
    <OnboardLayout steps={false}>
      {!done && (
        <div className=" max-w-2xl">
          {error && (
            <p className="text-white bg-red-500 p-4 rounded-md my-5 text-1xl">
              {" "}
              {error}
            </p>
          )}
          <div className="flex flex-col gap-4 ">
            <h1 className="text-black mb-3 text-[35px] font-bold text-primary">
              Enter New Password
            </h1>
            <p className="text-gray-500 mt-3 text-2xl">
              {" "}
              Your new password should be different from previously used
              passwords
            </p>
          </div>
          <div className="mb-2 ">
            <Input
              label="New Password"
              type="password"
              className="my-8"
              value={formik.values.password}
              handleChange={formik.handleChange}
              caption={formikCaption("password", formik)}
              error={formikError("password", formik)}
              name="password"
            />
            <Input
              label=" Confirm New Password"
              type="password"
              className="my-8"
              value={formik.values.confirmPassword}
              handleChange={formik.handleChange}
              caption={formikCaption("confirmPassword", formik)}
              error={formikError("confirmPassword", formik)}
              name="confirmPassword"
            />
            <div className="max-w-sm my-5">
              <Button
                title="Submit"
                className=""
                handleClick={formik.handleSubmit}
                loading={loading}
              />
            </div>
          </div>
        </div>
      )}
      {done && <AllDone />}
    </OnboardLayout>
  );
};

const AllDone = () => {
  const router = useRouter();
  return (
    <div className="flex text-center gap-5 flex-col justify-between items-center m-auto max-w-3xl mt-20">
      <img
        src="/assets/images/Icon.svg"
        alt="successful icon"
        className="w-[100px] mb-2"
      />

      <h1 className=" text-black text-[25px] font-extrabold ">All Done!</h1>
      <p className="text-gray-500 text-2xl"> Your password has been reset .</p>

      <div className="w-[40%]">
        <Button
          title="Go to Login"
          className=""
          handleClick={() => router.push(AuthRoutes.LOGIN)}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
