import React, { useState } from "react";

function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "4px",
              maxWidth: "400px",
            }}
          >
            <h2>Modal</h2>
            <p>This is the modal content.</p>
            <div>
              <button onClick={closeModal}>Decline</button>
              <button onClick={closeModal}>Accept</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export { MyModal };
