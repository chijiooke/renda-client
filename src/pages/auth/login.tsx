import { useState } from "react";
import { LoginContainer } from "@/layout";
import { Button, Input } from "@/components";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formikCaption, passwordRegex, formikError } from "@/utils";
import { OnboardRoutes, AuthRoutes } from "@/utils";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
    },
    validationSchema: Yup.object({
      emailOrPhone: Yup.string()
        .email("Invalid email format")
        .required("Email/Phone required"),
      password: Yup.string()
        .matches(
          passwordRegex,
          "Password must contain at least a letter, a number and six characters"
        )
        .required("Password must be entered"),
    }),
    onSubmit: () => {
      router.push(AuthRoutes.LOGIN_OTP);
    },
  });
  return (
    <LoginContainer>
      <form className="form w-100 ">
        <div className="text-left mb-11">
          <h1 className=" text-black text-[40px] mb-1">Welcome!</h1>
          <p className="font-[400] text-gray-500 ">Login to Continue</p>
        </div>
        <div>
          <Input
            label="Email/Phone"
            className="mb-4"
            type="email"
            value={formik.values.emailOrPhone}
            handleChange={formik.handleChange}
            name="emailOrPhone"
            caption={formikCaption("emailOrPhone", formik)}
            error={formikError("emailOrPhone", formik)}
          />
          <Input
            label="Password"
            type="password"
            className="mb-4"
            value={formik.values.password}
            handleChange={formik.handleChange}
            name="password"
            caption={formikCaption("password", formik)}
            error={formikError("password", formik)}
          />
          <Link
            href={AuthRoutes.FORGOT_PASSWORD}
            className="flex flex-row-reverse text-gray-100 text-[16px]"
          >
            Forgot Password?
          </Link>
          <Button
            title="Sing In"
            className="mt-6"
            handleClick={formik.handleSubmit}
            loading={loading}
          />
          <p className="text-center mt-8 text-[16px]">
            Don't have an account?{" "}
            <Link
              href={OnboardRoutes.GET_STARTED}
              className="text-primary font-bold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </LoginContainer>
  );
};

export default LoginPage;
