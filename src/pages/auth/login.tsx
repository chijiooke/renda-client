import { LoginContainer } from "@/layout";
import { Button, Input } from "@/components";
import Link from "next/link";
const LoginPage = () => {
  return (
    <LoginContainer>
      <form className="form w-100 ">
        <div className="text-left mb-11">
          <h1 className=" text-black text-[40px] mb-1">Welcome!</h1>
          <p className="font-[400] text-gray-500 ">Login to Continue</p>
        </div>
        <div>
          <Input label="Email/Phone" className="mb-4" />
          <Input label="Password" type="password" className="mb-4" />
          <a
            role="button"
            className="flex flex-row-reverse text-gray-100 text-[16px]"
          >
            Forgot Password?
          </a>
          <Button title="Sing In" className="mt-6" />
          <p className="text-center mt-8 text-[16px]">
            Don't have an account?{" "}
            <Link
              href="/auth/signup/get-started"
              className="text-primary font-bold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </LoginContainer>
  );
};

export default LoginPage;
