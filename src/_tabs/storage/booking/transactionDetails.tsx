const TransactionDetails = () => {
  return (
    <div className="flex flex-col w-full my-5">
      <div className="grid grid-cols-8 justify-between p-5   uppercase  font-bold ">
        <p>Status</p>
        <p>Date PAID</p>
        <p>time paid </p>
        <p>Transaction ID</p>
        <p>Payment channel</p>
        <p>Amount</p>
      </div>
      <div>
        {/* <div className="grid grid-cols-8 justify-evenly p-5 items-center">
          <p className="text-green-300">Completed</p>
          <p>01/07/2023</p>
          <p>10:25am</p>
          <p>12-03-2023</p>
          <p>#RNDT123456</p>
          <p>N8,000,000 </p>
        </div>
        <div className="grid grid-cols-8 justify-evenly p-5 items-center">
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
