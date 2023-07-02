import { Button, Input, PhoneNumberInput, Select } from "@/components";
import { formikCaption, formikError } from "@/utils";
import { capitalizeText } from "@/utils/capitalizeText";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import cn from "classnames";
import { useFormik } from "formik";
import { ReactNode, useEffect, useState } from "react";
import * as Yup from "yup";

import { InternalOrdersPostRequestType } from "@/_tabs/Inventory/types/inventory-order-types";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch, useSelector } from "react-redux";
import { StateReducerActions } from "@/types";
import { StoreState } from "@/store/types/store-state.types";
import { StatesOfNigeriaConstant } from "@/types/constants/states-of-nigeria";
import { LGAsOfNigeria } from "@/types/constants/lgas-of-nigeria";
import { getLga } from "@/utils/getLGA";

type Props = {
  show: boolean;
  close: (data?: any) => void;
  data: InternalOrdersPostRequestType;
  index: number | null;
};

enum DeliveryTimeEnum {
  IMMEDIATELY = "IMMEDIATELY",
  SET_DATE = "SET_DATE",
}

export function DeliveryDetailsModal({ show, data, close, index }: Props) {
  const [deliveryTime, setDliveryTime] = useState<DeliveryTimeEnum>();

  const [isSubmitting, setisSubmitting] = useState(false);
  const [error, setError] = useState<string>("");
  const [LGAs, setLGAs] = useState<string[]>([]);

  const { user } = useSelector((state: StoreState) => state);
  const formik = useFormik({
    initialValues: {
      recipientName: data?.reciepientName,
      recipientPhoneNo: data?.reciepientPhoneNo,
      deliveryState: data?.deliveryState ? data?.deliveryState : null,
      deliveryLGA: data.deliveryLGA ? data.deliveryLGA : null,
      dropOffAddress: data?.deliveryAddress,
      pickUpAddress: data.pickUpAddress,
      paymentMode: data?.paymentMode,
      dispatchTime: data.dispatchTime,
    },
    validationSchema: Yup.object({
      recipientName: Yup.string().required("Kindly fill in recipient name"),
      recipientPhoneNo: Yup.string().required(
        "Kindly fill in recipient phone number"
      ),
      deliveryState: Yup.string().required(),
      deliveryLGA: Yup.string().required(),
      dropOffAddress: Yup.string().required(),
      paymentMode: Yup.string().required(),
      dispatchTime: Yup.date().required(),
    }),
    onSubmit: ({
      recipientName,
      recipientPhoneNo,
      deliveryLGA,
      deliveryState,
      dropOffAddress,
      dispatchTime,
      paymentMode,
      pickUpAddress,
    }) => {
      const updatedData: InternalOrdersPostRequestType = {
        recipientName,
        reciepientName: recipientName,
        reciepientPhoneNo: recipientPhoneNo,
        deliveryState: deliveryState || "",
        deliveryLGA: deliveryLGA || "",
        deliveryAddress: dropOffAddress,
        paymentMode,
        dispatchTime,
        customerId: user?.customerId || "",
        storageFacilityId: data?.storageFacilityId,
        pickUpTime: dispatchTime,
        pickUpAddress: pickUpAddress,
      };

      updateOrder(updatedData);
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const setInitialValues = async () => {
      if (data)
        await formik.setValues({
          recipientName: data?.reciepientName,
          recipientPhoneNo: data?.reciepientPhoneNo,
          deliveryState: data?.deliveryState ? data?.deliveryState : null,
          deliveryLGA: data.deliveryLGA ? data.deliveryLGA : null,
          dropOffAddress: data?.deliveryAddress,
          pickUpAddress: data.pickUpAddress,
          paymentMode: data?.paymentMode,
          dispatchTime: data.dispatchTime,
        });
    };

    setInitialValues();
  }, [data]);

  const updateOrder = async (updatedData: InternalOrdersPostRequestType) => {
    setisSubmitting(true);
    setError("");
    dispatch({
      type: StateReducerActions.UPDATE_SELECTED_INVENTORY_ITEM_IN_VAN,
      payload: { data: updatedData, index: index },
    });
    formik.resetForm();
    close();
  };

  useEffect(() => {
    formik.validateForm();
  }, []);

  enum PaymentModeEnum {
    PAID = "PAID",
    PAY_ON_DELIVERY = "PAY_ON_DELIVERY",
  }

  return show ? (
    <div className="modal">
      <form
        className="rounded bg-white  w-[40vw] max-h-36 h-36"
        style={{ height: "85vh", width: "60rem" }}
      >
        <div className="relative flex flex-column border-box h-full">
          <div className="w-full flex justify-end">
            <IconButton onClick={() => close()}>
              <CloseRoundedIcon />
            </IconButton>
          </div>
          <p className="text-center text-primary font-extrabold text-[18px]">
            Create Order
          </p>

          <div
            className="grid gap-6 mt-8 mb-6 p-10"
            style={{
              height: "100%",
              overflowY: "scroll",
              boxSizing: "border-box",
            }}
          >
            <div className="grid gap-9">
              <Layout option="Recipient's Name" center={true}>
                <Input
                  className="h-10"
                  name="recipientName"
                  placeholder="Enter recipient's name"
                  type="text"
                  defaultValue={formik.initialValues.recipientName}
                  handleChange={formik.handleChange}
                  value={formik.values.recipientName}
                  caption={formikCaption("recipientName", formik)}
                  error={formikError("recipientName", formik)}
                />
              </Layout>
              <Layout option="Recipient's phone number" center={true}>
                <PhoneNumberInput
                  handleChange={formik.handleChange("recipientPhoneNo")}
                  value={
                    data?.reciepientPhoneNo || formik.values.recipientPhoneNo
                  }
                  caption={formikCaption("recipientPhoneNo", formik)}
                  error={formikError("recipientPhoneNo", formik)}
                />
              </Layout>
              <Layout option="Pick up address" center={true}>
                <Input
                  className="h-10"
                  name="pickUpAddress"
                  placeholder="Pick up address"
                  type="text"
                  // defaultValue={data?.pickUpAddress}
                  handleChange={formik.handleChange}
                  value={formik.values.pickUpAddress}
                  caption={formikCaption("pickUpAddress", formik)}
                  error={formikError("pickUpAddress", formik)}
                />
              </Layout>
              <Layout option="Delivery state" center={true}>
                <Select
                  name="deliveryState"
                  placeholder="Select Delivery State"
                  options={StatesOfNigeriaConstant}
                  handleChange={(e) => {
                    formik.setValues({
                      ...formik.values,
                      deliveryState: e.target.value,
                    });
                    setLGAs(getLga(e.target.value).lgas);
                  }}
                  value={
                    data?.deliveryState
                      ? data?.deliveryState
                      : formik.values.deliveryState || ""
                  }
                  caption={formikCaption("deliveryState", formik)}
                  error={formikError("deliveryState", formik)}
                />
              </Layout>
              <Layout option="Delivery state" center={true}>
                <Select
                  disabled={!formik.values.deliveryState}
                  name="deliveryLGA"
                  placeholder="Select Delivery LGA"
                  options={LGAs}
                  handleChange={formik.handleChange("deliveryLGA")}
                  value={data?.deliveryLGA || formik.values.deliveryLGA || ""}
                  caption={formikCaption("deliveryLGA", formik)}
                  error={formikError("deliveryLGA", formik)}
                />
              </Layout>
              {/* <Layout option="Delivery L.G.A" center={true}>
                <Input
                  className="h-10"
                  name="deliveryLGA"
                  placeholder="Delivery L.G.A"
                  type="text"
                  handleChange={formik.handleChange}
                  value={formik.values.deliveryLGA}
                  caption={formikCaption("deliveryLGA", formik)}
                  error={formikError("deliveryLGA", formik)}
                />
              </Layout>{" "} */}
              <Layout option="Delivery address" center={true}>
                <Input
                  className="h-10"
                  name="dropOffAddress"
                  placeholder="Delivery address"
                  type="text"
                  handleChange={formik.handleChange}
                  value={formik.values.dropOffAddress}
                  caption={formikCaption("dropOffAddress", formik)}
                  error={formikError("dropOffAddress", formik)}
                />
              </Layout>{" "}
              <Layout option="Payment Mode" center={true}>
                <FormControl>
                  <RadioGroup
                    onChange={(e) =>
                      formik.setFieldValue("paymentMode", e.target.value)
                    }
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value={PaymentModeEnum.PAID}
                      control={
                        <Radio
                          icon={<CheckBoxOutlineBlankIcon />}
                          checkedIcon={<CheckBoxIcon />}
                          checked={
                            formik.values.paymentMode === PaymentModeEnum.PAID
                          }
                        />
                      }
                      label="Paid"
                    />
                    <FormControlLabel
                      value={PaymentModeEnum.PAY_ON_DELIVERY}
                      className="p-10 bg-[#e5e5e5] min-w-[200]"
                      control={
                        <Radio
                          icon={<CheckBoxOutlineBlankIcon />}
                          checkedIcon={<CheckBoxIcon />}
                          checked={
                            formik.values.paymentMode ===
                            PaymentModeEnum.PAY_ON_DELIVERY
                          }
                        />
                      }
                      label="Pay on delivery"
                    />
                  </RadioGroup>
                </FormControl>
              </Layout>
              <Layout option="Set Delivery Time" center={true}>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  {Object.keys(DeliveryTimeEnum).map((dtime, ind) => (
                    <div key={ind}>
                       {" "}
                      <label htmlFor={dtime} className="flex gap-1">
                        <input
                          type="radio"
                          id={dtime}
                          name="delivery_time"
                          value={dtime}
                          checked={deliveryTime === dtime}
                          onChange={(e) => {
                            setDliveryTime(e.target.value as DeliveryTimeEnum);
                            formik.setFieldValue(
                              "dispatchTime",
                              e.target.value === DeliveryTimeEnum.IMMEDIATELY
                                ? new Date()
                                : null
                            );
                          }}
                        />
                        {capitalizeText(dtime.replace("_", " "))}
                      </label>
                    </div>
                  ))}
                </div>
              </Layout>
              {deliveryTime === DeliveryTimeEnum.SET_DATE && (
                <div className="w-90">
                  {" "}
                  <Input
                    type="date"
                    name="dispatchTime"
                    className=""
                    handleChange={formik.handleChange}
                    value={
                      formik.values.dispatchTime || new Date().toISOString()
                    }
                    caption={formikCaption("dispatchTime", formik)}
                    error={formikError("dispatchTime", formik)}
                  />
                </div>
              )}
            </div>
          </div>
          <div className=" w-full px-10 py-5">
            <Button
              title="Submit"
              className="w-full"
              handleClick={() => {
                formik.handleSubmit();
              }}
              loading={isSubmitting}
              disabled={isSubmitting || !formik.isValid}
              type="button"
            />
          </div>
        </div>
      </form>
    </div>
  ) : null;
}

const Layout = ({
  children,
  option,
  center = true,
}: {
  children: ReactNode;
  option: string;
  center?: boolean;
}) => {
  return (
    <div
      className={cn("grid grid-cols-3 w-full mb-4", {
        "items-center": center,
      })}
    >
      <p className="text-[14px] font-semibold "> {option}</p>
      <div className=" w-full col-span-2">{children}</div>
    </div>
  );
};
