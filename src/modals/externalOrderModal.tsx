import { Button } from "@/components";
import cn from "classnames";
import { ReactNode, useState } from "react";

import { OrdermgtRoutes } from "@/utils/routes";
import { useRouter } from "next/router";

type Props = {
  show: boolean;
  data?: any;
  close: () => void;
  onSubmit: () => void;
};

function ExternalOrderModal({ show, data, close, onSubmit }: Props) {
  const router = useRouter();
  const [selectedButton, setSelectedButton] = useState("");
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleButtonClick = (buttonName: any) => {
    setSelectedButton(buttonName);
  };

  const handleSubmit = () => {
    // Perform any necessary actions before routing
    // Based on the selected button, route to a specific page
    if (selectedButton === "Button 1") {
    } else if (selectedButton === "Button 2") {
      router.push(OrdermgtRoutes.CREATEORDER_CSV);
    } else if (selectedButton === "Button 3") {
      router.push("/page3");
    }
    onSubmit();
  };

  return show ? (
    <>
      <div className="modal">
        <div className="rounded bg-white p-10">
          <div className="relative flex">
            <div
              className="relative w-full h-full p-4"
              style={{ width: "700px" }}
            >
              <p
                onClick={close}
                className="absolute right-0 top-0 scale-125 cursor-pointer"
              >
                X
              </p>

              <div>
                <p className="text-center text-primary font-extrabold text-[18px]">
                  Create Order
                </p>
              </div>
              <div className="grid justify-center">
                <div className="grid my-6 gap-6">
                  <button
                    className={
                      selectedButton === "Button 1" ? "selected" : "notSelected"
                    }
                    onClick={() => handleButtonClick("Button 1")}
                  >
                    <p>Single Order</p>
                  </button>
                  <button
                    className={
                      selectedButton === "Button 2" ? "selected" : "notSelected"
                    }
                    onClick={() => handleButtonClick("Button 2")}
                  >
                    Via CSV
                  </button>
                  <button
                    className={
                      selectedButton === "Button 3" ? "selected" : "notSelected"
                    }
                    onClick={() => handleButtonClick("Button 3")}
                  >
                    VIA API
                  </button>
                  {/* <button onClick={handleSubmit}>Submit</button> */}

                  <style jsx>{`
                    .selected {
                      width: 317px;
                      height: 48px;
                      left: 648px;
                      top: 363px;

                      background: #ffffff;
                      border: 2px solid #1b547f;
                      border-radius: 4.93211px;
                      .p {
                        text-color: #1b547f;
                      }
                    }
                    .notSelected {
                      width: 317px;
                      height: 48px;
                      left: 648px;
                      top: 439px;

                      background: #ffffff;
                      border: 1px solid rgba(0, 0, 0, 0.15);
                      border-radius: 4.93211px;
                    }
                  `}</style>
                </div>
              </div>

              <div className=" w-full flex justify-center">
                <Button
                  title="Create order"
                  variant="primary"
                  handleClick={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
const Layout = ({
  children,
  option,
  center = true,
}: {
  children: ReactNode;
  option: string;
  center?: boolean;
}) => {
  return (
    <div
      className={cn("grid grid-cols-3 w-full ", {
        "items-center": center,
      })}
    >
      <p className="text-[14px] font-semibold "> {option}</p>
      <div className=" w-full col-span-2">{children}</div>
    </div>
  );
};

export { ExternalOrderModal };
