import { OnboardLayout } from "@/layout";
import { Button, Input, FileInput } from "@/components";
import { useRouter } from "next/router";

const KycUpload = () => {
  const router = useRouter();
  const next = () => {
    router.push("/auth/signup/confirm-password");
  };
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
          <Button title="Next" handleClick={next} />
        </div>
      </div>
    </OnboardLayout>
  );
};

export default KycUpload;
