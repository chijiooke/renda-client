import { Button } from "@/components";
import { DropDown } from "@/icons";
import { Notes } from "@/icons/notes";
import { DashBoardLayout } from "@/layout"
import { DeliveryDetailsModal } from "@/modals/deliveryDetailsModal";
import { DeliveryDetails } from "@/_tabs/ordermgt/deliveryDetails";
import { Menu } from "@headlessui/react";
import { useState } from "react";



export default function  DeliveryVan () {

    const [show, setShow] = useState(false);

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    
    return (
<>
<DeliveryDetailsModal
  close={() => setShow(false)}
  show={show}
 
 />

        <DashBoardLayout backAction backText="back">
   <div className="rounded border-1 border-gray-300  h-[83vh] pt-2">
          <div className="border-b-2 border-b-gray-300 p-7 flex justify-between">
           <div>
           <h1 className="text-2xl font-extrabold">Delivery Van</h1>
            <p className="text-gray-300">View all orders created from inventory</p>
           </div>
           
            <div className="mr-6 w-72" >
                <Button title="Create Order" size="sm" />
            </div>
          </div>

          <div className="flex flex-col my-6 mx-8 border-2 border-gray-300 ">
        <div className="grid grid-c-6 uppercase p-4  justify-between relative">
        <p className="text-center font-semibold">ORDERs</p>
        <p className="text-center font-semibold">SKU ID</p>
          <p className="text-center font-semibold">ITEM NAME</p>
          <p className="text-center font-semibold">SIZE</p>
          <p className="text-center font-semibold">UNIT PRICE</p>
          <p className="text-center font-semibold">QUANTITY</p>
         
        
        </div>
        <div className="px-5">

        </div>

      </div>

      <div className=" my-6 mx-8 border-2 border-gray-300 ">

        <div className="flex mx-24 uppercase p-4  justify-between ">
  
  <div className="flex gap-6">
  <div>
            <div className="mr-3 mt-1">
              <input type="checkbox" className="pl-3 scale-150" />
            </div>
          </div>
  <Notes/>
   <h1 className="font-bold text-xl" style={{ color: '#00000080' }}>Order #1</h1>
    </div> 
   <div className="flex gap-3 items-center">
    <button className="mx-3" style={{color: '#1B547F',  textDecoration: 'underline'}}  onClick={() => setShow(true)}>
        Enter Delivery details
    </button>

    <button className="" onClick={toggleVisibility}>
    <DropDown/>
    </button>
    
   </div>
  
        </div>
        {isVisible && (
     <div>
        <DeliveryDetails/>
        <DeliveryDetails/>
        <DeliveryDetails/>
        <DeliveryDetails/>
     </div>
      )}
      </div>

<div className="w-64 flex justify-end ">
<Button title="Process Order" size="sm"/>
</div>

        </div>
       
  
        </DashBoardLayout>
        </>

    );
}
