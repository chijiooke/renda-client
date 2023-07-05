import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { InternalOrdersPostRequestType } from "../types/inventory-order-types";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "@/store/types/store-state.types";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { StateReducerActions } from "@/types";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useRouter } from "next/router";
import { Button } from "@/components";
import { generateNewOrderItem } from "../utils/generateNewOrderItems";

export const SelectedInventoryModal: FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { selectedInventoryItemsToOrder } = useSelector(
    (state: StoreState) => state
  );
  const addAllSelectedItemsToVan = () => {
    dispatch({
      type: StateReducerActions.ADD_MULTIPLE_INVENTORY_ITEM_TO_VAN,
      payload: selectedInventoryItemsToOrder.map((it) =>
        generateNewOrderItem({
          storageFacilityId: it.storageFacilityId,
          orderItems: [
            {
              itemName: it?.itemName,
              orderQuantity: it?.orderQuantity || 0,
              dimension: it.size.toString(),
              unitPrice: it?.unitPrice,
              quantity: it?.quantity,
              skuId: it?.skuId,
            },
          ],
        })
      ),
    });
    router.push("/ordermgt/deliveryVan");
    onClose();
    dispatch({
      type: StateReducerActions.CLEAR_SELECTED_INVENTORY_LIST,
    });
  };
  return (
    <Dialog open={open} onClose={() => onClose()}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          width: "600px",
          minWidth: "100%",
        }}
      >
        <IconButton onClick={() => onClose()}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography
          variant="h5"
          fontWeight={600}
          textAlign="center"
          color="primary"
        >
          Create Order
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SKU ID</TableCell>
              <TableCell>Item Name</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          {!selectedInventoryItemsToOrder.length ? (
            <TableRow>
              <TableCell colSpan={4}>
                <div className="p-3 text-center">
                  No inventory items selected
                </div>
              </TableCell>{" "}
            </TableRow>
          ) : (
            selectedInventoryItemsToOrder.map((item, index) => (
              <TableRow>
                <TableCell>{item?.skuId}</TableCell>
                <TableCell>{item?.itemName}</TableCell>
                <TableCell>{item?.unitPrice}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      onClick={() => {
                        dispatch({
                          type: StateReducerActions.INCREMENT_ORDER_QUANTITY,
                          payload: index,
                        });
                      }}
                    >
                      <AddCircleIcon />
                    </IconButton>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {" "}
                      <Typography variant="body2" sx={{}}>
                        {item?.orderQuantity || 0}/{item?.quantity}
                      </Typography>
                    </Box>
                    <IconButton
                      onClick={() => {
                        dispatch({
                          type: StateReducerActions.DECREMENT_ORDER_QUANTITY,
                          payload: index,
                        });
                      }}
                    >
                      <RemoveCircleIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))
          )}
        </Table>
        <Button
          variant="primary"
          title="Add to delivery van"
          fullWidth
          size="sm"
          disabled={!selectedInventoryItemsToOrder.length}
          handleClick={() => addAllSelectedItemsToVan()}
        />
      </DialogContent>
    </Dialog>
  );
};
