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
  const [error, setError] = useState<any>("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { getStarted } = useSelector((state: StoreState) => state);
  const register = async (data: any) => {
    setLoading(true);
    try {
      const response = await axios.post(baseURL + "customerregister", data);
      console.log(response);
      // if(response.ok){
      //   router.push(OnboardRoutes.CONFIRM_EMAIL);
      // }
    } catch (error) {
      setError(error);
      console.log(error);
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
          "Password must contain at least an uppercase letter, a number, a symbol and at least six characters"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password must match")
        .required("Confirm password is required"),
    }),
    onSubmit: ({ password }) => {
      // register({ ...getStarted, password });
      // dispatch({ type: OnboardingAction.SET_PASSWORD, payload: password });
      router.push(OnboardRoutes.CONFIRM_EMAIL);
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
