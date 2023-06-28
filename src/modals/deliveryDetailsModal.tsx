import React, {
  useState,
  ReactNode,
  ChangeEventHandler,
  useEffect,
} from "react";
import cn from "classnames";
import { Input, Button, Select } from "@/components";
import axios from "axios";
import dayjs from "dayjs";
import { baseURL, DashBoardRoutes } from "@/utils";
import { useSelector } from "react-redux";
import { StoreState } from "@/store/reducer";
import { formikCaption, formikError } from "@/utils";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useRouter } from "next/router";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useFormik } from "formik";
import * as Yup from "yup";
import { capitalizeText } from "@/utils/capitalizeText";

type Props = {
  show: boolean;
  data?: any;
  close: () => void;
};

enum DeliveryTimeEnum {
  IMMEDIATELY = "IMMEDIATELY",
  SET_DATE = "SET_DATE",
}

const location = ["Lagos", "Ibadan", "Abuja", "Rivers"];

function DeliveryDetailsModal({ show, data, close }: Props) {
  const [deliveryTime, setDliveryTime] = useState<DeliveryTimeEnum>();

  const [isSubmitting, setisSubmitting] = useState(false);
  const [error, setError] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      recipientName: "",
      recipientPhoneNumber: "",
      deliveryAddress: "",
      // dropOffAddress: "",
      state: "",
      deliveryLGA: null,
      // pickUpLGA: null,
      // pickUpAddress: "",
      paymentType: "",
      // contactName: "",
      // contactPhoneNumber: "",
      deliveryDate: new Date().toISOString(),
    },
    validationSchema: Yup.object({
      recipientName: Yup.string().required("Kindly fill in your name"),
      recipientPhoneNumber: Yup.string().required(
        "Kindly fill in your phone number"
      ),
      // pickUpLGA: Yup.string(),
      dropOffAddress: Yup.string().required("this is a required field"),
      // pickUpAddress: Yup.string().required("this is a required field"),
      // contactName: Yup.string().required("this is a required field"),
      // contactPhoneNumber: Yup.string().required("this is a required field"),
      deliveryLGA: Yup.string(),
      state: Yup.string(),

      deliveryAddress: Yup.string(),
      deliveryDate: Yup.date(),
      paymentType: Yup.string(),
    }),
    onSubmit: ({
      recipientName,
      recipientPhoneNumber,
      state,
      deliveryAddress,
      // pickUpLGA,
      // pickUpAddress,
      // contactName,
      // contactPhoneNumber,
      deliveryLGA,
      deliveryDate,
    }) => {
      bookOrder({
        recipientName,
        recipientPhoneNumber,
        deliveryAddress,
        // pickUpLGA,
        state,
        // pickUpAddress,
        // contactName,
        // contactPhoneNumber,
        deliveryLGA,
        deliveryDate,
      });
    },
  });

  const bookOrder = async (value: any) => {
    setisSubmitting(true);
    setError("");
    try {
      // const { data: response } = await axios.post(baseURL + "orderitems", {
      //   ...value,
      //   items,
      // });

      console.log({ ...value });
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
      <div className="rounded bg-white p-10">
        <div className="relative flex ">
          <div
            className="relative w-full h-full p-4"
            style={{ width: "600px" }}
          >
            <p
              onClick={close}
              className="absolute right-0 top-0 scale-125 cursor-pointer"
            >
              X
            </p>
            <div className="grid gap-6">
              <p className="text-center text-primary font-extrabold text-[18px]">
                Enter Delivery Details
              </p>

              <div className="grid gap-6">
                <Layout option="Recipient's Name" center={true}>
                  <Input
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
                  <Input
                    name="recipientPhoneNumber"
                    placeholder="Enter recipient's phone number"
                    type="text"
                    handleChange={formik.handleChange}
                    value={formik.values.recipientPhoneNumber}
                    caption={formikCaption("recipientPhoneNumber", formik)}
                    error={formikError("recipientPhoneNumber", formik)}
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
                {/* <Layout option="Drop off address" center={true}>
                  <Input
                    name="dropOffAddress"
                    placeholder="Drop off address"
                    type="text"
                    handleChange={formik.handleChange}
                    value={formik.values.pickUpAddress}
                    caption={formikCaption("dropOffAddress", formik)}
                    error={formikError("dropOffAddress", formik)}
                  />
                </Layout> */}
                {/* <Layout option="Drop off address" center={true}>
                  <Input name="" placeholder="Drop off address" type="text" />
                </Layout> */}
                {/* <Layout option="Delivery Location" center={true}>
                  <Select
                    name=""
                    placeholder="Select Delivery location"
                    options={location}
                  />
                </Layout> */}
                <Layout option="State" center={true}>
                  <Select
                    name="state"
                    placeholder="Select State"
                    options={location}
                    handleChange={formik.handleChange("state")}
                    value={formik.values.deliveryLGA || ""}
                    caption={formikCaption("state", formik)}
                    error={formikError("state", formik)}
                  />
                </Layout>
                <Layout option="Delivery LGA" center={true}>
                  <Select
                    name="deliveryLGA"
                    placeholder="Select Delivery LGA"
                    options={location}
                    handleChange={formik.handleChange("deliveryLGA")}
                    value={formik.values.deliveryLGA || ""}
                    caption={formikCaption("deliveryLGA", formik)}
                    error={formikError("deliveryLGA", formik)}
                  />
                </Layout>
                <Layout option="Payment Mode" center={true}>
                  {/* <div className="grid grid-cols-2 gap-4">
                  <div
                    className="flex gap-4 border-2 rounded items-center "
                    style={{ backgroundColor: "#F5F5F5", height: "50px" }}
                  >
                    <div className="mx-3 mt-1">
                      <input type="checkbox" className="pl-3 scale-150" />
                    </div>
                    <p>Pay on Delivery</p>
                  </div>

                  <div
                    className="flex gap-4 border-2 rounded  h-40 items-center"
                    style={{ backgroundColor: "#F5F5F5", height: "50px" }}
                  >
                    <div className="mx-3 mt-1 ">
                      <input type="checkbox" className="pl-3 scale-150" />
                    </div>
                    <p> Paid</p>
                  </div>
                </div> */}

                  <FormControl>
                    <RadioGroup
                      onChange={(e) =>
                        formik.setFieldValue("paymentType", e.target.value)
                      }
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      className=""
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
                        className="flex gap-4 border-2 rounded items-center "
                        style={{ backgroundColor: "#F5F5F5", height: "50px" }}
                      />
                      <FormControlLabel
                        value="payOnDelivery"
                        control={
                          <Radio
                            icon={<CheckBoxOutlineBlankIcon />}
                            checkedIcon={<CheckBoxIcon />}
                          />
                        }
                        label="payOnDelivery"
                        className="flex gap-4 border-2 rounded items-center "
                        style={{ backgroundColor: "#F5F5F5", height: "50px" }}
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
                              setDliveryTime(
                                e.target.value as DeliveryTimeEnum
                              );
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

              <div className=" w-full">
                <Button
                  title="Book Now"
                  className="w-full"
                  handleClick={() => {
                    console.log("hello");
                    formik.handleSubmit();
                  }}
                  loading={isSubmitting}
                  disabled={isSubmitting || !formik.isValid}
                  type="button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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

export { DeliveryDetailsModal };

<div className="grid grid-cols-2 gap-2">
  <Input type="date" label="Start Date" name="startDate" />
  <Input type="date" label="End Date" name="endDate" disabled />
</div>;
