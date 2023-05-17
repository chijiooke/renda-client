import { FC, useState, useEffect, SetStateAction } from "react";
import cn from "classnames";

type Props = {
  title: string;
  className?: string;
  multiple?: boolean;
  handleChange?: SetStateAction<any>;
  value: File[];
};
const FileInput: FC<Props> = ({
  title = "",
  className,
  multiple = true,
  handleChange,
  value,
}) => {
  const [files, setFiles] = useState<File[]>(value);
  const onFilesSelected = (e: { target: HTMLInputElement }) => {
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;
    const filesArr = [];
    for (let file of Array.from(files)) {
      filesArr.push(file);
    }
    setFiles(filesArr);
  };
  const removeFile = (index: number) => {
    const filesArr = [...files];
    filesArr.splice(index, 1);
    setFiles(filesArr);
  };
  useEffect(() => {
    handleChange(files);
  }, [files]);
  return (
    <>
      {files && files.length === 0 && (
        <div className={cn("flex flex-col my-4 ", className)}>
          <label className="text-[16px] pb-2">{title}</label>
          <div className="relative">
            <div className="bg-white  flex justify-center flex-col text-center cursor-pointer border-dotted border-2 border-[text-primary] outline-none p-8">
              <img src="/assets/images/upload.svg" className="h-[20px]" />
              <p className="text-black lg:text-red-300">
                {" "}
                <span className="font-bold">Click to upload </span>or drag to
                upload{" "}
              </p>
            </div>
            <input
              onChange={onFilesSelected}
              className="absolute w-full h-full top-0 bottom-0 opacity-0 cursor-pointer"
              type="file"
              multiple={multiple}
            />
          </div>
        </div>
      )}
      {files && files.length > 0 && (
        <div className="my-5 flex flex-col ">
          <label className="text-[16px] pb-1 fon-bold">{title}</label>
          <div className="bg-white rounded w-100 flex border-primary  border-3 p-8">
            <img src="/assets/images/file.svg" className="h-[30px] mr-3" />
            <div className="w-100">
              {files.map((file, index) => (
                <div className="w-100" key={index}>
                  <p className="text-black text-[14px]">{file.name}</p>
                  <div className="flex items-center">
                    <span className="rounded bg-primary w-full h-[5px] mr-1"></span>
                    <span className="flex items-center p-0 h-full">100%</span>
                    <img
                      onClick={() => removeFile(index)}
                      src="/assets/images/trash.svg"
                      className="h-[20px] cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { FileInput };
