import { Button, Input, PhoneNumberInput, Select } from "@/components";
import cn from "classnames";
import { ReactNode, useEffect, useState } from "react";

import {
  IExternalOrderItemType,
  IExternalOrderType
} from "@/_tabs/ordermgt/types/external-order-types";
import { Minus, Plus } from "@/icons";
import { baseURL, formikCaption, formikError } from "@/utils";
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
import { useFormik } from "formik";
import * as Yup from "yup";

import { hasInValidItems } from "@/_tabs/ordermgt/utils/has-invalid-items";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import axios from "axios";

type Props = {
  show: boolean;
  close: (data?: any) => void;
};

enum DeliveryTimeEnum {
  IMMEDIATELY = "IMMEDIATELY",
  SET_DATE = "SET_DATE",
}
const location = ["Lagos", "Ibadan", "Abuja", "Rivers"];

function ExternalOrderDetailsModal({ show, close }: Props) {
  const [deliveryTime, setDliveryTime] = useState<DeliveryTimeEnum>();
  const itemsPlaceholder: IExternalOrderItemType = {
    itemName: "",
    dimension: "",
    quantity: 0,
    unitPrice: 0,
  };

  const [items, setitems] = useState<IExternalOrderItemType[]>([
    itemsPlaceholder,
  ]);

  const handleFormChange = (
    index: number,
    eventData: { key: string; value: string | number }
  ) => {
    let data = [...items];

     // @ts-ignore
    data[index][eventData.key as keyof IExternalOrderItemType] =
      eventData.value as string | number;
    setitems(data);
  };
  const handleAddButton = () => {
    setitems([...items, itemsPlaceholder]);
  };

  const handleDeleteButton = (index: number) => {
    const deletedItems = items.filter((item, ind) => index !== ind);
    setitems(!!deletedItems.length ? [...deletedItems] : [itemsPlaceholder]);
  };

  const [isSubmitting, setisSubmitting] = useState(false);
  const [error, setError] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      recipientName: "",
      recipientPhoneNo: "",
      pickUpLGA: null,
      pickUpAddress: "",
      paymentMode: "",
      contactName: "",
      contactPhoneNumber: "",
      deliveryLGA: null,
      deliveryAddress: "",
      deliveryDate: new Date().toISOString(),
    },
    validationSchema: Yup.object({
      recipientName: Yup.string().required("Kindly fill in your name"),
      recipientPhoneNo: Yup.string().required(
        "Kindly fill in your phone number"
      ),
      pickUpLGA: Yup.string(),
      pickUpAddress: Yup.string().required("this is a required field"),
      contactName: Yup.string().required("this is a required field"),
      contactPhoneNumber: Yup.string().required("this is a required field"),
      deliveryLGA: Yup.string().required(),
      deliveryAddress: Yup.string().required(),
      deliveryDate: Yup.date().required(),
      paymentMode: Yup.string().required(),
    }),
    onSubmit: ({
      recipientName,
      recipientPhoneNo,
      pickUpLGA,
      pickUpAddress,
      contactName,
      contactPhoneNumber,
      deliveryLGA,
      deliveryDate,
      paymentMode,
      deliveryAddress,
    }) => {
      const data: IExternalOrderType = {
        recipientName,
        paymentMode,
        numberOfItems: items.length,
        recipientPhoneNo,
        pickUpAddress,
        pickUpLGA: pickUpLGA || "",
        deliveryAddress,
        deliveryLGA: deliveryLGA || "",
        deliveryDate,
        orderItems: items,
        contactName,
        contactPhoneNumber,
        // customerId
        // pickUpTime,
        // dispatchTime
      };

      bookOrder(data);
    },
  });

  const bookOrder = async (data: IExternalOrderType) => {
    setisSubmitting(true);
    setError("");

    try {
      const { data: response } = await axios.post(baseURL + "api/orders", data);
      formik.resetForm();
      close();
    } catch (error) {
      setError(
        (error as any).response.data.errorMessage ||
          (error as any).response.data.data
      );
    } finally {
      setisSubmitting(false);
    }
  };

  useEffect(() => {
    formik.validateForm();
  }, []);

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
                  handleChange={formik.handleChange}
                  value={formik.values.recipientName}
                  caption={formikCaption("recipientName", formik)}
                  error={formikError("recipientName", formik)}
                />
              </Layout>
              <Layout option="Recipient's phone number" center={true}>
                <PhoneNumberInput
                  handleChange={formik.handleChange("recipientPhoneNo")}
                  value={formik.values.contactPhoneNumber}
                  caption={formikCaption("recipientPhoneNo", formik)}
                  error={formikError("recipientPhoneNo", formik)}
                />
              </Layout>
              <Layout option="Pick up LGA" center={true}>
                <Select
                  name="pickUpLGA"
                  placeholder="Select Pick up LGA"
                  options={location}
                  handleChange={formik.handleChange("pickUpLGA")}
                  value={formik.values.pickUpLGA || ""}
                  caption={formikCaption("pickUpLGA", formik)}
                  error={formikError("pickUpLGA", formik)}
                />
              </Layout>
              <Layout option="Pick up address" center={true}>
                <Input
                  className="h-10"
                  name="pickUpAddress"
                  placeholder="Pick up address"
                  type="text"
                  handleChange={formik.handleChange}
                  value={formik.values.pickUpAddress}
                  caption={formikCaption("pickUpAddress", formik)}
                  error={formikError("pickUpAddress", formik)}
                />
              </Layout>
              <Layout option="Pick up contact" center={true}>
                <Input
                  className="h-10"
                  name="contactName"
                  placeholder="Enter Pick up contact"
                  type="text"
                  handleChange={formik.handleChange}
                  value={formik.values.contactName}
                  caption={formikCaption("contactName", formik)}
                  error={formikError("contactName", formik)}
                />
              </Layout>
              <Layout option="Contact Phone no." center={true}>
                <PhoneNumberInput
                  handleChange={formik.handleChange("contactPhoneNumber")}
                  value={formik.values.contactPhoneNumber}
                  caption={formikCaption("contactPhoneNumber", formik)}
                  error={formikError("contactPhoneNumber", formik)}
                />
              </Layout>
              <Layout option="Delivery LGA" center={true}>
                <Select
                  name=""
                  placeholder="Select Delivery LGA"
                  options={location}
                  handleChange={formik.handleChange("deliveryLGA")}
                  value={formik.values.deliveryLGA || ""}
                  caption={formikCaption("deliveryLocation", formik)}
                  error={formikError("deliveryLocation", formik)}
                />
              </Layout>
              <Layout option="Delivery address" center={true}>
                <Input
                  className="h-10"
                  name="deliveryAddress"
                  placeholder="Delivery address"
                  type="text"
                  handleChange={formik.handleChange}
                  value={formik.values.deliveryAddress}
                  caption={formikCaption("deliveryLocation", formik)}
                  error={formikError("deliveryLocation", formik)}
                />
              </Layout>{" "}
              <div
                className="boarder-2 rounded  mt-4"
                style={{ backgroundColor: "#0000001a" }}
              >
                {items.map((item, index) => (
                  <div className=" mt-2 p-2" key={index}>
                    <div className="flex gap-2 mb-9">
                      {" "}
                      <Input
                        className="h-10"
                        name=""
                        placeholder="Name of Item"
                        type="text"
                        value={item.itemName}
                        handleChange={(e) =>
                          handleFormChange(index, {
                            key: "itemName",
                            value: e.target.value,
                          })
                        }
                      />
                      <Input
                        className="h-10"
                        name=""
                        placeholder="Dimension"
                        type="text"
                        value={item.dimension}
                        handleChange={(e) =>
                          handleFormChange(index, {
                            key: "dimension",
                            value: e.target.value,
                          })
                        }
                      />
                      <Input
                        className="h-10"
                        name=""
                        placeholder="Unit Price"
                        type="number"
                        value={item.unitPrice}
                        handleChange={(e) =>
                          handleFormChange(index, {
                            key: "unitPrice",
                            value: Number(e.target.value),
                          })
                        }
                      />
                      <Input
                        className="h-10"
                        name=""
                        placeholder="Quantity"
                        type="number"
                        value={item.quantity}
                        handleChange={(e) =>
                          handleFormChange(index, {
                            key: "quantity",
                            value: Number(e.target.value),
                          })
                        }
                      />
                    </div>

                    {/* <div className="w-full flex align-en"> */}
                    <div className="flex gap-2 mt-8  justify-end ">
                      <button
                        type="button"
                        onClick={() => {
                          handleDeleteButton(index);
                        }}
                        className="flex gap-2 items-center justify-center rounded-lg"
                        style={{
                          backgroundColor: "#CF0000",
                          width: "80px",
                          height: "25px",
                        }}
                      >
                        <Minus />
                        <p className="text-white">Delete</p>
                      </button>

                      {index === items.length - 1 && (
                        <button
                          type="button"
                          className="flex gap-2 items-center justify-center rounded-lg"
                          style={{
                            backgroundColor: "#008753",
                            width: "80px",
                          }}
                          onClick={handleAddButton}
                        >
                          <Plus />
                          <p className="text-white ">Add</p>
                        </button>
                      )}
                    </div>
                    {/* </div> */}
                  </div>
                ))}
              </div>
              <Layout option="Payment Mode" center={true}>
                <FormControl>
                  <RadioGroup
                    onChange={(e) =>
                      formik.setFieldValue("paymentMode", e.target.value)
                    }
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className=" "
                  >
                    <div></div>
                    <FormControlLabel
                      value="paid"
                      control={
                        <Radio
                          icon={<CheckBoxOutlineBlankIcon />}
                          checkedIcon={<CheckBoxIcon />}
                        />
                      }
                      label="paid"
                      className="flex gap-2 border-2 rounded items-center mr-6 "
                      style={{
                        backgroundColor: "#F5F5F5",
                        height: "50px",
                        width: "150px",
                      }}
                    />
                    <FormControlLabel
                      value="payOnDelivery"
                      className="p-10 bg-[#e5e5e5] min-w-[200]"
                      control={
                        <Radio
                          icon={<CheckBoxOutlineBlankIcon />}
                          checkedIcon={<CheckBoxIcon />}
                        />
                      }
                      label="payOnDelivery"
                      className="flex gap-2 border-2 rounded items-center ml-6 "
                      style={{
                        backgroundColor: "#F5F5F5",
                        height: "50px",
                        width: "150px",
                      }}
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
                              "deliveryDate",
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
                    name="deliveryDate"
                    className=""
                    handleChange={formik.handleChange}
                    value={
                      formik.values.deliveryDate || new Date().toISOString()
                    }
                    caption={formikCaption("deliveryDate", formik)}
                    error={formikError("deliveryDate", formik)}
                  />
                </div>
              )}
            </div>
          </div>
          <div className=" w-full px-10 py-5">
            <Button
              title="Book Now"
              className="w-full"
              handleClick={() => {
                console.log("hello");
                formik.handleSubmit();
              }}
              loading={isSubmitting}
              disabled={
                isSubmitting || !formik.isValid || !hasInValidItems(items)
              }
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
      className={cn("grid grid-cols-3 w-full ", {
        "items-center": center,
      })}
    >
      <p className="text-[14px] font-semibold "> {option}</p>
      <div className=" w-full col-span-2">{children}</div>
    </div>
  );
};

export { ExternalOrderDetailsModal };
