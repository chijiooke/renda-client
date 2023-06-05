import { FC, MouseEventHandler, useState } from "react";
import { ImageWindowIcon } from "@/icons";
import { Button } from "../Button";
import { ReactPortal } from "@/layout";
import { ArrowNextIcon, ArrowPreviousIcon } from "@/icons";
import { ImagePreviewClickable } from "@/container";
type Props = {
  handleClick?: () => void;
  data: any;
};
const StorageCard: FC<Props> = ({ handleClick, data }) => {
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
            {data?.storageType}
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-3">
          <div>
            <div className=" flex justify-between items-center">
              <p className="font-extrabold">{data?.storageFacilityName}</p>
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
              {data?.maximumDurationOfUsage} Months | {data?.locationOfStorage}{" "}
              | Available Space ({data?.availableSpace}qm)
            </p>
          </div>
          <div>
            {data?.storageType === "Shared" && (
              <p>
                From{" "}
                <span className="font-bold text-1xl">
                  NGN {data?.rendaPrice} per sqm
                </span>
              </p>
            )}
            {data?.storageType === "Dedicated" && <p>For Price:</p>}
          </div>
          {data?.storageType === "Shared" && (
            <Button title="Book Storage" size="sm" />
          )}
          {data?.storageType === "Dedicated" && (
            <Button title="Contact Us" size="sm" />
          )}
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
