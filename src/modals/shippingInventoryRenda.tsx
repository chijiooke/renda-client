import { ModalLayout } from "./layout";
import cn from "classnames";
import { Input, Button } from "@/components";
import { FC, ReactNode, ChangeEventHandler, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StoreState } from "@/store/reducer";
import axios from "axios";
import { baseURL } from "@/utils";
type ModalProps = {
  show: boolean;
  close: () => void;
  facilityId?: string;
};
const ShippingInventoryRendaModal: FC<ModalProps> = ({
  show,
  close,
  facilityId,
}) => {
  const { inventoryItems, user } = useSelector((state: StoreState) => state);
  const [details, setDetails] = useState({} as any);
  const [loading, setLoading] = useState(false);

  const handleDetails: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const dt = {
      ...details,
      [target.name]: target.value,
    };
    setDetails(dt);
  };

  const SubmitData = async () => {
    setLoading(true);
    const dt = {
      pickupAddress: details.pickupAddress,
      pickup_LGA: details.pickup_LGA,
      pickupState: details.pickupState,
      pickupContactName: details.pickupContactName,
      pickupContactNumber: details.pickupContactNumber,
      pickupTime: `${details.date}T${details.time}`,
    };

    try {
      const { data: inventoryData } = await axios.post(
        baseURL + "api/InventoryUpload/add-multiple-inventory",
        inventoryItems
      );
      const { data: inboundData } = await axios.post(
        baseURL +
          `api/customers/${user.customerId}/InboundInventory/inbound-request`,
        {
          customerBusinessId: user.customerId,
          deliveryDetails: {
            customerBusinessId: user.customerId,
            rendaPickUpDetails: dt,
            pickupLocation: "lagos",
            deliveryBy: "renda",
          },
          storageFacilityId: facilityId,
        }
      );
      close();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ModalLayout
      title="Shipping Inventory by Renda"
      show={show}
      close={close}
      size="lg"
    >
      <Layout option="Pickup address">
        <Input
          placeholder="enter address"
          handleChange={handleDetails}
          name="pickupAddress"
        />
      </Layout>
      <Layout option="Pickup LGA">
        <Input
          placeholder="enter pickup LGA"
          handleChange={handleDetails}
          name="pickup_LGA"
        />
      </Layout>
      <Layout option="Pickup state">
        <Input
          placeholder="enter pickup state"
          handleChange={handleDetails}
          name="pickupState"
        />
      </Layout>
      <Layout option="Pickup Date & Time">
        <div className="grid grid-cols-2 gap-2">
          <Input type="date" handleChange={handleDetails} name="date" />
          <Input type="time" handleChange={handleDetails} name="time" />
        </div>
      </Layout>
      <Layout option="Pickup Contact Name">
        <Input
          placeholder="enter contact name"
          handleChange={handleDetails}
          name="pickupContactName"
        />
      </Layout>
      <Layout option="Pickup Phone Number ">
        <Input
          placeholder="enter contact phone number"
          handleChange={handleDetails}
          name="pickupContactNumber"
        />
      </Layout>

      <Button
        title="Send"
        size="sm"
        className="py-4"
        handleClick={SubmitData}
        loading={loading}
      />
    </ModalLayout>
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

export { ShippingInventoryRendaModal };
