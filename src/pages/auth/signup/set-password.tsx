import { Button, Input } from "@/components";
import { OnboardLayout } from "@/layout";
import { StoreState, UserData } from "@/store/types/store-state.types";

import {
  OnboardRoutes,
  baseURL,
  formikCaption,
  formikError,
  passwordRegex,
} from "@/utils";
import { capitalizeText } from "@/utils/capitalizeText";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
const ConfirmPassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const { getStarted, KycFileList, companyRegistrationNumber } = useSelector(
    (state: StoreState) => state
  );
  const dispatch = useDispatch();
  const register = async (data: UserData) => {
    setLoading(true);
    setError("");
    const fd = new FormData();
    fd.append(
      "CompanyRegistrationCertificate",
      KycFileList.registrationCertificate[0]
    );
    fd.append("ProofOfAddress", KycFileList.proofOfAddress[0]);
    for (let i = 0; i < KycFileList.directorsIds.length; i++) {
      fd.append("DirectorsIDs", KycFileList.directorsIds[i]);
    }

    Object.entries(data).forEach((v) => fd.append(capitalizeText(v[0]), v[1]));

    try {
      const { data: result } = await axios.post(
        baseURL +
          `CreateIdentity?CompanyRegistrationNumber=${companyRegistrationNumber}`,
        fd
      );

      if (result.success) {
        router.push(OnboardRoutes.CONFIRM_EMAIL);
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
      <div className="max-w-3xl  h-full">
        <div>
          <h1 className="text-[35px] text-primary font-extrabold">
            Create A Password
          </h1>
          <p className=" text-[13px] md:text-[16px] text-[#828282]">
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
        <form className="max-w-md">
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
