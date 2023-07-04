import { Button } from "@/components";
import { useSelector } from "react-redux";
import { StoreState } from "@/store/reducer";
import { formatCurrency } from "@/utils";

const GenerateInvoice = () => {
  const { bookingDetails } = useSelector((state: StoreState) => state);
  return (
    <div className="max-w-4xl mx-6">
      <div className="bg-[#f2f2f2] p-7 rounded border-1 border-[#d9d9d9] ">
        <img
          alt="Logo"
          src="/assets/images/Renda-logo-without-tagline.svg"
          className="h-50px"
        />

        <div className="my-10">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-extrabold text-2xl my-2">Invoice number</p>
              <p>#{bookingDetails.bookingId}</p>
              <p>Invoice Date: 24 Mar 2023, 10:30am</p>
            </div>
            <div>
              <p className="text-end opacity-50 text-[11px]">Amount to pay</p>
              <div className="bg-[#C8EBFF] border-1 border-[#1B547F] font-extrabold text-2xl text-center rounded py-3 px-4 my-1">
                N {formatCurrency(bookingDetails.amount)}
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between">
            <div className="flex flex-col">
              <p></p>
            </div>
          </div> */}
        </div>
        <div className="h-full">
          <p className="my-4 opacity-60">
            Subject: Booking for storage facility
          </p>
          <div className="grid grid-cols-8 bg-primary text-white justify-between p-3 rounded-tr-lg rounded-tl-lg font-bold">
            <p className="col-span-2">Storage Name</p>
            <p>Storage Location</p>
            <p>Storage ID</p>
            <p>Storage type</p>
            <p>Storage Duration</p>
            <p>Qty</p>
            <p>Amount</p>
          </div>
          <div className="grid grid-cols-8 py-3">
            <p className="col-span-2">{bookingDetails.detail?.facility}</p>
            <p>{bookingDetails.detail?.location}</p>
            <p>#{bookingDetails.detail?.id}</p>
            <p>{bookingDetails.detail?.type}</p>
            <p>6 Months</p>
            <p>1</p>
            <p>N{formatCurrency(bookingDetails.amount)}</p>
          </div>
        </div>

        <div className="flex justify-between my-5">
          <div className="flex flex-col">
            <p>Renda’s bank details for payment </p>
            <p className="font-extrabold text-[14px]"> Bank Name: VFD</p>
            <p className="font-extrabold text-[14px]">
              Bank Account: 0017523460
            </p>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 items-center justify-end gap-4">
              <p className="text-end font-bold">Subtotal</p>
              <p className="text-[20px] font-extrabold">
                N{formatCurrency(bookingDetails.amount)}
              </p>
            </div>
            <div className="grid grid-cols-2  items-center justify-end  gap-4">
              <p className="text-end font-bold"> Total</p>
              <p className="text-[20px] font-extrabold">
                N{formatCurrency(bookingDetails.amount)}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center my-3">
          <p>CEOs signature</p>
          <p>
            <span className="font-bold"> Instruction:</span> You have 3 business
            days to make payment before your booking expires. Please enter the
            Invoice ID as the narration of the payment when making the bank
            transfer via your bank mobile app.
          </p>
        </div>
      </div>
      <div className="flex gap-5 my-5 max-w-md justify-center m-auto">
        <Button title="Download" type="primary" />
      </div>
    </div>
  );
};

export { GenerateInvoice };
