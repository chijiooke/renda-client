import { LoginContainer } from "@/layout";
import { Input, Button, OTPInput } from "@/components";

const ResetPassword = () => {
  return (
    <LoginContainer>
      <div className="w-100">
        <div>
          <h1 className="text-black mb-3 text-[25px] font-bold">
            Enter New Password
          </h1>
          <p className="text-gray-500 mt-3 text-1xl">
            {" "}
            Your new password should be different from previously used passwords
          </p>
        </div>
        <div className="mb-2 w-100">
          <Input label="New Password" type="password" className="my-8" />
          <Input
            label=" Confirm New Password"
            type="password"
            className="my-8"
          />

          <Button title="Submit" className="w-[50px]" />
        </div>
      </div>
    </LoginContainer>
  );
};

const AllDone = () => {
  return (
    <div className="flex text-center flex-col justify-between items-center m-auto w-100">
      <img
        src="/assets/images/Icon.svg"
        alt="successful icon"
        className="w-[100px] mb-2"
      />
      <div>
        <h1 className="font-bold text-black text-[16px]">All Done</h1>
        <p className="text-gray-500 text-1xl">
          {" "}
          Your password has been reset .
        </p>
      </div>
      <div>
        <Button title="Back to Login" className="my-8" />
      </div>
    </div>
  );
};

export default ResetPassword;
