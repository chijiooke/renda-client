import { Menu, PopperPlacementType } from "@mui/material";
import { Box, styled } from "@mui/system";
import { FC, ReactElement } from "react";

type Props = {
  handleClickAway: (e: any) => void;
  open: boolean;
  anchorEl: HTMLElement | null;
  children: ReactElement;
};
export const ContextMenu: FC<Props> = ({
  handleClickAway,
  open,
  anchorEl,
  children,
}) => {
  if (!open) return <></>;
  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      style={{
        borderRadius: "8px",
      }}
      sx={{
        mt: 1,
        ".MuiMenu-list": {
          minWidth: "120px",
          px: 1.5,
          boxShadow: "0px 1px 14px rgba(0, 0, 0, 0.15)",
          borderRadius: "8px",
        },
      }}
      onClose={(e) => handleClickAway(e)}
      anchorPosition={{
        left: 0,
        top: 10,
      }}
      anchorOrigin={{
        horizontal: "center",
        vertical: "center",
      }}
    >
      <ContextMenuWrapper>{children}</ContextMenuWrapper>
    </Menu>
  );
};

export const ContextMenuWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
}));
