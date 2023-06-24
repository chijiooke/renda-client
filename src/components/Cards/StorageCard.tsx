import { FC, MouseEventHandler, useState } from "react";
import { ImageWindowIcon } from "@/icons";
import { Button } from "../Button";
// import { ReactPortal } from "@/layout";
import { ArrowNextIcon, ArrowPreviousIcon } from "@/icons";
import { ImagePreviewClickable } from "@/container";
import { BookStorageModal, ContactUsModal } from "@/modals";
import { DashBoardRoutes, formatCurrency, imageURL } from "@/utils";
import { useRouter } from "next/router";
type Props = {
  data: any;
};
const StorageCard: FC<Props> = ({ data }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const viewImages: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    //setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const showBookStorage: MouseEventHandler<HTMLButtonElement> = (e) => {
    setShowModal(true);
  };
  const showContactUsModal = () => {
    setShowContactModal(true);
  };

  const goToDetails: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const path = e.nativeEvent.composedPath();

    if (
      !["Contact Us", "Book Storage"].includes(
        ((path[1] as HTMLElement).childNodes[0] as HTMLElement).innerText
      )
    ) {
      router.push({
        pathname: DashBoardRoutes.STORAGE_DETAILS,
        query: { id: data?.storageFacilityId },
      });
    }
  };

  const src =
    imageURL + data.storageFacilityMedia[0].storageFacilityMediaLocation;

  return (
    <>
      <BookStorageModal
        show={showModal}
        data={data}
        close={() => setShowModal(false)}
      />
      <ContactUsModal
        show={showContactModal}
        close={() => setShowContactModal(false)}
      />
      {/* <ImagePreview show={show} close={closeModal} /> */}
      <div
        className="p-5 border-gray-300 border-2 rounded cursor-pointer"
        onClick={goToDetails}
      >
        <div className="relative ">
          <img src={src} className="w-full object-cover rounded h-[170px]" />
          <p className="absolute top-[20px] font-bold p-2 text-white bg-orange-400 rounded-r">
            {data?.storageType}
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-3 ">
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
            <p className="text-[12px]">
              {" "}
              {data?.minimumDurationOfUsage} Months | {data?.locationOfStorage}{" "}
            </p>
          </div>
          <div>
            <p className="text-[15px] font-bold">
              {" "}
              Available Space ({data?.availableSpace}qm)
            </p>
          </div>
          <div>
            {data?.storageType === "Shared" && (
              <p>
                From{" "}
                <span className="font-bold text-1xl">
                  NGN {formatCurrency(data?.rendaPrice)} per sqm
                </span>
              </p>
            )}
            {data?.storageType === "Dedicated" && <p>For Price:</p>}
          </div>
          {data?.storageType === "Shared" && (
            <Button
              title="Book Storage"
              size="sm"
              handleClick={showBookStorage}
            />
          )}
          {data?.storageType === "Dedicated" && (
            <Button
              title="Contact Us"
              size="sm"
              handleClick={showContactUsModal}
            />
          )}
        </div>
      </div>
    </>
  );
};
// const ImagePreview = ({
//   show,
//   close,
// }: {
//   show: boolean;
//   close: () => void;
// }) => {
//   return show ? (
//     <ReactPortal wrapperId="react-portal-modal-container">
//       <p className="close" onClick={close}>
//         X
//       </p>
//       <ArrowPreviousIcon />
//       <div className="">
//         <img src="/assets/images/storage-lg-0.png" />
//       </div>
//       <ArrowNextIcon />
//     </ReactPortal>
//   ) : null;
// };

export { StorageCard };
