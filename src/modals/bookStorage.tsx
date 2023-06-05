import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
const BookStorageModal = ({ show }: { show?: boolean }) => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <main className="h-screen w-screen backdrop-blur-lg bg-black-200/30 place-items-center z-30 fixed grid -top-0 right-0 bottom-0">
      <motion.article
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-[30px] flex flex-col items-center  w-80 md:w-96 py-16 relative px-5 shadow-lg"
        style={{
          boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.09)",
        }}
      >
        <h1>jhgfd</h1>
      </motion.article>
    </main>
  );
};

export { BookStorageModal };
