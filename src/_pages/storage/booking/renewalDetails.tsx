const RenewalDetails = () => {
  return (
    <div className="flex flex-col w-full my-5">
      <div className="grid grid-cols-8 justify-between p-5   uppercase  font-bold ">
        <p>Status</p>
        <p>Date CREATED</p>
        <p>Duration</p>
        <p>end date</p>
        <p>RENEWAL DATE</p>
        <p>RENEWAL TIME </p>
      </div>
      {/* <div className="grid grid-cols-8 justify-evenly p-5 items-center">
        <p className="text-green-300">Approved</p>
        <p>01/07/2023</p>
        <p>6 Months</p>
        <p>12-03-2023</p>
        <p>01/07/2023</p>
        <p>10:25am </p>
      </div> */}
    </div>
  );
};

export { RenewalDetails };
