import { Button, FileInput, Input } from "@/components";
import { OnboardLayout } from "@/layout";
import { StoreState } from "@/store/types/store-state.types";

import { StateReducerActions } from "@/types";
import { OnboardRoutes, formikCaption, formikError } from "@/utils";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const KycUpload = () => {
  const { KycFileList, companyRegistrationNumber } = useSelector(
    (state: StoreState) => state
  );
  const [registrationCertificate, setRegistrationCertificate] = useState<
    File[]
  >(KycFileList.registrationCertificate);
  const [proofOfAddress, setProofOfAddress] = useState<File[]>(
    KycFileList.proofOfAddress
  );
  const [directorsIds, setDirectorsIds] = useState<File[]>(
    KycFileList.directorsIds
  );

  const router = useRouter();
  const dispatch = useDispatch();
  const next = () => {
    const KycData = {
      registrationCertificate: registrationCertificate,
      proofOfAddress: proofOfAddress,
      directorsIds: directorsIds,
      companyRegistrationNumber,
    };
    const fd = new FormData();

    fd.append("CompanyRegistrationCertificate", registrationCertificate[0]);
    fd.append("ProofOfAddress", proofOfAddress[0]);
    for (let i = 0; i < directorsIds.length; i++) {
      fd.append("DirectorsIDs", directorsIds[i]);
    }
    dispatch({
      type: StateReducerActions.SET_KYC,
      payload: fd,
    });
    dispatch({
      type: StateReducerActions.SET_COMPANY_NUMBER,
      payload: formik.values.number,
    });
    dispatch({
      type: StateReducerActions.UPDATE_FILE_LIST,
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
          <p className="text-[13px] md:text-[16px] text-[#828282]">
            {" "}
            To activate your profile? Tell us more about your Business.
          </p>
        </div>
        <div className="max-w-3xl">
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
        <div className=" gap-10 mt-10 max-w-3xl ">
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
