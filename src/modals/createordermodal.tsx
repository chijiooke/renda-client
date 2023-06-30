import { Button } from "@/components";
import { DashBoardRoutes } from "@/utils";
import cn from "classnames";
import { Dispatch, ReactNode, useState } from "react";

import { OrderManagementTabsEnum } from "@/pages/ordermgt";
import { capitalizeText } from "@/utils/capitalizeText";
import { OrdermgtRoutes } from "@/utils/routes";
import { RadioGroup } from "@headlessui/react";
import { useRouter } from "next/router";
import { Dialog, DialogActions, DialogTitle, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

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

  // const handleChange = (value: CreateOrderByEnum) => {
  //   setCreateOrderBy(value);
  // };

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
    <Dialog open={show}>
      <DialogTitle>
        {" "}
        <IconButton>
          <Close />
        </IconButton>
      </DialogTitle>{" "}
      <RadioGroup value={createOrderBy} onChange={setCreateOrderBy}>
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
              <RadioGroup.Option
                key={item}
                value={item}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "border-2 rounded w-full radio-order"
                      : "radio-order"
                  }
                        ${
                          checked
                            ? "border-solid rounded border-2 radio-checked"
                            : "border-2 rounded"
                        }
                          w-full  items-center justify-between text-sky-400`
                }
              >
                {({ active, checked }) => (
                  <RadioGroup.Label
                    as="p"
                    className={`font-lg flex items-center uppercase radio-text mt-5 ${
                      checked ? "text-[#1B547F]" : "text-gray-900"
                    }`}
                  >
                    {capitalizeText(item.replace("_", " "))}
                  </RadioGroup.Label>
                )}
              </RadioGroup.Option>
            );
          }
        })}
      </RadioGroup>
      <DialogActions>
        {" "}
        <Button
          title="Create order"
          variant="primary"
          handleClick={handleSubmit}
        />
      </DialogActions>
    </Dialog>
  );
}

export { CreateOrderModal };
