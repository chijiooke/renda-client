import { useState } from "react";
import { LoginContainer } from "@/layout";
import { Button, Input } from "@/components";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formikCaption, passwordRegex, formikError } from "@/utils";
import { OnboardRoutes, AuthRoutes, baseURL } from "@/utils";
import { useRouter } from "next/router";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { OnboardingAction } from "@/types";

const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch();
  const login = async (data: any) => {
    setLoading(true);
    setError("");

    try {
      const { data: response }: AxiosResponse = await axios.post(
        baseURL + "Authorize",
        data
      );
      if (response.success) {
        dispatch({
          type: OnboardingAction.SET_LOGIN_DETAILS,
          payload: { ...data, id: response.data.userid },
        });
        router.push(AuthRoutes.LOGIN_OTP);
      } else {
        setError(
          (error as any).response.data.errorMessage ||
            (error as any).response.data.data
        );
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
      emailOrPhone: "",
      password: "",
    },
    validationSchema: Yup.object({
      emailOrPhone: Yup.string().required("Email/Phone required"),
      password: Yup.string().required("Password must be entered"),
    }),
    onSubmit: (value) => {
      login({ password: value.password, value: value.emailOrPhone });
    },
  });
  return (
    <LoginContainer>
      <form className="form w-100 ">
        <div className="text-left mb-11">
          <h1 className=" text-black text-[40px] mb-1">Welcome!</h1>
          <p className="font-[400] text-gray-500 ">Login to Continue</p>
        </div>
        {error && (
          <p className="text-white bg-red-500 p-4 rounded-md my-5 text-1xl">
            {" "}
            {error}
          </p>
        )}

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
            title="Log In"
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
