import { FC } from "react";

export const SettingsDataItem: FC<{
  title: string;
  value: string;
}> = ({ title, value }) => {
  return (
    <div className="mb-12">
      {" "}
      <p className=" text-gray-800 font-bold">{title}</p>
      <p className=" text-gray-500 mt-2">{value}</p>
    </div>
  );
};
