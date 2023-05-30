import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const BookStorageModal = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full max-w-md h-[300px] grid items-center
                 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <Dialog.Title as="h3">
                  <div className="text-[20px] mt-8 font-bold text-center text-gray-900">
                    Confirm Approval
                  </div>
                  <p className="text-[14px] mt-3 text-center grid items-start text-gray-300">
                    Approving a customer activates the customer's account.
                  </p>
                </Dialog.Title>
                <div className="flex mb-8 justify-center gap-3">
                  <button
                    type="button"
                    className="inline-flex w-[115px] justify-center rounded-md border border-transparent bg-[#1B547F] px-4 py-2 text-sm font-medium text-blue-100 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-[115px] justify-center rounded-md border-1 border-[#1B547F] px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Approve
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export { BookStorageModal };
