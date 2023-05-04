import { useState } from "react";
import { LoginContainer } from "@/layout";
import { Input, Button, OTPInput } from "@/components";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formikCaption, passwordRegex, formikError, AuthRoutes } from "@/utils";
const ResetPassword = () => {
  const [done, setDone] = useState<boolean>(false);
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
    onSubmit: () => {
      setDone(true);
    },
  });
  return (
    <LoginContainer>
      {!done && (
        <div className="w-100">
          <div>
            <h1 className="text-black mb-3 text-[25px] font-bold">
              Enter New Password
            </h1>
            <p className="text-gray-500 mt-3 text-1xl">
              {" "}
              Your new password should be different from previously used
              passwords
            </p>
          </div>
          <div className="mb-2 w-100">
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

            <Button
              title="Submit"
              className="w-[50px]"
              handleClick={formik.handleSubmit}
            />
          </div>
        </div>
      )}
      {done && <AllDone />}
    </LoginContainer>
  );
};

const AllDone = () => {
  const router = useRouter();
  return (
    <div className="flex text-center flex-col justify-between items-center m-auto w-100">
      <img
        src="/assets/images/Icon.svg"
        alt="successful icon"
        className="w-[100px] mb-2"
      />
      <div>
        <h1 className="font-bold text-black text-[16px]">All Done</h1>
        <p className="text-gray-500 text-1xl">
          {" "}
          Your password has been reset .
        </p>
      </div>
      <div>
        <Button
          title="Back to Login"
          className="my-8"
          handleClick={() => router.push(AuthRoutes.LOGIN)}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
