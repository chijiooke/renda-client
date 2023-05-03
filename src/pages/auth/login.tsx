import { LoginContainer } from "@/layout";
import { Button, Input } from "@/components";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formikCaption, passwordRegex, formikError } from "@/utils";

const LoginPage = () => {
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
      alert("lkjh");
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
          <a
            role="button"
            className="flex flex-row-reverse text-gray-100 text-[16px]"
          >
            Forgot Password?
          </a>
          <Button
            title="Sing In"
            className="mt-6"
            handleClick={formik.handleSubmit}
          />
          <p className="text-center mt-8 text-[16px]">
            Don't have an account?{" "}
            <Link
              href="/auth/signup/get-started"
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
