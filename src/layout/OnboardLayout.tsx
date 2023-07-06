import { FC, ReactNode } from "react";
import { OnboardContextProvider } from "@/context";
import { AuthRoutes, OnboardRoutes } from "@/utils";
import { useRouter } from "next/router";
import cn from "classnames";

type Props = {
  children: ReactNode;
  steps?: boolean;
};

interface StepperType {
  title: string;
  description: string;
  path: string;
}
const stepper: StepperType[] = [
  {
    title: "Get Started",
    description: "Tell us more about your business",
    path: OnboardRoutes.GET_STARTED,
  },
  {
    title: "KYC Upload",
    description: "To activate your account",
    path: OnboardRoutes.KYC_UPLOAD,
  },
  {
    title: "Create Password",
    description: "Secure your account",
    path: OnboardRoutes.SET_PASSWORD,
  },
  {
    title: "Confirm Your Email",
    description: "Verify your email",
    path: OnboardRoutes.CONFIRM_EMAIL,
  },
];
const OnboardLayout: FC<Props> = ({ children, steps = true }) => {
  const router = useRouter();
  return (
    <OnboardContextProvider>
      <div
        className="lex flex-col flex-root h-screen md:overflow-hidden"
        id="kt_app_root"
        style={{ backgroundColor: "#f0fbff", height: "100vh" }}
      >
        <div className="grid grid-cols-7 gap-10 h-full">
          <div className="flex  justify-center flex-lg-row-auto col-span-2 px-6 bg-primary h-screen  w-full m-4 rounded">
            <div className="d-flex flex-column position-lg-fixed top-0 bottom-0 scroll-y bgi-size-cover bgi-position-center rounded-[20px] my-5  bg-blue-200 h-screen">
              {steps && (
                <div className="d-flex flex-row-fluid justify-content-center my-auto mt-40 pt-20  ">
                  <div className="stepper-nav mx-4 w-full h-screen">
                    {stepper.map((step: StepperType, idx: number) => (
                      <div
                        className={cn("stepper-item my-5 text-white", {
                          current: router.pathname === step.path,
                        })}
                        data-kt-stepper-element="nav"
                      >
                        <div
                          className="flex gap-3 cursor-pointer"
                          onClick={() => router.push(step.path)}
                        >
                          <div className="bg-red-200 flex place-items-center  p-3 px-4  border-1 border-dotted rounded-lg">
                            <span className="stepper-number">{idx + 1}</span>
                          </div>

                          <div className=" flex flex-col gap-2">
                            <h3
                              className={cn("text-[14px]", {
                                "text-[#1BA9EA]": router.pathname === step.path,
                              })}
                            >
                              {step.title}
                            </h3>

                            <p className="text-[10px] text-[#7a99b2]">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="d-flex flex-column flex-lg-row-fluid w-full col-span-5 col-sp-5 ">
            <div className="d-flex flex-row-reverse pt-5 px-5">
              <img
                alt="Logo"
                src="/assets/images/Renda-logo-with-tagline.svg"
                className="h-70px cursor-pointer"
                onClick={() => router.push(AuthRoutes.LOGIN)}
              />
            </div>

            <div className="flex justify-center h-full flex-center flex-column flex-column-fluid max-w-4xl">
              <div className="">
                <div className="px-10 ">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OnboardContextProvider>
  );
};

export { OnboardLayout };
