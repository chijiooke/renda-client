import { Button } from "@/components";
import { DashBoardRoutes } from "@/utils";
import { useState } from "react";

import { OrderManagementTabsEnum } from "@/pages/ordermgt";
import { capitalizeText } from "@/utils/capitalizeText";
import { OrdermgtRoutes } from "@/utils/routes";

// import { FormControl } from "@mui/base";
import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  // DialogTitle,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

type Props = {
  show: boolean;
  data?: any;
  close: () => void;
  modalType: OrderManagementTabsEnum;
  openCreateModal: () => void;
};

enum CreateOrderByEnum {
  FROM_INVENTORY = "FROM_INVENTORY",
  SINGLE_ORDER = "SINGLE_ORDER",
  CSV = "CSV",
  API = "API",
}

function CreateOrderModal({
  show,
  data,
  close,
  modalType,
  openCreateModal,
}: Props) {
  const router = useRouter();

  const [createOrderBy, setCreateOrderBy] = useState<CreateOrderByEnum>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateOrderBy(
      (event.target as HTMLInputElement).value as CreateOrderByEnum
    );
    // console.log(value);
  };

  const handleSubmit = () => {
    // Perform any necessary actions before routing
    // Based on the selected button, route to a specific page
    if (createOrderBy === CreateOrderByEnum.FROM_INVENTORY) {
      router.push(DashBoardRoutes.INVENTORY_ALL);
    } else if (createOrderBy === CreateOrderByEnum.CSV) {
      router.push(OrdermgtRoutes.CREATEORDER_CSV);
    } else if (createOrderBy === CreateOrderByEnum.API) {
      router.push("/page3");
    } else {
      openCreateModal();
    }
  };

  return (
    <Dialog open={show} onClose={() => close()} maxWidth="md">
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>Create Order By</Box>
        <IconButton onClick={() => close()}>
          <Close />
        </IconButton>
      </DialogTitle>
      <FormControl
        sx={{
          // minWidth: "100%",
          padding: "2rem",

          width: "500px",
        }}
      >
        <RadioGroup
          onChange={(e) => handleChange(e)}
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={createOrderBy}
        >
          {Object.keys(CreateOrderByEnum).map((item) => {
            if (
              modalType === OrderManagementTabsEnum.EXTERNAL_ORDERS &&
              item === CreateOrderByEnum.FROM_INVENTORY
            ) {
              return;
            } else if (
              modalType === OrderManagementTabsEnum.INVENTORY_ORDERS &&
              item === CreateOrderByEnum.SINGLE_ORDER
            ) {
              return;
            } else {
              return (
                <FormControlLabel
                  sx={{
                    left: 0,
                    // maxWidth: "80%",
                    padding: "1rem 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    boxSizing: "border-box",
                    border:
                      createOrderBy === item
                        ? "1px solid #1b547f"
                        : "1px solid #ccc",
                    borderRadius: ".2rem",
                    mb: "1rem",
                    mr: 0,
                    ml: 0,
                  }}
                  value={item}
                  control={
                    <Radio
                      sx={{ visibility: "hidden" }}
                      icon={<></>}
                      checkedIcon={<></>}
                    />
                  }
                  label={capitalizeText(item).replace("_", " ")}
                />
              );
            }
          })}
        </RadioGroup>
      </FormControl>
      <DialogActions>
        {" "}
        <Button
          size="sm"
          title="Create order"
          variant="primary"
          handleClick={handleSubmit}
        />
      </DialogActions>
    </Dialog>
  );
}

export { CreateOrderModal };
