import { FC, ChangeEventHandler, ChangeEvent } from "react";
import cn from "classnames";

type Props = {
  label?: string;
  options: string[];
  name?: string;
  placeholder?: string;
  handleChange?: ChangeEventHandler<HTMLSelectElement>;
  value?: string;
  error?: boolean;
  caption?: string;
  size?: "sm" | "md" | "lg";
};
const Select: FC<Props> = ({
  label,
  options,
  handleChange,
  placeholder,
  value,
  error = false,
  caption,
  size = "md",
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor="" className="text-lg mb-3 font-bold">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={cn(
            "cursor-pointer p-5 border border-gray-300 rounded-[0.75rem]  w-full  outline-gray-300  appearance-none text-gray-100",
            {
              input: !value?.trim(),
              "py-2": size === "sm",
            }
          )}
          onChange={handleChange}
          value={value}
        >
          <option selected disabled>
            {placeholder}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img
          src="/assets/images/chevron-down.svg"
          className={cn("h-[20px] absolute right-5 top-5 cursor-pointer", {
            "top-2": size === "sm",
          })}
        />
      </div>
      {error && (
        <p
          className={cn("mt-1 text-end text-[14px]", {
            "text-red-500": error,
          })}
        >
          {caption}
        </p>
      )}
    </div>
  );
};

export { Select };
