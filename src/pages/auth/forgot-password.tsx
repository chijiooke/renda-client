import { LoginContainer, OnboardLayout } from "@/layout";
import { Button, Input } from "@/components";
import { useRouter } from "next/router";
import { AuthRoutes } from "@/utils";
import { useFormik } from "formik";
import { formikCaption, formikError } from "@/utils";
import * as Yup from "yup";

const ForgotPassword = () => {
  const router = useRouter();

  const next = () => {
    setTimeout(() => {
      router.push(AuthRoutes.RESET_OTP);
    }, 2000);
  };
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required(" email required"),
    }),
    onSubmit: () => {
      next();
    },
  });
  return (
    <OnboardLayout steps={false}>
      <div className="w-100 mt-20">
        <div>
          <h1 className="font-bolder text-[35px] text-black font-extrabold my-5">
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
              type="secondary"
              className="w-[30%]"
            />
            <Button title="Next" handleClick={formik.handleSubmit} />
          </div>
        </div>
      </div>
    </OnboardLayout>
  );
};

export default ForgotPassword;
