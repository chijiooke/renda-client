import { Button, Input, TermsAndCondition } from "@/components";

const CardPayment = () => {
  return (
    <div className="max-w-4xl">
      <div className="bg-[#f2f2f2] p-15 rounded border-1 border-[#d9d9d9] mx-6">
        <div className="bg-white rounded flex items-center py-8 px-20 gap-5 font-bold border-1 border-[#d9d9d9] justify-center">
          <p>Amount</p>
          <p className="text-3xl font-extrabold">NGN 780,000</p>
        </div>
        <div className="my-10 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-black font-bold text-[14px] text-start">
                Card Number
              </p>
              <p className="text-[12px] opacity-50">
                Enter the 16-digit card number on the card
              </p>
            </div>
            <Input />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-black font-bold text-[14px] text-start">
                CVV Number
              </p>
              <p className="text-[12px] opacity-50">
                Enter the 3 or 4 digit number on the card
              </p>
            </div>

            <Input />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-black font-bold text-[14px] text-start">
                Expiry Date
              </p>
              <p className="text-[12px] opacity-50">
                Enter the expiry date of the card
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Input /> <span className="mx-4">/</span>
              <Input />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-black font-bold text-[14px] text-start">
                4 Digit Security code
              </p>
              <p className="text-[12px] opacity-50">
                Enter your card transaction pin
              </p>
            </div>
            <Input />
          </div>
        </div>
        <Button title="Pay Now" />
      </div>
      <TermsAndCondition />
    </div>
  );
};

export { CardPayment };
