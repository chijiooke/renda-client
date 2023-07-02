import { StateReducerActions } from "@/types";
import { StoreState } from "./types/store-state.types";
import { InventoryItemType } from "@/_tabs/Inventory/types/inventory-data-type";
import { number } from "yup";
import { InternalOrdersPostRequestType } from "@/_tabs/Inventory/types/inventory-order-types";

export type InventoryType = {
  id?: string;
  itemName: string;
  quantity: number;
  description: string;
  size: string;
  weight: string;
  colour: string;
  picture?: string;
  unitPrice: number;
  customerBusinessId: string;
};

// const mydeliverVanItems = window.sessionStorage.getItem("deliveryVanItems");
export const initialValues: StoreState = {
  getStarted: {
    businessName: "",
    contactPerson: "",
    businessEmailAddress: "",
    emailAddress: "",
    businessAddress: "",
    phoneNumber: "",
    businessPhoneNumber: "",
    businessIndustry: "",
    officeAddress: "",
  },
  userId: "",
  user: null,
  companyRegistrationNumber: "",
  Kyc: new FormData(),
  fileList: {
    registrationCertificate: [],
    proofOfAddress: [],
    directorsIds: [],
  },
  loginDetails: {
    value: "",
    password: "",
    id: "",
    otp: "",
  },
  onboardSteps: {
    getStarted: "not-done",
    kycUpload: "not-done",
    createPassword: "not-done",
    confirmEmail: "not-done",
  },
  bookingDetails: {
    amount: 0,
    bookingId: "",
  },
  inventoryItems: [] as InventoryType[],
  myDeliveryVanItems: [],
  selectedInventoryItemsToOrder: [],
};
interface ActionType {
  type: StateReducerActions;
  payload: any;
}

