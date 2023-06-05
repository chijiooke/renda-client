import { useState, useEffect, useMemo } from "react";
import { OnboardLayout } from "@/layout";
import { Button, Input, FileInput } from "@/components";
import { useRouter } from "next/router";
import { OnboardRoutes } from "@/utils";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formikCaption, formikError } from "@/utils";
import { StoreState } from "@/store/reducer";
import { useDispatch, useSelector } from "react-redux";
import { OnboardingAction } from "@/types";

const KycUpload = () => {
  const { fileList, companyRegistrationNumber } = useSelector(
    (state: StoreState) => state
  );
  const [registrationCertificate, setRegistrationCertificate] = useState<
    File[]
  >(fileList.registrationCertificate);
  const [proofOfAddress, setProofOfAddress] = useState<File[]>(
    fileList.proofOfAddress
  );
  const [directorsIds, setDirectorsIds] = useState<File[]>(
    fileList.directorsIds
  );

  const router = useRouter();
  const dispatch = useDispatch();
  const next = () => {
    const fd = new FormData();

    fd.append("CompanyRegistrationCertificate", registrationCertificate[0]);
    fd.append("ProofOfAddress", proofOfAddress[0]);
    for (let i = 0; i < directorsIds.length; i++) {
      fd.append("DirectorsIDs", directorsIds[i]);
    }
    dispatch({
      type: OnboardingAction.SET_KYC,
      payload: fd,
    });
    dispatch({
      type: OnboardingAction.SET_COMPANY_NUMBER,
      payload: formik.values.number,
    });
    dispatch({
      type: OnboardingAction.UPDATE_FILE_LIST,
      payload: { registrationCertificate, proofOfAddress, directorsIds },
    });
    router.push(OnboardRoutes.SET_PASSWORD);
  };

  const formik = useFormik({
    initialValues: { number: companyRegistrationNumber },
    validationSchema: Yup.object({
      number: Yup.string()
        .min(7, "Registration number should be seven characters")
        .max(7, "Registration number should be seven characters")
        .required("CAC number required"),
    }),
    onSubmit: () => {
      next();
    },
  });
  const validate = useMemo(() => {
    return Boolean(
      formik.values.number &&
        registrationCertificate.length > 0 &&
        directorsIds.length > 0 &&
        proofOfAddress.length > 0
    );
  }, [formik, registrationCertificate, directorsIds, proofOfAddress]);
  return (
    <OnboardLayout>
      <div>
        <div>
          <h1 className="text-[35px] text-primary font-bold mb-1">
            KYC Upload
          </h1>
          <p className="text-[13px] md:text-[16px] text-gray-200">
            {" "}
            To activate your profile? Tell us more about your Business.
          </p>
        </div>
        <div className="max-w-4xl">
          <Input
            label="Company Registration Number"
            className="max-w-md mt-8"
            value={formik.values.number}
            handleChange={formik.handleChange}
            caption={formikCaption("number", formik)}
            error={formikError("number", formik)}
            name="number"
          />
          <FileInput
            title="Company Registration Certificate"
            className="mt-8"
            handleChange={setRegistrationCertificate}
            value={registrationCertificate}
          />
          <FileInput
            title="Proof of Address (Utility bill - Electricity/LAWMA, etc)"
            className="mt-8"
            handleChange={setProofOfAddress}
            value={proofOfAddress}
          />
          <FileInput
            title="Directors ID"
            className="mt-8"
            multiple={true}
            handleChange={setDirectorsIds}
            value={directorsIds}
          />
        </div>
        <div className=" gap-10 mt-10 max-w-md">
          <Button
            title="Next"
            handleClick={formik.handleSubmit}
            className="w-9"
            disabled={!validate}
          />
        </div>
      </div>
    </OnboardLayout>
  );
};

export default KycUpload;
