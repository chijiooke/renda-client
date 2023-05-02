import { OnboardLayout } from "@/layout";
import { Input, Button } from "@/components";
const ConfirmPassword = () => {
  return (
    <OnboardLayout>
      <div className="max-w-5xl">
        <div>
          <h1 className="text-[35px] text-primary">Create a password</h1>
          <p className=" text-[13px] md:text-[16px] text-gray-200">
            {" "}
            Password should be at least 8 characters. To create a password, use
            at least one upper case (e.g. ABC), one number (e.g. 123) and one
            symbol (e.g. @#$).
          </p>
        </div>
        <form className="max-w-3xl">
          <div className="my-10">
            <Input label="Create Password" type="password" className="my-10" />
            <Input label="Confirm Password" type="password" className="my-10" />
            <div className="flex max-w-md">
              <Button title="Submit" />
            </div>
          </div>
        </form>
      </div>
    </OnboardLayout>
  );
};

export default ConfirmPassword;
