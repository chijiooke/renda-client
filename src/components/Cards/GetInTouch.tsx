import { useState } from "react";
import { ContactUsModal } from "@/modals";
const GetInTouch = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <ContactUsModal
        show={showContactModal}
        close={() => setShowContactModal(false)}
      />

      <div className="p-10 bg-black flex flex-col gap-10 rounded text-white justify-center">
        <p className="font-extrabold text-[18px]">
          Didn’t find what you were looking for?
        </p>
        <p className="text-[12px]">
          Let us know your preference and our business team will reach out to
          you on what matches you request
        </p>

        <div
          onClick={() => setShowContactModal(true)}
          className="cursor-pointer"
        >
          <span className="px-6 py-3 rounded-[14px] bg-[#F99B20]  text-black underline font-bold">
            Get in touch
          </span>
        </div>
      </div>
    </>
  );
};

export { GetInTouch };
