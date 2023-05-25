import React from "react";
import Carousel from "nuka-carousel";


export default class CarouselComponent extends React.Component {
  render() {
    return (
      <Carousel
        autoplay={{
          interval: 5000,
          direction: "next",
        }}
      >
        <div
          style={{
            height: "95vh",
            backgroundImage: "url('/assets/images/first_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
          className="rounded-lg inset-x-0 col-md-5 p-0 d-none d-md-flex position-relative vh-20 rounded overflow-hidden relative"
        >
          <div
            style={{
              height: "95vh",
              width: "100%",
              opacity: 1,
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
            className="rounded-tl-3xl rounded-tr-3xl"
          />
          <div className=" absolute inset-x-0 bottom-0 px-16 pb-28 ">
            <div className="py-8 px-12 justify--center">
              <div className="">
                <div className="ml-10 flex-col">
                  <p className=" text-3xl font-medium text-white mb-4">
                    Discover the power of seamless order fulfillment
                  </p>
                  <span className="text-2xl font-small text-white gradient-text">
                    <a href="#" className="gradient-text">
                      Get started now
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "95vh",
            backgroundImage: "url('/assets/images/lady_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
          className="rounded-lg inset-x-0 col-md-5 p-0 d-none d-md-flex position-relative vh-20 rounded overflow-hidden relative"
        >
          <div
            style={{
              height: "95vh",
              width: "100%",
              opacity: 1,
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
            className="rounded-tl-3xl rounded-tr-3xl"
          />
          <div className=" absolute inset-x-0 bottom-0 px-16 pb-28 ">
            <div className="py-8 px-12 justify--center">
              <div className="">
                <div className=" flex-col">
                  <p className=" text-3xl font-medium text-white mb-4">
                    Find the right solution that meets your needs.
                  </p>
                  <span className="text-2xl font-small text-white gradient-text">
                    <a href="#" className="gradient-text">
                      Get started now
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "95vh",
            backgroundImage: "url('/assets/images/first_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
          className="rounded-lg inset-x-0 col-md-5 p-0 d-none d-md-flex position-relative vh-20 rounded overflow-hidden relative"
        >
          <div
            style={{
              height: "95vh",
              width: "100%",
              opacity: 1,
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
            className="rounded-tl-3xl rounded-tr-3xl"
          />
          <div className=" absolute inset-x-0 bottom-0 px-16 pb-28 ">
            <div className="py-8 px-12 justify--center">
              <div className="">
                <div className="ml-10 flex-col">
                  <p className=" text-3xl font-medium text-white mb-4">
                    Discover the power of seamless order fulfillment
                  </p>
                  <span className="text-2xl font-small text-white gradient-text">
                    <a href="#" className="gradient-text">
                      Get started now
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "95vh",
            backgroundImage: "url('/assets/images/lady_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
          className="rounded-lg inset-x-0 col-md-5 p-0 d-none d-md-flex position-relative vh-20 rounded overflow-hidden relative"
        >
          <div
            style={{
              height: "95vh",
              width: "100%",
              opacity: 1,
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
            className="rounded-tl-3xl rounded-tr-3xl"
          />
          <div className=" absolute inset-x-0 bottom-0 px-16 pb-28 ">
            <div className="py-8 px-12 justify--center">
              <div className="">
                <div className=" flex-col">
                  <p className=" text-3xl font-medium text-white mb-4">
                    Find the right solution that meets your needs.
                  </p>
                  <span className="text-2xl font-small text-white gradient-text">
                    <a href="#" className="gradient-text">
                      Get started now
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add more slides as needed */}
      </Carousel>
    );
  }
}