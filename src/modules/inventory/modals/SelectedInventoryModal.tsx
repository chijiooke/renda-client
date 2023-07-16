import { Button } from "@/components";
import { StoreState } from "@/store/types/store-state.types";
import { StateReducerActions } from "@/types";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
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
import { useRouter } from "next/router";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      type: StateReducerActions.ADD_SINGLE_INVENTORY_ITEM_TO_VAN,
      payload: generateNewOrderItem({
        storageFacilityId: selectedInventoryItemsToOrder[0].storageFacilityId,
        orderItems: selectedInventoryItemsToOrder.map((item) => {
          return {
            itemName: item?.itemName,
            orderQuantity: item?.orderQuantity || 0,
            dimension: item.size.toString(),
            unitPrice: item?.unitPrice,
            quantity: item?.quantity,
            skuId: item?.skuId,
          };
        }),
      }),
    });
    router.push("/order-management/delivery-van");
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
          className="p-2 rounded-lg "
          disabled={!selectedInventoryItemsToOrder.length}
          handleClick={() => addAllSelectedItemsToVan()}
        />
      </DialogContent>
    </Dialog>
  );
};
