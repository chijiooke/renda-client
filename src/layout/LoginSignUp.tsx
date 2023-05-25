import React, { FC } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import { AuthRoutes } from "@/utils";
import CarouselComponent from "../components/carousel/CarouselComponent";
import { url } from "inspector";


type Props = {
  children: React.ReactNode;
};
const LoginContainer: FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="container-fluid bg-white">
      <div className="row no-gutter">
        <div
          style={{
            height: "95vh",
            //backgroundImage: "url('/assets/images/first_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            width: "45%",
          }}
          className=""
          // className="rounded-lg inset-x-0 col-md-5 p-0 d-none d-md-flex position-relative vh-20 m-5 rounded overflow-hidden relative"
        >
          <div className="">
            <div
              style={{
                height: "95vh",
                width: "100%",
              }}
              className="py-8 px-12 text-center justify--center"
            >
              <CarouselComponent />
            </div>
          </div>
        </div>

        <div className="col-md-6 bg-white ">
          <div className="left d-flex align-items-center py-4 ">
            <div className="d-flex justify-content-between mb-5 position-absolute top-0 end-0">
              <div className="d-flex flex-row-reverse p-5 mt-15">
                <img
                  src="/assets/images/Renda-logo-with-tagline.svg"
                  onClick={() => router.push(AuthRoutes.LOGIN)}
                  className="cursor-pointer pr-10"
                />
              </div>
            </div>

            <div className="container h-full ">
              <div className="row">
                <div
                  className={cn("col-lg-10 col-xl-7 mx-auto my-auto mt-20 ")}
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
