import React from "react";
import { ModalLayout } from "./layout";
import { CheckedIcon, DeclinedIcon } from "@/icons";

type Props = {
  show: boolean;
  close: () => void;
  title?: string;
  details?: string;
  state?: "approved" | "declined";
};

function SuccessModal({
  show,
  close,
  title = "Successful",
  details,
  state = "approved",
}: Props) {
  return (
    <ModalLayout
      show={show}
      close={close}
      title={title}
      state={state}
      detail={details}
    />
  );
}

export { SuccessModal };
