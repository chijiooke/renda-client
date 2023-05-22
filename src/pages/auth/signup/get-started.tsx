import React, { useEffect, useState, useMemo } from "react";
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
  const [businessPhoneNumber, setBusinessPhoneNumber] = useState<string>(
    getStarted.businessPhoneNumber
  );
  const [businessIndustry, setBusinessIndustry] = useState<string | undefined>(
    industries.find((industry) => industry === getStarted.businessIndustry)
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
    businessIndustry: string | undefined;
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
      .required("Address is required"),

      businessIndustry: Yup.string(),
      officeAddress: Yup.string(),
    }),
    onSubmit: (value) => {
      next({ ...value, phoneNumber, businessPhoneNumber, businessIndustry });
    },
  });

  const validatePhone = (phone: string) => {
    return (
      phoneRegExp.test("+" + phone) &&
      (phone.length === 14 || phone.length === 13)
    );
  };

  const validate = useMemo(() => {
    return (
      Object.values(
        Object.fromEntries(
          Object.entries(formik.values).filter(
            (v) =>
              ![
                "officeAddress",
                "phoneNumber",
                "businessPhoneNumber",
                "businessIndustry",
              ].includes(v[0])
          )
        )
      ).every((v) => v?.length! > 0) &&
      validatePhone(phoneNumber) &&
      businessIndustry &&
      validatePhone(businessPhoneNumber)
    );
  }, [formik]);
  console.log(validate);
  return (
    <OnboardLayout>
      <div className="flex flex-col">
        <div>
          <h1 className="text-[35px] text-primary font-bold">Get Started</h1>
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

            <PhoneNumberInput
              label="Phone Number"
              handleChange={setPhoneNumber}
              value={phoneNumber}
            />
          </div>
          <div className="flex w-full my-8 items-center gap-5">
            <PhoneNumberInput
              label="Business Phone Number"
              handleChange={setBusinessPhoneNumber}
              value={businessPhoneNumber}
            />

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
              disabled={!validate}
            />
          </div>
        </div>
      </div>
    </OnboardLayout>
  );
};

export default GetStarted;
