import React from "react";
import Carousel from "nuka-carousel";


export default class CarouselComponent extends React.Component {
  render() {
    return (
      <Carousel
        autoplay={{
          interval: 5000,
          direction: "next",
          wrapAround: true
        }}
      >
        <div className="">
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
        <div className="">
          <div className="">
            <div className="ml-10">
              <p className="text-3xl font-medium text-white mb-4">
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
        <div className="">
          <div className="">
            <div className="ml-10">
              <p className="text-3xl font-medium text-white mb-4">
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
        <div className="">
          <div className="">
            <div className="">
              <p className="text-3xl font-medium text-white mb-4">
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
        <div className="">
          <div className="">
            <div className="ml-10">
              <p className="pb-3 text-3xl font-medium text-white mb-4">
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
        <div className="">
          <div className="">
            <div className="ml-10">
              <p className="text-3xl font-medium text-white mb-4">
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

        {/* Add more slides as needed */}
      </Carousel>
    );
  }
}