import { FC, ReactNode } from "react";

import { Button } from "@/components";

type Props = {
  show: boolean;
  close: () => void;
  title: string | ReactNode;
  detailText?: string;
  cancelText?: string;
  acceptText?: string;
  cancelAction?: () => void;
  acceptAction?: () => void;
  loading?: boolean;
};
const ConfirmModal: FC<Props> = ({
  show,
  close,
  title,
  detailText,
  acceptText = "Approve",
  cancelText = "Cancel",
  acceptAction,
  cancelAction,
  loading,
}) => {
  return show ? (
    <div className="modal">
      <div className="rounded bg-white p-10">
        <div className="relative flex ">
          <div
            className="relative w-full h-full p-4 mx-auto flex"
            style={{ width: "500px" }}
          >
            <p
              onClick={close}
              className="absolute right-0 top-0 scale-150 cursor-pointer"
            >
              X
            </p>
            <div className="inline-flex w-fit flex-col space-y-10 gap-5 items-center mx-auto">
              <div className="w-full flex flex-col gap-8 justify-between my-2 mx-auto ">
                <div className="text-[18px] text-primary mt-8  px-10 font-extrabold text-center text-gray-900">
                  {title}
                </div>
                <p className="text-[14px] mt-3 text-center grid items-start text-gray-200 opacity-40">
                  {detailText}
                </p>

                <div className="grid grid-cols-2 mb-8 justify-between gap-7">
                  <Button
                    title={cancelText}
                    variant="secondary"
                    size="sm"
                    className="px-8 w-full rounded-lg"
                    handleClick={cancelAction}
                  />
                  <Button
                    title={acceptText}
                    size="sm"
                    className="px-8 w-full  rounded-lg"
                    handleClick={acceptAction}
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export { ConfirmModal };
