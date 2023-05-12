import { useState } from "react";
import { LoginContainer } from "@/layout";
import { Button, SelectUser } from "@/components";
import { useRouter } from "next/router";
import { AuthRoutes, OnboardRoutes } from "@/utils";
const SignUp = () => {
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();
  const change = () => {
    setActive(true);
  };
  return (
    <LoginContainer>
      <div className="flex flex-col mx-auto">
        <div className="text-center mx-auto">
          <h1 className="font-extrabold text-[30px] flex gap-4 items-center ">
            Signup to{" "}
            <span>
              <img
                alt="Logo"
                src="/assets/images/Renda-logo-with-tagline.svg"
                className="h-70px"
              />
            </span>
          </h1>
          <p className="text-2xl opacity-40">How would you ike to Sign up?</p>
        </div>
        <div className="my-10 flex flex-col gap-5">
          <SelectUser
            title="Sign up as a Client (for Business)"
            active={active}
            handleClick={change}
          />
          <SelectUser
            title="Sign up as a Partner (Storage and Fleet)"
            active={false}
          />
          <Button
            title="Next"
            handleClick={() => router.push(OnboardRoutes.GET_STARTED)}
            disabled={!active}
          />
        </div>
        <p className="text-center text-[16px]">
          Already have an account?{" "}
          <a
            className="text-primary font-bold"
            role="button"
            onClick={() => router.push(AuthRoutes.LOGIN)}
          >
            Log in
          </a>
        </p>
      </div>
    </LoginContainer>
  );
};

export default SignUp;
