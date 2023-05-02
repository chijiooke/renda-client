import React from "react";
import { Input, Button } from "../../../components/index";
import { OnboardLayout } from "../../../layout/index";
import { useRouter } from "next/router";

const GetStarted = () => {
  const router = useRouter();
  const next = (e: Event) => {
    e.preventDefault();
    router.push("/auth/signup/kyc-upload");
  };
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
        <form>
          <div className="flex w-full my-8">
            <Input label="Business Name" className="w-100 mr-5" />
            <Input label="Contact Person" className="w-100 " />
          </div>
          <div className="flex w-full my-8">
            <Input
              label="Business Email Address"
              className="w-100 mr-5"
              type="email"
            />
            <Input label="Email Address" className="w-100 " type="email" />
          </div>
          <div className="flex w-full my-8">
            <Input
              label="Business Email Address"
              className="w-100 mr-5"
              type="email"
            />
            <Input label="Email Address" className="w-100 " type="email" />
          </div>
          <div className="flex w-full my-8">
            <Input label="Business Address" className="w-100 mr-5" type="tel" />
            <Input label=" Phone Number" className="w-100 " type="tel" />
          </div>
          <div className="flex w-full my-8">
            <Input
              label="Business Phone Number"
              className="w-100 mr-5"
              type="tel"
            />
            <Input label="Business Industry" className="w-100 " type="tel" />
          </div>
          <div className="flex w-full my-8">
            <Input
              label="Office Address (If different from the business address)"
              className="w-100 "
              type="tel"
            />
          </div>
          <div className="flex justify-between gap-6">
            <Button title="Back" type="secondary" />
            <Button title="Next" handleClick={next} />
          </div>
        </form>
      </div>
    </OnboardLayout>
  );
};

export default GetStarted;
