import React, { FC, ReactElement, ReactNode } from "react";
import { CheckedIcon, DeclinedIcon } from "@/icons";

type ModalProps = {
  show: boolean;
  close: () => void;
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  title: string | ReactNode;
  detail?: string | ReactNode;
  icon?: JSX.Element;
  state?: "approved" | "declined";
};

const ModalLayout: FC<ModalProps> = ({
  show,
  close,
  children,
  size = "md",
  title,
  detail,
  icon: Icon,
  state,
}) => {
  const width = size == "lg" ? 700 : size == "sm" ? 200 : 400;
  return show ? (
    <div className="modal">
      <div className="rounded bg-white p-10">
        <div className="relative flex ">
          <div
            className="relative w-full h-full p-4 mx-auto flex"
            style={{ width: width + "px" }}
          >
            <p
              onClick={close}
              className="absolute right-0 top-0 scale-150 cursor-pointer"
            >
              X
            </p>
            <div className="inline-flex w-fit flex-col space-y-10 gap-5 items-center mx-auto">
              <div className="w-full mt-8  flex flex-col gap-8 justify-between my-2 mx-auto ">
                <div className=" flex justify-center">
                  {state === "approved" && <CheckedIcon />}
                  {state === "declined" && <DeclinedIcon />}
                </div>
                <div className="text-[18px] text-primary  font-extrabold text-center text-gray-900">
                  {title}
                </div>
                <p className="text-[14px] mt-3 text-center grid items-start text-gray-200 opacity-40">
                  {detail}
                </p>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export { ModalLayout };
