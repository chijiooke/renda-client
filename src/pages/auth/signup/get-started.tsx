import React, { useState } from "react";
import { Input, Button } from "../../../components/index";
import { OnboardLayout } from "../../../layout/index";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import { formikCaption, formikError, phoneRegExp } from "@/utils";
import { OnboardingAction } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "@/store/reducer";
import { OnboardRoutes } from "@/utils";

const GetStarted = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { getStarted } = useSelector((state: StoreState) => state);
  const dispatch = useDispatch();
  const next = (value: {
    businessName: string;
    contactPerson: string;
    businessEmailAddress: string;
    contactEmailAddress: string;
    officeAddress: string;
    contactPhoneNumber: string;
    businessPhoneNumber: string;
    businessIndustry: string;
    businessAddress?: string | undefined;
  }) => {
    dispatch({
      type: OnboardingAction.SET_GET_STARTED,
      payload: value,
    });
    router.push(OnboardRoutes.KYC_UPLOAD);
  };
  const formik = useFormik({
    initialValues: getStarted,
    validationSchema: Yup.object({
      businessName: Yup.string().required("Business name is required"),
      contactPerson: Yup.string().required("Contact person is required"),
      businessEmailAddress: Yup.string()
        .email("Invalid email format")
        .required("Business email required"),
      contactEmailAddress: Yup.string()
        .email("Invalid email format")
        .required("Email required"),
      businessAddress: Yup.string()
        .min(8, "Business address must have at least 8 characters")
        .required("Address is required"),
      contactPhoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number not valid")
        .required("Phone number is required"),
      businessPhoneNumber: Yup.string()
        .matches(phoneRegExp, "Business phone number valid")
        .required("Business phone number valid"),
      businessIndustry: Yup.string().required("Industry required"),
      officeAddress: Yup.string()
        .min(8, "Address must have at least 8 characters")
        .required("Address is required"),
    }),
    onSubmit: (value) => {
      next(value);
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
              value={formik.values.businessEmailAddress}
              handleChange={formik.handleChange}
              name="businessEmailAddress"
              caption={formikCaption("businessEmailAddress", formik)}
              error={formikError("businessEmailAddress", formik)}
            />
            <Input
              label="Email Address"
              className="w-100 "
              type="email"
              value={formik.values.contactEmailAddress}
              handleChange={formik.handleChange}
              name="contactEmailAddress"
              caption={formikCaption("contactEmailAddress", formik)}
              error={formikError("contactEmailAddress", formik)}
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
              value={formik.values.contactPhoneNumber}
              handleChange={formik.handleChange}
              name="contactPhoneNumber"
              caption={formikCaption("contactPhoneNumber", formik)}
              error={formikError("contactPhoneNumber", formik)}
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
              value={formik.values.businessIndustry}
              handleChange={formik.handleChange}
              name="businessIndustry"
              caption={formikCaption("businessIndustry", formik)}
              error={formikError("businessIndustry", formik)}
            />
          </div>
          <div className="flex w-full my-8">
            <Input
              label="Office Address (If different from the business address)"
              className="w-100 "
              type="tel"
              value={formik.values.officeAddress}
              handleChange={formik.handleChange}
              name="officeAddress"
              caption={formikCaption("officeAddress", formik)}
              error={formikError("officeAddress", formik)}
            />
          </div>
          <div className="flex justify-between gap-6 mt-15">
            <Button
              title="Back"
              type="secondary"
              handleClick={() => router.back()}
            />
            <Button
              title="Next"
              handleClick={formik.handleSubmit}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </OnboardLayout>
  );
};

export default GetStarted;
