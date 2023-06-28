import { Button, TermsAndCondition } from "@/components";

const BankTransfer = () => {
  return (
    <div className="max-w-2xl">
      <div className="bg-[#f2f2f2] p-15 rounded border-1 border-[#d9d9d9] mx-6">
        <div className="bg-white rounded flex items-center py-8 px-20 gap-5 font-bold border-1 border-[#d9d9d9] justify-center">
          <p>Amount</p>
          <p className="text-3xl font-extrabold">NGN 780,000</p>
        </div>
        <p className="opacity-50 italic my-2">
          Make a one time bank transfer to this account{" "}
        </p>
        <div className="my-10">
          <div className="grid grid-cols-2 my-3 items-center">
            <p className="text-1xl font-semibold">Bank Name</p>
            <p className="font-extrabold text-2xl">Polaris Bank</p>
          </div>
          <div className="grid grid-cols-2 my-3 items-center">
            <p className="text-1xl font-semibold">Account Name</p>
            <p className="font-extrabold text-2xl">Renda</p>
          </div>
          <div className="grid grid-cols-2 my-3 items-center">
            <p className="text-1xl font-semibold">Account Number</p>
            <p className="font-extrabold text-2xl">0019823430</p>
          </div>
        </div>
        <div className="my-10 flex items-center gap-6">
          <span className="bg-[#d9d9d9] p-7 rounded-full" />
          <p className="text-[#d9d9d9]">Expires in 18:32</p>
        </div>
        <Button title="I’ve sent the money" />
      </div>
      <TermsAndCondition />
    </div>
  );
};

export { BankTransfer };
