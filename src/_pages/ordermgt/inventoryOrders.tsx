import { Button } from "@/components";
import cn from "classnames";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CreateOrderModal } from "@/modals/createordermodal";


const InventoryOrders = () => {

    let [isOpen, setIsOpen] = useState(false)
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    return (
       <>

       <CreateOrderModal 
         show={isOpen}
        //  data={data}
         close={() => setIsOpen(false)}/>

       <div>
        <div className=" bg-[#E7F4FF] p-5 font-medium text-[#7A7A7A]">
            Orders from your Renda storage
        </div>
       <div className="flex flex-col my-6 rounded border-1 border-gray-300 ">
        <div className="grid grid-c-9 uppercase p-4  justify-between relative">
        <p className="text-center">ORDER ID</p>
        <p className="text-center">NO OF ITEMS</p>
          <p className="text-center">FACILITY NAME</p>
          <p className="text-center">FACILITY ID</p>
          <p className="text-center">DATE CREATED</p>
          <p className="text-center">RECIPIENTS NAME</p>
          <p className="text-center">DELIVERY LOCATION</p>
          <p className="text-center">MODE OF PAYMENT</p>
          <p className="text-center">status</p>
          <div>
            <div className="absolute top-5  ">
              <input type="checkbox" className="pl-3 scale-150" />
            </div>
          </div>
        </div>
        <div className="px-5">

        </div>

      </div>


      <div className="grid justify-center mt-40 mb-40">
                <p className="flex justify-center mb-6">You have no order</p>
                <Button size="sm" title="Create order from inventory"
                handleClick={openModal}
                />
            </div>
       </div>
       </>

    )
}


  

export {InventoryOrders}