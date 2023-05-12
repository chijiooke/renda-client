import { LoginContainer } from "@/layout";

const RegistrationSuccessful = () => {
  return (
    <LoginContainer>
      <div className="flex mt-15 gap-8 text-start " style={{ width: "700px" }}>
        <img
          src="/assets/images/Icon.svg"
          alt="successful icon"
          className="w-[100px] mb-2"
        />
        <div className="flex flex-col gap-7">
          <h2 className="text-primary font-bold text-5xl">Welcome</h2>
          <p className="text-2xl">
            Your account is now under review and will be activated within
            24hours. Kindly check your email for a link to login.
          </p>
        </div>
      </div>
    </LoginContainer>
  );
};

export default RegistrationSuccessful;
