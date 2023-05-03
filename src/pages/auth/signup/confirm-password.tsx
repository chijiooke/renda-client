import { OnboardLayout } from "@/layout";
import { Input, Button } from "@/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formikCaption, passwordRegex, formikError } from "@/utils";
const ConfirmPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .matches(
          passwordRegex,
          "Password must contain at least an uppercase letter, a number, a symbol and at least six characters"
        )
        .required("Password must be entered"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password must match")
        .required("Confirm password must match"),
    }),
    onSubmit: () => {
      alert("kjhag");
    },
  });
  return (
    <OnboardLayout>
      <div className="max-w-5xl">
        <div>
          <h1 className="text-[35px] text-primary">Create a password</h1>
          <p className=" text-[13px] md:text-[16px] text-gray-200">
            {" "}
            Password should be at least 8 characters. To create a password, use
            at least one upper case (e.g. ABC), one number (e.g. 123) and one
            symbol (e.g. @#$).
          </p>
        </div>
        <form className="max-w-3xl">
          <div className="my-10">
            <Input
              label="Create Password"
              type="password"
              className="my-10"
              value={formik.values.password}
              handleChange={formik.handleChange}
              caption={formikCaption("password", formik)}
              error={formikError("password", formik)}
              name="password"
            />
            <Input
              label="Confirm Password"
              type="password"
              className="my-10"
              value={formik.values.confirmPassword}
              handleChange={formik.handleChange}
              caption={formikCaption("confirmPassword", formik)}
              error={formikError("confirmPassword", formik)}
              name="confirmPassword"
            />
            <div className="flex max-w-md">
              <Button title="Submit" handleClick={formik.handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </OnboardLayout>
  );
};

export default ConfirmPassword;
