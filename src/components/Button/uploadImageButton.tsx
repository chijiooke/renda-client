import React, { useState, ChangeEvent } from "react";

function UploadImageButton() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file || null);
    // Perform additional logic for image upload, such as sending it to the server
  };

  const divClassName = selectedImage
    ? "justify-start  px-3 bg-white border rounded-md border-black border-opacity-25"
    : "flex justify-center items-center text-white px-3  border rounded-md border-black border-opacity-25";

  return (
    <label
      htmlFor="upload-input"
      className={divClassName}
      style={{ backgroundColor: `#1B547F` }}
    >
      Upload
      <input
        id="upload-input"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      {selectedImage && <p>{selectedImage.name}</p>}
    </label>
  );
}

export { UploadImageButton };
