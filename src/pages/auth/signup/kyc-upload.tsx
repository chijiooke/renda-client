import { OnboardLayout } from "@/layout";
import { Button, Input, FileInput } from "@/components";
import { useRouter } from "next/router";
import { OnboardRoutes } from "@/utils";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formikCaption, formikError } from "@/utils";
const KycUpload = () => {
  const router = useRouter();
  const next = () => {
    router.push(OnboardRoutes.SET_PASSWORD);
  };
  const formik = useFormik({
    initialValues: { number: "" },
    validationSchema: Yup.object({
      number: Yup.number()
        .min(6, "CAC number should six digits above")
        .required("CAC number required"),
    }),
    onSubmit: () => {
      next();
    },
  });
  return (
    <OnboardLayout>
      <div>
        <div>
          <h1 className="text-[35px] text-primary">KYC Upload</h1>
          <p className="text-[13px] md:text-[16px] text-gray-200">
            {" "}
            To activate your profile? Tell us more about your Business.
          </p>
        </div>
        <div>
          <Input
            label="Company Registration Number"
            type="number"
            className="max-w-2xl mt-8"
            value={formik.values.number}
            handleChange={formik.handleChange}
            caption={formikCaption("number", formik)}
            error={formikError("number", formik)}
            name="number"
          />
          <FileInput
            title="Company Registration Certificate"
            className="mt-8"
          />
          <FileInput title="Proof of Address" className="mt-8" />
          <FileInput title="Directors ID" className="mt-8" multiple={true} />
        </div>
        <div className="flex justify-center gap-10 mt-10">
          <Button title="Skip" type="secondary" />
          <Button title="Next" handleClick={formik.handleSubmit} />
        </div>
      </div>
    </OnboardLayout>
  );
};

export default KycUpload;
