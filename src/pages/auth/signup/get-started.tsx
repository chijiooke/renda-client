import React, { useEffect, useState } from "react";
import { Input, Button, Select, PhoneNumberInput } from "@/components";
import { OnboardLayout } from "@/layout";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import { formikCaption, formikError, phoneRegExp } from "@/utils";
import { OnboardingAction } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "@/store/reducer";
import { OnboardRoutes } from "@/utils";

const industries = [
  "Agriculture and farming",
  "Automotive industry",
  "Banking and financial services",
  "Biotechnology and pharmaceuticals",
  "Chemicals",
  "Construction and engineering",
  "Consumer goods and services",
  "Education and training",
  "Energy and utilities",
  "Entertainment and media",
  "Food and beverage",
  "Healthcare and medical services",
  "Hospitality and tourism",
  "Information technology and services",
  "Insurance",
  "Manufacturing",
  "Mining and metals",
  "Non-profit and social services",
  "Real estate",
  "Retail and e-commerce",
  "Telecommunications",
  "Transportation and logistics",
  "Wholesale and distribution.",
];

const GetStarted = () => {
  const { getStarted } = useSelector((state: StoreState) => state);
  const [loading, setLoading] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState(getStarted.phoneNumber);
  const [businessPhoneNumber, setBusinessPhoneNumber] = useState(
    getStarted.businessPhoneNumber
  );
  const [businessIndustry, setBusinessIndustry] = useState(
    getStarted.businessIndustry
  );
  const router = useRouter();

  const dispatch = useDispatch();
  const next = (value: {
    businessName: string;
    contactPerson: string;
    businessEmailAddress: string;
    emailAddress: string;
    officeAddress: string;
    phoneNumber: string;
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
      emailAddress: Yup.string()
        .email("Invalid email format")
        .required("Email required"),
      businessAddress: Yup.string()
        .min(8, "Business address must have at least 8 characters")
        .required("Address is required"),
      phoneNumber: Yup.string().matches(phoneRegExp, "Phone number not valid"),
      businessPhoneNumber: Yup.string().matches(
        phoneRegExp,
        "Business phone number valid"
      ),
      businessIndustry: Yup.string(),
      officeAddress: Yup.string()
        .min(8, "Address must have at least 8 characters")
        .required("Address is required"),
    }),
    onSubmit: (value) => {
      next({ ...value, phoneNumber, businessPhoneNumber, businessIndustry });
    },
  });

  return (
    <OnboardLayout>
      <div className="flex flex-col">
        <div>
          <h1 className="text-[35px] text-primary font-bold my-5">
            Get Started
          </h1>
          <p className="text-[13px] md:text-[16px] text-gray-200">
            {" "}
            Ready to create your profile? Tell us more about your Business.
          </p>
        </div>
        <div>
          <div className="flex w-full my-8 gap-5">
            <Input
              label="Business Name"
              className="w-100 "
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
          <div className="flex w-full my-8 gap-5">
            <Input
              label="Business Email Address"
              className="w-100 "
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
              value={formik.values.emailAddress}
              handleChange={formik.handleChange}
              name="emailAddress"
              caption={formikCaption("emailAddress", formik)}
              error={formikError("emailAddress", formik)}
            />
          </div>
          <div className="flex w-full my-8 items-center gap-5">
            <Input
              label="Business Address"
              className="w-100"
              type="tel"
              value={formik.values.businessAddress}
              handleChange={formik.handleChange}
              name="businessAddress"
              caption={formikCaption("businessAddress", formik)}
              error={formikError("businessAddress", formik)}
            />
            {/* <Input
              label=" Phone Number"
              className="w-100 "
              type="tel"
              value={formik.values.phoneNumber}
              handleChange={formik.handleChange}
              name="phoneNumber"
              caption={formikCaption("phoneNumber", formik)}
              error={formikError("phoneNumber", formik)}
            /> */}
            <PhoneNumberInput
              label="Phone Number"
              handleChange={setPhoneNumber}
              value={phoneNumber}
            />
          </div>
          <div className="flex w-full my-8 items-center gap-5">
            {/* <Input
              label="Business Phone Number"
              className="w-100 mr-5"
              type="tel"
              value={formik.values.businessPhoneNumber}
              handleChange={formik.handleChange}
              name="businessPhoneNumber"
              caption={formikCaption("businessPhoneNumber", formik)}
              error={formikError("businessPhoneNumber", formik)}
            /> */}
            <PhoneNumberInput
              label="Business Phone Number"
              handleChange={setBusinessPhoneNumber}
              value={businessPhoneNumber}
            />
            {/* <Input
              label="Business Industry"
              className="w-100 "
              type="tel"
              value={formik.values.businessIndustry}
              handleChange={formik.handleChange}
              name="businessIndustry"
              caption={formikCaption("businessIndustry", formik)}
              error={formikError("businessIndustry", formik)}
            /> */}
            <Select
              label="Business Industry"
              options={industries}
              placeholder="select your business "
              value={businessIndustry}
              name="businessIndustry"
              caption={formikCaption("businessIndustry", formik)}
              error={formikError("businessIndustry", formik)}
              handleChange={(e) => setBusinessIndustry(e.target.value)}
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
