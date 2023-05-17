const OrderTable = () => {
  return (
    <table className="table-auto w-full">
      <thead className="bg-[#E7F4FF] rounded">
        <tr className="rounded">
          <th className="p-4">Order Id</th>
          <th>Number of Items</th>
          <th>Date created</th>
          <th>Delivery Location</th>
          <th>Pickup location</th>
          <th>Mode of payment</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export { OrderTable };
