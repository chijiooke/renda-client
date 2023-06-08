import { UploadIcon } from "@/icons";
import React, { useState, useRef } from "react";

function UploadArea() {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("");

  const handleDragEnter = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleDrop = (event: {
    preventDefault: () => void;
    dataTransfer: { files: any };
  }) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    // Process the dropped files (e.g., upload or handle them)
    if (files.length > 0) {
      const uploadedFile = files[0];
      setFileName(uploadedFile.name);
      console.log(uploadedFile);
    }
    console.log(files);
  };

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: { target: { files: any } }) => {
    const files = event.target.files;
    // Process the selected files (e.g., upload or handle them)
    console.log(files);
  };

  return (
    <div
      className={`my-5 h-[300px] bg-gray-200 ${
        isDragging ? "border-2 border-blue-500" : ""
      }`}
      style={{ width: 684 }}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleDivClick}
    >
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <div className="flex flex-col items-center justify-center h-full py-10 ">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <UploadIcon />
          </div>
          {fileName ? (
            <>
              <p className="text-xs leading-tight">{fileName}</p>
              <p className="text-xs pt-4 leading-tight text-black text-opacity-50">
                Only CSV files are allowed
              </p>
            </>
          ) : (
            <>
              <p className="text-xs leading-tight">
                Click to upload or drag to upload
              </p>
              <p className="text-xs pt-4 leading-tight text-black text-opacity-50">
                Only CSV files are allowed
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export { UploadArea };