const reducer = (
  state: StoreState = initialValues,
  action: ActionType
): StoreState => {
  switch (action.type) {
    case StateReducerActions.SET_GET_STARTED:
      return {
        ...state,
        getStarted: action.payload,
      };
    case StateReducerActions.SET_COMPANY_NUMBER:
      return {
        ...state,
        companyRegistrationNumber: action.payload,
      };
    case StateReducerActions.SET_KYC:
      return {
        ...state,
        Kyc: action.payload,
      };
    case StateReducerActions.UPDATE_FILE_LIST:
      return {
        ...state,
        fileList: action.payload,
      };
    case StateReducerActions.SET_LOGIN_DETAILS:
      return {
        ...state,
        loginDetails: action.payload,
      };
    case StateReducerActions.SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case StateReducerActions.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case StateReducerActions.SET_BOOKING_DETAILS:
      return {
        ...state,
        bookingDetails: action.payload,
      };
    case StateReducerActions.SET_INVENTORY_ITEMS:
      return {
        ...state,
        inventoryItems: [...action.payload],
      };
    case StateReducerActions.CLEAR_INVENTORY_ITEMS:
      return {
        ...state,
        inventoryItems: [] as InventoryType[],
      };
    case StateReducerActions.ADD_SINGLE_INVENTORY_ITEM_TO_VAN:
      return {
        ...state,
        myDeliveryVanItems: [...state.myDeliveryVanItems, action.payload],
      };
    case StateReducerActions.ADD_MULTIPLE_INVENTORY_ITEM_TO_VAN:
      return {
        ...state,
        myDeliveryVanItems: [...state.myDeliveryVanItems, ...action.payload],
      };
    case StateReducerActions.UPDATE_SELECTED_INVENTORY_ITEM_IN_VAN:
      return {
        ...state,
        myDeliveryVanItems: state.myDeliveryVanItems.map((item, ind) =>
          ind != action.payload.index
            ? item
            : { ...action.payload.data, orderItems: item.orderItems }
        ),
      };
    case StateReducerActions.REMOVE_SELECTED_INVENTORY_ITEMS_FROM_VAN:
      return {
        ...state,
        myDeliveryVanItems: state.myDeliveryVanItems.filter(
          (item, ind) => action.payload !== ind
        ),
      };
    case StateReducerActions.SELECT_INVENTORY_ITEMS_TO_ORDER:
      return {
        ...state,
        selectedInventoryItemsToOrder: [
          ...state.selectedInventoryItemsToOrder,
          action.payload,
        ],
      };
    case StateReducerActions.UNSELECT_INVENTORY_ITEMS_TO_ORDER:
      return {
        ...state,
        selectedInventoryItemsToOrder: [
          ...state.selectedInventoryItemsToOrder.filter(
            (it) => it.id !== action.payload.id
          ),
        ],
      };
    case StateReducerActions.INCREMENT_ORDER_QUANTITY:
      let addQunatity: (
        orderQuantity: number | undefined,
        stockQuantity: number
      ) => number = (orderQuantity, stockQuantity) => {
        if (orderQuantity === undefined) return 1;
        if (orderQuantity < stockQuantity) {
          return orderQuantity + 1;
        } else {
          return orderQuantity;
        }
      };

      return {
        ...state,
        selectedInventoryItemsToOrder: [
          ...state.selectedInventoryItemsToOrder.map((it, idx) =>
            idx === action.payload
              ? {
                  ...it,
                  orderQuantity: addQunatity(it.orderQuantity, it.quantity),
                }
              : it
          ),
        ],
      };
    case StateReducerActions.CLEAR_SELECTED_INVENTORY_LIST:
      return { ...state, selectedInventoryItemsToOrder: [] };
    case StateReducerActions.DECREMENT_ORDER_QUANTITY:
      return {
        ...state,
        selectedInventoryItemsToOrder: [
          ...state.selectedInventoryItemsToOrder.map((it, idx) =>
            idx === action.payload
              ? {
                  ...it,
                  orderQuantity:
                    it.orderQuantity && it.orderQuantity > 0
                      ? it.orderQuantity - 1
                      : 0,
                }
              : it
          ),
        ],
      };
    case StateReducerActions.DECREMENT_DELIVERY_VAN_ORDER_QUANTITY:
      const vanitemsToIncrease: InternalOrdersPostRequestType[] = [];
      state.myDeliveryVanItems.forEach((vanitem, ind) => {
        if (ind === action.payload.orderIndex) {
          let selectedOrder = {
            ...vanitem,

            orderItems: vanitem.orderItems?.map((it) => {
              if (it.skuId === action.payload.itemID) {
                return {
                  ...it,
                  orderQuantity: it.orderQuantity
                    ? it.orderQuantity < 1
                      ? it.orderQuantity
                      : it.orderQuantity - 1
                    : 0,
                };
              } else {
                return it;
              }
            }),
          };

          vanitemsToIncrease.push(selectedOrder);
        } else {
          vanitemsToIncrease.push(vanitem);
        }
      });
      return {
        ...state,
        myDeliveryVanItems: [...vanitemsToIncrease],
      };
    case StateReducerActions.INCREMENT_DELIVERY_VAN_ORDER_QUANTITY:
      const vanitemsToDeduct: InternalOrdersPostRequestType[] = [];
      state.myDeliveryVanItems.forEach((vanitem, ind) => {
        if (ind === action.payload.orderIndex) {
          let selectedOrder = {
            ...vanitem,

            orderItems: vanitem.orderItems?.map((it) => {
              if (it.skuId === action.payload.itemID) {
                return {
                  ...it,
                  orderQuantity: it.orderQuantity
                    ? it.orderQuantity >= it.quantity
                      ? it.orderQuantity
                      : it.orderQuantity + 1
                    : 1,
                };
              } else {
                return it;
              }
            }),
          };

          vanitemsToDeduct.push(selectedOrder);
        } else {
          vanitemsToDeduct.push(vanitem);
        }
      });
      return {
        ...state,
        myDeliveryVanItems: [...vanitemsToDeduct],
      };
    default:
      return state;
  }
};

export default reducer;
