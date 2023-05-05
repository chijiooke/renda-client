import { FC } from "react";
import cn from "classnames";
type Props = {
  value: number;
  title: string;
  type?: "primary" | "secondary";
  number?: boolean;
  percentage?: boolean;
  className?: string;
};

const OrderCard: FC<Props> = ({
  value,
  title,
  type = "primary",
  number = true,
  percentage = false,
  className,
}) => {
  const val = !number
    ? "N" + value.toLocaleString()
    : percentage
    ? value + "%"
    : "" + value;
  return (
    <>
      {type == "primary" && (
        <div
          className={cn(
            "p-3 flex gap-10 rounded border-2  border-gray-300 w-full",
            className
          )}
        >
          <p className="pr-10 font-extrabold text-3xl">{val}</p>
          <p className="text-end capitalize text-[14px] text-[#5F6980]">
            {" "}
            {title}
          </p>
        </div>
      )}
      {type == "secondary" && (
        <div className="border-2 p-3 flex flex-col gap-5 rounded w-full row-span-2">
          <p className="pr-10 font-extrabold text-3xl">{val}</p>
          <p className=" capitalize text-[14px] text-[#5F6980]"> {title}</p>
          <div className="flex items-center gap-4 ">
            <span className="bg-red-100 rounded text-red-700 px-7 py-1 w-10 flex place-content-center font-bold">
              0%
            </span>{" "}
            <span className="text-[#9D9FA1] font-extrabold">From 0</span>
          </div>
        </div>
      )}
    </>
  );
};

export { OrderCard };
