import React from "react";
import { Input, Button } from "../../../components/index";
import { OnboardLayout } from "../../../layout/index";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import { formikCaption, formikError, phoneRegExp } from "@/utils";
import { useOnboardContext } from "@/hooks";
import { OnboardingAction } from "@/types";

const GetStarted = () => {
  const router = useRouter();
  const { state, dispatch } = useOnboardContext();

  const next = () => {
    router.push("/auth/signup/kyc-upload");
  };
  const formik = useFormik({
    initialValues: state.getStarted,
    validationSchema: Yup.object({
      businessName: Yup.string().required("Business name is required"),
      contactPerson: Yup.string().required("Contact person is required"),
      businessEmail: Yup.string()
        .email("Invalid email format")
        .required("Business email required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email required"),
      businessAddress: Yup.string()
        .min(8, "Business address must have at least 8 characters")
        .required("Address is required"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number not valid")
        .required("Phone number is required"),
      businessPhoneNumber: Yup.string()
        .matches(phoneRegExp, "Business phone number valid")
        .required("Business phone number valid"),
      industry: Yup.string().required("Industry required"),
      address: Yup.string()
        .min(8, "Address must have at least 8 characters")
        .required("Address is required"),
    }),
    onSubmit: (value) => {
      // dispatch({
      //   type: OnboardingAction.SET_GET_STARTED,
      //   payload: value,
      // });
      next();
    },
  });

  return (
    <OnboardLayout>
      <div className="flex flex-col">
        <div>
          <h1 className="text-[35px] text-primary">Get Started</h1>
          <p className="text-[13px] md:text-[16px] text-gray-200">
            {" "}
            Ready to create your profile? Tell us more about your Business.
          </p>
        </div>
        <div>
          <div className="flex w-full my-8">
            <Input
              label="Business Name"
              className="w-100 mr-5"
              value={formik.values.businessName}
              handleChange={formik.handleChange}
              name="businessName"
              caption={formikCaption("businessName", formik)}
              error={formikError("businessName", formik)}
            />
            <Input
              label="Contact Person"
              className="w-100 "
              value={formik.values.contactPerson}
              handleChange={formik.handleChange}
              name="contactPerson"
              caption={formikCaption("contactPerson", formik)}
              error={formikError("contactPerson", formik)}
            />
          </div>
          <div className="flex w-full my-8">
            <Input
              label="Business Email Address"
              className="w-100 mr-5"
              type="email"
              value={formik.values.businessEmail}
              handleChange={formik.handleChange}
              name="businessEmail"
              caption={formikCaption("businessEmail", formik)}
              error={formikError("businessEmail", formik)}
            />
            <Input
              label="Email Address"
              className="w-100 "
              type="email"
              value={formik.values.email}
              handleChange={formik.handleChange}
              name="email"
              caption={formikCaption("email", formik)}
              error={formikError("email", formik)}
            />
          </div>
          <div className="flex w-full my-8">
            <Input
              label="Business Address"
              className="w-100 mr-5"
              type="tel"
              value={formik.values.businessAddress}
              handleChange={formik.handleChange}
              name="businessAddress"
              caption={formikCaption("businessAddress", formik)}
              error={formikError("businessAddress", formik)}
            />
            <Input
              label=" Phone Number"
              className="w-100 "
              type="tel"
              value={formik.values.phoneNumber}
              handleChange={formik.handleChange}
              name="phoneNumber"
              caption={formikCaption("phoneNumber", formik)}
              error={formikError("phoneNumber", formik)}
            />
          </div>
          <div className="flex w-full my-8">
            <Input
              label="Business Phone Number"
              className="w-100 mr-5"
              type="tel"
              value={formik.values.businessPhoneNumber}
              handleChange={formik.handleChange}
              name="businessPhoneNumber"
              caption={formikCaption("businessPhoneNumber", formik)}
              error={formikError("businessPhoneNumber", formik)}
            />
            <Input
              label="Business Industry"
              className="w-100 "
              type="tel"
              value={formik.values.industry}
              handleChange={formik.handleChange}
              name="industry"
              caption={formikCaption("industry", formik)}
              error={formikError("industry", formik)}
            />
          </div>
          <div className="flex w-full my-8">
            <Input
              label="Office Address (If different from the business address)"
              className="w-100 "
              type="tel"
              value={formik.values.address}
              handleChange={formik.handleChange}
              name="address"
              caption={formikCaption("address", formik)}
              error={formikError("address", formik)}
            />
          </div>
          <div className="flex justify-between gap-6 mt-15">
            <Button title="Back" type="secondary" />
            <Button title="Next" handleClick={formik.handleSubmit} />
          </div>
        </div>
      </div>
    </OnboardLayout>
  );
};

export default GetStarted;
