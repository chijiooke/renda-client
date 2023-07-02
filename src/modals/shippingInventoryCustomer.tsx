import { Button, Input } from "@/components";
import cn from "classnames";
import { ChangeEventHandler, FC, ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalLayout } from "./layout";

import { StoreState } from "@/store/types/store-state.types";
import { StateReducerActions } from "@/types";
import { DashBoardRoutes, baseURL } from "@/utils";
import axios from "axios";
import { useRouter } from "next/router";
import { SuccessModal } from "./success";
type ModalProps = {
  show: boolean;
  close: () => void;
  facilityId: string;
};
const ShippingInventoryCustomerModal: FC<ModalProps> = ({
  show,
  close,
  facilityId,
}) => {
  const { inventoryItems, user } = useSelector((state: StoreState) => state);
  const router = useRouter();
  const dispatch = useDispatch();
  const [details, setDetails] = useState({} as any);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleDetails: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const dt = {
      ...details,
      [target.name]: target.value,
    };
    setDetails(dt);
  };
  const closeModal = () => {
    setShowModal(false);
    dispatch({
      type: StateReducerActions.CLEAR_INVENTORY_ITEMS,
    });
    router.push(DashBoardRoutes.INVENTORY_ALL);
  };

  const SubmitData = async () => {
    setLoading(true);
    const dt = {
      companyName: details.companyName,
      contactName: details.contactName,
      driverName: details.driverName,
      estimatedTimeOfArival: `${details.date}T${details.time}`,
      driverPhoneNumber: details.driverPhoneNumber,
    };
    try {
      const { data: inboundData } = await axios.post(
        baseURL +
          `api/customers/${user?.customerId}/InboundInventory/inbound-request`,
        {
          customerBusinessId: user?.customerId,
          deliveryDetails: {
            customerBusinessId: user?.customerId,
            customerDeliveryDetails: dt,
            pickupLocation: "lagos",
            deliveryBy: "customer",
          },
          storageFacilityId: facilityId,
          inventoryItems,
        }
      );
      close();
      setShowModal(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <SuccessModal
        show={showModal}
        close={closeModal}
        details="Inbound request has been created. Email has been sent to customer."
      />
      <ModalLayout
        title=" Shipping inventory by customer’s delivery company"
        show={show}
        close={close}
        size="lg"
      >
        <Layout option="Sender’s Contact name">
          <Input
            placeholder="Enter Sender’s Contact name"
            handleChange={handleDetails}
            name="contactName"
          />
        </Layout>
        <Layout option="Sender’s Contact Phone No">
          <Input
            placeholder="Enter sender’s contact phone no"
            //   handleChange={handleDetails}
          />
        </Layout>
        <Layout option="Delivery company name ">
          <Input
            placeholder="enter your company name"
            handleChange={handleDetails}
            name="companyName"
          />
        </Layout>
        <Layout option="Driver’s name ">
          <Input
            placeholder="name"
            handleChange={handleDetails}
            name="driverName"
          />
        </Layout>
        <Layout option="Driver’s phone no. ">
          <Input
            placeholder="phone number"
            handleChange={handleDetails}
            name="driverPhoneNumber"
          />
        </Layout>
        <Layout option="Estimated Time of Arrival">
          <div className="grid grid-cols-2 gap-2">
            <Input type="date" handleChange={handleDetails} name="date" />
            <Input type="time" handleChange={handleDetails} name="time" />
          </div>
        </Layout>

        <Button
          title="Send"
          size="sm"
          className="py-4"
          handleClick={SubmitData}
          loading={loading}
        />
      </ModalLayout>
    </>
  );
};

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
      className={cn("grid grid-cols-3 w-full gap-5 ", {
        "items-center": center,
      })}
    >
      <p className="text-[14px] font-semibold "> {option}</p>
      <div className=" w-full col-span-2">{children}</div>
    </div>
  );
};

export { ShippingInventoryCustomerModal };
