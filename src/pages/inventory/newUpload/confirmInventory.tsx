import { Button } from "@/components";
import { DashBoardLayout } from "@/layout";
import {
  ConfirmModal,
  ShippingInventoryCustomerModal,
  ShippingInventoryRendaModal,
  SomeComponent,
  StorageSelectModal
} from "@/modals";
import { StoreState } from "@/store/types/store-state.types";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";


export default function ConfirmInventory() {
  const router = useRouter();
  const { inventoryItems } = useSelector((state: StoreState) => state);
  const [showSelectStorage, setShowSelectStorage] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showShippingRenda, setShowShippingRenda] = useState(false);
  const [showShippingCustomer, setShowShippingCustomer] = useState(false);
  const [facilityId, setFacilityId] = useState("");
  return (
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
        skuId=""
        count={0}
      />
      <ShippingInventoryCustomerModal
        show={showShippingCustomer}
        close={() => setShowShippingCustomer(false)}
        facilityId={facilityId}
      />

      <DashBoardLayout backAction>
        <div className="rounded border-1 border-gray-300  h-[95%] pt-2">
          <div className="border-b-2 border-b-gray-300 p-7 flex items-center justify-between">
            <div className="inline-flex flex-col space-y-1.5 items-start justify-start">
              <p className="text-xl font-semibold leading-none">
                Inventory upload confirmation
              </p>
              <p className="text-xs font-medium leading-tight text-gray-500">
                Confirm uploaded items before processing your inventory
              </p>
            </div>
          </div>
          <div className="p-10">
            <p className="my-5 text-primary font-semibold">
              {inventoryItems.length} Items
            </p>
            <div className="flex flex-col w-full">
              <div className="grid grid-cols-8 mt-2 justify-between   p-5 border-1 border-[#bbbbbb] uppercase text-[#959595] font-bold">
                <p>ITEM NAME</p>
                <p>QTY</p>
                <p>DIMENSION</p>
                <p>COLOUR</p>
                <p>WEIGHT</p>
                <p>UNIT PRICE</p>
                <p>BRIEF DESCRIPTION</p>
                <p>IMAGE</p>
              </div>
              <SomeComponent />
            </div>

            <div className="flex max-w-sm  py-5 gap-3 flex-end justify-end w-full">
              <Button
                title="Back"
                variant="secondary"
                handleClick={() => router.back()}
              />
              <Button
                title="Confirm Items"
                handleClick={() => setShowSelectStorage(true)}
              />
            </div>
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
}
