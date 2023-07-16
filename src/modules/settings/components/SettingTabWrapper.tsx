import React, { FC, ReactNode } from "react";

export const SettingTabWrapper: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="rounded border-1 border-gray-300  mt-3 bg-slate-300" style={{backgroundColor:'#FBFBFB'}}>
      <div className="border-b-2 border-b-gray-300  p-7">
        {" "}
        <h3 className="text-lg font-extrabold">{title}</h3>
      </div>
      <div className="p-7 ">{children}</div>
    </div>
  );
};
