import { DashBoardRoutes } from "@/utils";
import router, { useRouter } from "next/router";
import {
  ConfirmModal,
  MyModal,
  ShippingInventoryCustomerModal,
  ShippingInventoryRendaModal,
  SomeComponent,
  StorageSelectModal,
} from "@/modals";
import { useState } from "react";
import { Button } from "@/components";
type ItemSkuIdRowProps = {
  skuId: string;
};

const Counter = ({ skuId }: ItemSkuIdRowProps) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  const router = useRouter();
  const [showSelectStorage, setShowSelectStorage] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showShippingRenda, setShowShippingRenda] = useState(false);
  const [showShippingCustomer, setShowShippingCustomer] = useState(false);
  const [facilityId, setFacilityId] = useState("");

  return (
    // <div className="flex justify-center items-center">
    //   <div
    //     className="flex rounded-full bg-black h-4 text-white p-1 items-center"
    //     onClick={incrementCount}
    //   >
    //     +
    //   </div>
    //   <div className="flex justify-center items-center border rounded-lg border-gray-900 px-3 mx-2">
    //     <p className="flex justify-center items-center m-2 font-medium">
    //       {count}
    //     </p>
    //   </div>
    //   <div
    //     className="flex justify-center items-center"
    //     onClick={decrementCount}
    //   >
    //     <div className="flex justify-center rounded-full bg-black h-4 text-white p-1 items-center">
    //       -
    //     </div>
    //   </div>
    // </div>
    <>
      <StorageSelectModal
        show={showSelectStorage}
        onClose={() => setShowSelectStorage(false)}
        handleSubmit={(id: string) => {
          setShowSelectStorage(false);
          setShowConfirm(true);
          setFacilityId(id);
        }}
      />
      <ConfirmModal
        show={showConfirm}
        close={() => setShowConfirm(false)}
        title={
          <p className="text-[18px]">
            Confirm how you want your item(s)
            <br /> delivered to your storage facility
          </p>
        }
        acceptText="Do it myself"
        cancelText="Let Renda handle it"
        cancelAction={() => {
          setShowConfirm(false);
          setShowShippingRenda(true);
        }}
        acceptAction={() => {
          setShowConfirm(false);
          setShowShippingCustomer(true);
        }}
      />
      <ShippingInventoryRendaModal
        show={showShippingRenda}
        close={() => setShowShippingRenda(false)}
        facilityId={facilityId}
        skuId={skuId}
        count={count}
      />
      <ShippingInventoryCustomerModal
        show={showShippingCustomer}
        close={() => setShowShippingCustomer(false)}
        facilityId={facilityId}
      />
      <div className="flex gap-1">
        <Button title="Create Order" variant="secondary" size="sm" />
        <div className="flex justify-center items-center">
          <div
            className="flex rounded-full bg-black h-4 text-white p-1 items-center"
            onClick={decrementCount}
          >
            -
          </div>
          <div className="flex justify-center items-center border rounded-lg border-gray-900 px-3 mx-2">
            <p className="flex justify-center items-center m-2 font-medium">
              {count}
            </p>
          </div>
          <div
            className="flex justify-center items-center"
            onClick={incrementCount}
          >
            <div className="flex justify-center rounded-full bg-black h-4 text-white p-1 items-center">
              +
            </div>
          </div>
        </div>

        <Button
          title="Top up Stock"
          size="sm"
          handleClick={() => setShowSelectStorage(true)}
          className="py-1 px-8 text-[10px]"
        />
        {/* <div className="flex max-w-sm  py-5 gap-3 flex-end justify-end w-full">
          <Button
            title="Top up Stock"
            handleClick={() => setShowSelectStorage(true)}
          />
        </div> */}
      </div>
    </>
  );
};

export { Counter };
