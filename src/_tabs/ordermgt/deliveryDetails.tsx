import { Trash } from "@/icons";
import { useState } from "react";

const DeliveryDetails = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    return (
        <>
          <div
      className="grid grid-c-6 mx-5 justify-center p-5 items-center cursor-pointer"
      >
<p className="text-center">12345678</p>
<p className="text-center">MacBook Pro</p>
<p className="text-center">20 x 20KG</p>
<p className="text-center">N456,000</p>
<div className="flex items-center justify-center gap-3">
      <button className="bg-black text-white text-lg font-bold flex items-center justify-center w-10 h-10 rounded-full" onClick={handleDecrement}>-</button>
      <span className="mx-2 text-lg font-bold">{count}</span>
      <button className="bg-black text-white text-lg font-bold flex items-center justify-center w-10 h-10 rounded-full" onClick={handleIncrement}>+</button>
    </div>
<p className="flex justify-center"><Trash/></p>
    </div>
        </>
    )
}
export { DeliveryDetails };
