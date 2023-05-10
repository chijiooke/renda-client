import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};
const LoginContainer: FC<Props> = ({ children }) => {
  return (
    <div className="container-fluid bg-white">
      <div className="row no-gutter">
        <div className="col-md-5 p-0 d-none d-md-flex position-relative vh-20 h-50 m-5 rounded overflow-hidden relative  bg-[url('/assets/images/first_background.png')] backdrop-brightness-50 h-screen">
          <img
            src="/assets/images/first_background.png"
            className="d-block w-[60%] object-fit-cover scale-110 "
            style={{ height: "95vh" }}
            alt="..."
          />
          <div className="absolute backdrop-brightness-50  flex flex-col w-full h-full  mix-blend-overlay">
            <p className="text-white text-[25px] justify-end ">
              Discover the power of seamless order fulfillment{" "}
            </p>
          </div>
        </div>

        <div className="col-md-6 bg-white ">
          <div className="left d-flex align-items-center py-4 position-relative">
            <div className="d-flex justify-content-between mb-5 position-absolute top-0 end-0">
              <div className="d-flex flex-row-reverse p-5">
                <img src="/assets/images/Renda-logo-with-tagline.svg" />
              </div>
            </div>

            <div className="container h-full ">
              <div className="row">
                <div
                  className="col-lg-10 col-xl-7 mx-auto my-auto mt-20 "
                  style={{ height: "90vh", paddingTop: "16rem" }}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginContainer };
