import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const OnboardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="d-flex flex-column flex-root" id="kt_app_root">
      <div
        className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep"
        id="kt_create_account_stepper"
      >
        <div className="d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px">
          <div className="d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center rounded m-5 bg-primary">
            <div className="d-flex flex-center py-10 py-lg-20 mt-lg-20"></div>

            <div className="d-flex flex-row-fluid justify-content-center p-10 py-20">
              <div className="stepper-nav">
                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
                    <div className="stepper-icon rounded-3">
                      <i className="ki-outline ki-check fs-2 stepper-check"></i>
                      <span className="stepper-number">1</span>
                    </div>

                    <div className="stepper-label">
                      <h3 className="stepper-title fs-2">Get Started</h3>

                      <div className="stepper-desc fw-normal">
                        Tell us more about your business
                      </div>
                    </div>
                  </div>

                  <div className="stepper-line h-40px"></div>
                </div>

                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
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

                  <div className="stepper-line h-40px"></div>
                </div>

                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
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

                  <div className="stepper-line h-40px"></div>
                </div>

                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
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
          </div>
        </div>

        <div className="d-flex flex-column flex-lg-row-fluid py-10 mt-5">
          <div className="d-flex flex-row-reverse p-5">
            <img
              alt="Logo"
              src="/assets/images/Renda-logo-with-tagline.svg"
              className="h-70px"
            />
          </div>

          <div className="d-flex flex-center flex-column flex-column-fluid">
            <div className="w-lg-800px w-xl-1000px p-10 p-lg-15 mx-auto">
              <div className="my-auto">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OnboardLayout };
