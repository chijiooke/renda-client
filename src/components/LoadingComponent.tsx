import { Box } from "@mui/material";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

export const LoadingComponent = () => {
  return (
    <Box className="flex  items-center justify-center min-w-full">
      {" "}
      <InfinitySpin color="#f99b21" />
    </Box>
  );
};
