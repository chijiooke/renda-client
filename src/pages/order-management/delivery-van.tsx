import { Button } from "@/components";
import { DropDown } from "@/icons";
import { DashBoardLayout } from "@/layout";
import { DeliveryDetailsModal } from "@/modals/deliveryDetailsModal";
import { DeliveryDetails } from "@/modules/order-management/components/DeliveryDetails";
import { StoreState } from "@/store/types/store-state.types";
import { StateReducerActions } from "@/types";
import { baseURL } from "@/utils";
import { capitalizeText } from "@/utils/capitalizeText";
import axios from "axios";
import { useRouter } from "next/router";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DeliveryVan() {
  const [show, setShow] = useState<number | null>(null);

  const [isVisible, setIsVisible] = useState<number | null>();
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);

  const { myDeliveryVanOrders } = useSelector(
    (state: StoreState) => state
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [isProcessing, setisProcessing] = useState<boolean>(false);

  const processOrder = () => {
    setisProcessing(true);
    if (!selectedOrder) {
      setisProcessing(false);
      return;
    }
    const selectedOrderForDelivery = myDeliveryVanOrders[selectedOrder - 1];
    axios
      .post(`${baseURL}api/InternalOrders`, selectedOrderForDelivery)
      .then((res) => {
        dispatch({
          type: StateReducerActions.REMOVE_SELECTED_ORDER_FROM_VAN,
          payload: selectedOrder - 1,
        });
        router.push("/order-management");
      })
      .catch((err) => console.error(err))
      .finally(() => setisProcessing(false));
  };

  const removeItem = (index: number, orderItemSkuID: string) => {
    const selected = myDeliveryVanOrders[index];
    if (selected.orderItems?.length === 1) {
      dispatch({
        type: StateReducerActions.REMOVE_SELECTED_ORDER_FROM_VAN,
        payload: index,
      });
    } else {
      dispatch({
        type: StateReducerActions.REMOVE_ITEM_FROM_DELIVERY_VAN_ORDER,
        payload: { orderIndex: index, itemID: orderItemSkuID },
      });
    }
  };

  const validateSelectedOrder = () => {
    if (!selectedOrder) return [];
    const selectedOrderFOrDelivery = myDeliveryVanOrders[selectedOrder - 1];
    const errors: string[] = [];
    if (!selectedOrderFOrDelivery) return [];
    Object.entries(selectedOrderFOrDelivery).forEach((item) => {
      if (item[1] === "" || item[1] === null || item[1] === undefined) {
        if (item[0].toLowerCase() === "weight") return;
        errors.push(item[0]);
      }
    });

    console.log("selectedOrderFOrDelivery", selectedOrderFOrDelivery);
    return errors;
  };
  return (
    <>
      <DeliveryDetailsModal
        index={show}
        close={() => setShow(null)}
        show={show !== null}
        data={
          show !== null && show !== undefined ? myDeliveryVanOrders[show] : {}
        }
      />

      <DashBoardLayout backAction backText="back">
        <div className="rounded border-1 border-gray-300   ">
          <div className="border-b-2 border-b-gray-300 p-7 flex justify-between">
            <div>
              <h1 className="text-2xl font-extrabold">Delivery Van</h1>
              <p className="text-gray-300">
                View all orders created from inventory
              </p>
            </div>

            <div>
              <Button title="Create Order" size="sm" />
            </div>
          </div>
          <div className="p-8">
            {" "}
            <div className="flex flex-col my-6 border-2 border-gray-300 ">
              <div className="grid grid-c-6 uppercase p-4  justify-between relative">
                <p className="text-center font-semibold">SKU ID</p>
                <p className="text-center font-semibold">Item Name</p>
                <p className="text-center font-semibold">SIZE</p>
                <p className="text-center font-semibold">UNIT PRICE</p>
                <p className="text-center font-semibold">QUANTITY</p>
              </div>
              <div className="px-5"></div>
            </div>
            {!myDeliveryVanOrders
              ? "No Items in your van"
              : myDeliveryVanOrders.map((item, index) => (
                  <div className=" my-6 border-2 border-gray-300 ">
                    <div className="flex mx-24 uppercase p-4  justify-between ">
                      <div className="flex gap-6">
                        <div>
                          <div className="mr-2 ">
                            <input
                              type="checkbox"
                              className="pl-3 scale-150"
                              checked={index + 1 === selectedOrder}
                              disabled={
                                (selectedOrder !== null &&
                                  index + 1 !== selectedOrder) ||
                                isProcessing
                              }
                              onChange={(e) => {
                                e.stopPropagation();
                                index + 1 !== selectedOrder
                                  ? setSelectedOrder(index + 1)
                                  : setSelectedOrder(null);
                                validateSelectedOrder();
                              }}
                            />
                          </div>
                        </div>
                        <h1
                          className="font-bold text-xl"
                          style={{ color: "#00000080" }}
                        >
                          Order #{index + 1}
                        </h1>
                      </div>
                      <div className="flex gap-3 items-center">
                        <button
                          className="mx-3"
                          style={{
                            color: "#1B547F",
                            textDecoration: "underline",
                          }}
                          onClick={() => setShow(index)}
                        >
                          Enter Delivery details
                        </button>

                        <button
                          className=""
                          onClick={(e) => {
                            e.stopPropagation();
                            index === isVisible
                              ? setIsVisible(null)
                              : setIsVisible(index);
                          }}
                        >
                          <DropDown />
                        </button>
                      </div>
                    </div>
                    {index + 1 === selectedOrder &&
                      !!validateSelectedOrder().length && (
                        <div className=" bg-red-50  text-red-500 m-2 rounded-md p-3 box-border text-sm">
                          Kindly provide{" "}
                          {validateSelectedOrder()
                            .map((it) =>
                              capitalizeText(it.split(/(?=[A-Z])/).join(" "))
                            )
                            .join(", ")}
                        </div>
                      )}

                    {isVisible === index &&
                      item.orderItems?.map((orderItem) => (
                        <DeliveryDetails
                          data={orderItem}
                          index={index}
                          removeItem={removeItem}
                        />
                      ))}
                  </div>
                ))}
            <div className="w-full flex justify-end  ">
              <Button
                loading={!!isProcessing}
                handleClick={() => processOrder()}
                title={!isProcessing ? "Process Order" : "Processing ..."}
                size="sm"
                disabled={!selectedOrder || !!validateSelectedOrder().length}
              />
            </div>
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
}
