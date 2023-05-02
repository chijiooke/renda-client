import { FC, useState } from "react";
import cn from "classnames";

type HTMLInputTypeAttribute =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | "select";

type Props = {
  label?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  value?: "";
  handleChange?: VoidFunction;
  required?: boolean;
  name?: string;
};
const Input: FC<Props> = ({
  label = "",
  name = "",
  placeholder = "",
  className = "",
  required = false,
  type = "text",
}) => {
  const [iType, setIType] = useState<HTMLInputTypeAttribute>(type);
  const togglePassword = () => {
    iType === "password" ? setIType("text") : setIType("password");
    iType === "text" ? setIType("password") : setIType("text");
  };
  return (
    <div className={cn("flex flex-col", className)}>
      {label && (
        <label htmlFor={name} className="text-lg mb-1 ">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          placeholder={placeholder}
          type={iType}
          className={cn(
            "p-5 border border-gray-300 rounded-[0.75rem] bg-white w-full  outline-gray-300"
          )}
          required={required}
        />
        {type === "password" && (
          <img
            src="/assets/images/eye.svg"
            className="h-[20px] absolute right-5 top-5 cursor-pointer"
            onClick={togglePassword}
          />
        )}
      </div>
    </div>
  );
};

export { Input };
