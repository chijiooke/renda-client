import { FC, MouseEventHandler, useState } from "react";
import { ImageWindowIcon } from "@/icons";
import { Button } from "../Button";
import { ReactPortal } from "@/layout";
import { ArrowNextIcon, ArrowPreviousIcon } from "@/icons";
import { ImagePreviewClickable } from "@/container";
type Props = {
  handleClick?: () => void;
};
const StorageCard: FC<Props> = ({ handleClick }) => {
  const [show, setShow] = useState(false);
  const viewImages: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    //setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  return (
    <>
      <ImagePreview show={show} close={closeModal} />
      <div
        className="p-5 border-gray-300 border-2 rounded cursor-pointer"
        onClick={handleClick}
      >
        <div className="relative ">
          <img
            src="/assets/images/storage-0.png"
            className="w-full object-cover rounded"
          />
          <p className="absolute top-[20px] font-bold p-2 text-white bg-orange-400 rounded-r">
            Dedicated storage
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-3">
          <div>
            <div className=" flex justify-between items-center">
              <p className="font-extrabold">Name of Storage Facilities</p>
              <ImagePreviewClickable
                handleClick={viewImages}
                show={show}
                close={closeModal}
              >
                <ImageWindowIcon />
              </ImagePreviewClickable>
            </div>
          </div>

          <div>
            <p className="text-[10px]">
              {" "}
              6 Months | Badagry | Available Space (100qm)
            </p>
          </div>
          <div>
            <p>
              From <span className="font-bold text-1xl">NGN 780,000</span>
            </p>
          </div>
          <Button title="Contact Us" size="sm" />
        </div>
      </div>
    </>
  );
};
const ImagePreview = ({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) => {
  return show ? (
    <ReactPortal wrapperId="react-portal-modal-container">
      <p className="close" onClick={close}>
        X
      </p>
      <ArrowPreviousIcon />
      <div className="">
        <img src="/assets/images/storage-lg-0.png" />
      </div>
      <ArrowNextIcon />
    </ReactPortal>
  ) : null;
};

export { StorageCard };
