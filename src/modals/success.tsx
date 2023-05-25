import { Fragment, FC } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@/components";

type Props = {
  show: boolean;
  close: () => void;
};
const ConfirmModal: FC<Props> = ({ show, close }) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={close}>
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

                <div className="flex mb-8 justify-center gap-7">
                  <Button
                    title="Cancel"
                    type="secondary"
                    size="sm"
                    className="px-8"
                    handleClick={close}
                  />
                  <Button title="Approve" size="sm" className="px-8" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export { ConfirmModal };
