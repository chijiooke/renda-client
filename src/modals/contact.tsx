import { EmailIcon, PhoneIcon, WhatsAppIcon } from "@/icons";
import React from "react";

type Props = {
  show: boolean;

  close: () => void;
};

function ContactUsModal({ show, close }: Props) {
  return show ? (
    <div className="modal">
      <div className="rounded bg-white p-10">
        <div className="relative flex ">
          <div
            className="relative w-full h-full p-4 mx-auto flex"
            style={{ width: "600px" }}
          >
            <p
              onClick={close}
              className="absolute right-0 top-0 scale-125 cursor-pointer"
            >
              X
            </p>
            <div className="inline-flex w-fit flex-col space-y-10 gap-5 items-center mx-auto">
              <div className="w-full flex flex-col gap-8 justify-between my-10 mx-auto ">
                <p className="text-center  text-primary font-extrabold text-[18px] w-full">
                  Contact Us
                </p>
                <div className="flex gap-10 items-center justify-center w-full">
                  <div className="flex gap-3  items-center">
                    <WhatsAppIcon />
                    <a
                      target="_blank"
                      className="opacity-50 font-bold"
                      href="https://api.whatsapp.com/send?phone=2349076825598"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <div className="flex gap-3  items-center">
                    <EmailIcon />
                    <a
                      target="_blank"
                      className="opacity-50 font-bold"
                      href="mailto:hello@renda.co"
                    >
                      hello@renda.co
                    </a>
                  </div>
                  <div className="flex gap-3  items-center">
                    <PhoneIcon />
                    <a
                      href="tel:09159890056"
                      target="_blank"
                      className="opacity-50 font-bold"
                    >
                      +2349159890056
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export { ContactUsModal };
