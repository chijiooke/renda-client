import { formatCurrency } from "@/utils";
import { FC } from "react";

type TransactionDetailsType = {
  amount: string;
  datePaid: string;
  dateTime: string;
  paymentChannel: string;
  status: string;
  transactionId: string;
};

const TransactionDetails = ({ data }: { data: any }) => {
  const {
    transactionDetails,
  }: { transactionDetails: TransactionDetailsType[] } = data || {};
  return (
    <div className="flex flex-col w-full my-5">
      <div className="grid grid-cols-7 justify-between p-5   uppercase  font-bold ">
        <p>Status</p>
        <p>Date and time PAID</p>

        <p>Transaction ID</p>
        <p>Payment channel</p>
        <p>Amount</p>
      </div>
      <div>
        {transactionDetails?.map((t: TransactionDetailsType, idx: number) => (
          <div
            key={idx}
            className="grid grid-cols-7 justify-evenly p-5 items-center"
          >
            <p>{t.status}</p>
            <p>{t.datePaid}</p>

            <p>#{t.transactionId}</p>
            <p>{t.paymentChannel}</p>
            <p>N{formatCurrency(+t.amount)} </p>
          </div>
        ))}

        {/*  <div className="grid grid-cols-8 justify-evenly p-5 items-center">
          <p className="text-red-500">Failed</p>
          <p>01/07/2023</p>
          <p>10:25am </p>
          <p>12-03-2023</p>
          <p>#RNDT123456</p>
          <p>N8,000,000 </p>
        </div> */}
      </div>
    </div>
  );
};

export { TransactionDetails };
