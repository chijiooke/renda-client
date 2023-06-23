import { FC, ReactNode, MouseEventHandler, useState } from "react";
import { ArrowNextIcon, ArrowPreviousIcon } from "@/icons";
// import { ReactPortal } from "@/layout";

type Props = {
  children: ReactNode;
  handleClick?: MouseEventHandler<HTMLDivElement>;
  show: boolean;
  close: () => void;
};
const ImagePreviewClickable: FC<Props> = ({ children, handleClick, close }) => {
  const [show, setShow] = useState(false);
  const viewImage: MouseEventHandler<HTMLDivElement> = (e) => {
    if (handleClick) {
      handleClick(e);
      setShow(true);
      e.stopPropagation();
    }
  };
  return (
    <>
      {/* <ImagePreview show={show} close={close} /> */}
      <div onClick={viewImage} className="cursor-pointer">
        {children}
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

export { ImagePreviewClickable };
