import { imageURL } from "@/utils";
import { Close } from "@mui/icons-material";
import { Box, Dialog, DialogTitle, IconButton } from "@mui/material";
import { FC } from "react";
import { Document, Page } from "react-pdf";

export const ImageCarousel: FC<{
  show: boolean;
  imageSource: string[];
  onClose: () => void;
}> = ({ show, imageSource, onClose }) => {
  return (
    <Dialog open={show} onClose={() => onClose()} maxWidth="md">
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>Document Preview</Box>
        <IconButton onClick={() => onClose()}>
          <Close />
        </IconButton>
      </DialogTitle>
      {imageSource.map((img) =>
        img.split(".")[1] !== "pdf" ? (
          <img
            src={`${imageURL}${img}`}
            alt="image-text"
            width="700px"
            height="700px"
          />
        ) : (
          <Document file={`${imageURL}${img}`} onLoadSuccess={() => {}}>
            <Page pageNumber={1} />
          </Document>
        )
      )}
    </Dialog>
  );
};
