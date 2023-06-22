import { Button } from "@/components"
import { ExternalOrderDetailsModal } from "@/modals/externalDetailsModal"
import { ExternalOrderModal } from "@/modals/externalOrderModal"
import { useState } from "react"

const ExternalOrders = () => {
    let [isOpen, setIsOpen] = useState(false)
    let [showExternalDetails, setShowExternalDetails] = useState(false)
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    
    return (
        <>

<ExternalOrderModal 
         show={isOpen}
        //  data={data}\\
        onSubmit={()=> {
            setIsOpen(false)
            setShowExternalDetails(true)
        }}
         close={() => setIsOpen(false)}/>
         <ExternalOrderDetailsModal
         show={showExternalDetails}
         close={() => setShowExternalDetails(false)}
         />
        <div>
        <div className=" bg-[#E7F4FF] p-5 font-medium text-[#7A7A7A]">
            Orders from external Pickup Locations
        </div>
       <div className="flex flex-col my-6 rounded border-1 border-gray-300 ">
        <div className="grid grid-c-9 uppercase p-4  justify-between relative">
        <p className="text-center font-extrabold">ORDER ID</p>
        <p className="text-center font-extrabold">NO OF ITEMS</p>
          <p className="text-center font-extrabold">FACILITY NAME</p>
          <p className="text-center font-extrabold">FACILITY ID</p>
          <p className="text-center font-extrabold">DATE CREATED</p>
          <p className="text-center font-extrabold">RECIPIENTS NAME</p>
          <p className="text-center font-extrabold">DELIVERY LOCATION</p>
          <p className="text-center font-extrabold">MODE OF PAYMENT</p>
          <p className="text-center font-extrabold">status</p>
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

export {ExternalOrders}