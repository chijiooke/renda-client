import { FC, ReactNode } from "react";
import { OnboardContextProvider } from "@/context";
import { AuthRoutes, OnboardRoutes } from "@/utils";
import { useRouter } from "next/router";
import cn from "classnames";

type Props = {
  children: ReactNode;
  steps?: boolean;
};
const OnboardLayout: FC<Props> = ({ children, steps = true }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <OnboardContextProvider>
      <div
        className="d-flex flex-column flex-root h-screen md:overflow-hidden"
        id="kt_app_root"
        style={{ backgroundColor: "#f0fbff", height: "100vh" }}
      >
        <div
          className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep "
          id="kt_create_account_stepper"
        >
          <div className="d-flex flex-column flex-lg-row-auto w-lg-300px w-xl-400px">
            <div className="d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-300px w-xl-450px scroll-y bgi-size-cover bgi-position-center rounded m-5 bg-primary">
              <div className="d-flex flex-center py-lg-20 mt-lg-20"></div>
              {steps && (
                <div className="d-flex flex-row-fluid justify-content-center my-auto mt-40 pt-20  ">
                  <div className="stepper-nav">
                    <div
                      className={cn("stepper-item my-5", {
                        current: router.pathname === OnboardRoutes.GET_STARTED,
                      })}
                      data-kt-stepper-element="nav"
                    >
                      <div
                        className="stepper-wrapper cursor-pointer"
                        onClick={() => router.push(OnboardRoutes.GET_STARTED)}
                      >
                        <div className="stepper-icon current-stepper rounded-3 ">
                          <span className="stepper-number">1</span>
                        </div>

                        <div className="stepper-label">
                          <h3 className="stepper-title fs-2">Get Started</h3>

                          <div className="stepper-desc fw-normal">
                            Tell us more about your business
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn("stepper-item  my-5", {
                        current: router.pathname === OnboardRoutes.KYC_UPLOAD,
                      })}
                      data-kt-stepper-element="nav"
                    >
                      <div
                        className="stepper-wrapper cursor-pointer"
                        onClick={() => router.push(OnboardRoutes.KYC_UPLOAD)}
                      >
                        <div className="stepper-icon rounded-3">
                          <i className="ki-outline ki-check fs-2 stepper-check"></i>
                          <span className="stepper-number">2</span>
                        </div>

                        <div className="stepper-label">
                          <h3 className="stepper-title fs-2">KYC Upload</h3>
                          <div className="stepper-desc fw-normal">
                            To activate your profile
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn("stepper-item   my-5", {
                        current: router.pathname === OnboardRoutes.SET_PASSWORD,
                      })}
                      data-kt-stepper-element="nav"
                    >
                      <div
                        className="stepper-wrapper cursor-pointer"
                        onClick={() => router.push(OnboardRoutes.SET_PASSWORD)}
                      >
                        <div className="stepper-icon">
                          <i className="ki-outline ki-check fs-2 stepper-check"></i>
                          <span className="stepper-number">3</span>
                        </div>

                        <div className="stepper-label">
                          <h3 className="stepper-title fs-2">
                            Create your password
                          </h3>
                          <div className="stepper-desc fw-normal">
                            Secure your account
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn("stepper-item  my-5", {
                        current:
                          router.pathname === OnboardRoutes.CONFIRM_EMAIL,
                      })}
                      data-kt-stepper-element="nav"
                    >
                      <div
                        className="stepper-wrapper cursor-pointer"
                        onClick={() => router.push(OnboardRoutes.CONFIRM_EMAIL)}
                      >
                        <div className="stepper-icon">
                          <i className="ki-outline ki-check fs-2 stepper-check"></i>
                          <span className="stepper-number">4</span>
                        </div>

                        <div className="stepper-label">
                          <h3 className="stepper-title">Confirm your email</h3>
                          <div className="stepper-desc fw-normal">
                            Verify your details
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="d-flex flex-column flex-lg-row-fluid ">
            <div className="d-flex flex-row-reverse p-5">
              <img
                alt="Logo"
                src="/assets/images/Renda-logo-with-tagline.svg"
                className="h-70px cursor-pointer"
                onClick={() => router.push(AuthRoutes.LOGIN)}
              />
            </div>

            <div className="d-flex flex-center flex-column flex-column-fluid">
              <div className="w-lg-800px w-xl-1000px p-5 p-lg-10 mx-auto">
                <div className="">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OnboardContextProvider>
  );
};

export { OnboardLayout };
