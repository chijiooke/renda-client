import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
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
  value?: string | number;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  name?: string;
  error?: boolean;
  caption?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  inputClass?: string;
  id?: string;
  defaultValue?: any;
};
const Input: FC<Props> = ({
  label = "",
  name,
  placeholder = "",
  className = "",
  required = false,
  type = "text",
  value,
  handleChange,
  error = false,
  caption = "",
  size = "md",
  disabled = false,
  inputClass,
  id,
  defaultValue,
}) => {
  const [iType, setIType] = useState<HTMLInputTypeAttribute>(type);
  const togglePassword = () => {
    iType === "password" ? setIType("text") : setIType("password");
    iType === "text" ? setIType("password") : setIType("text");
  };
  return (
    <div className={cn("flex flex-col mb-3", className)}>
      {label && (
        <label htmlFor={name} className="text-lg mb-3 font-bold">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          defaultValue={defaultValue}
          name={name}
          placeholder={placeholder}
          type={iType}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          id={id}
          className={cn(
            "p-3 border border-gray-300 rounded-[0.75rem]  w-full  outline-gray-300 ",
            {
              "border-red outline-[border-red]": error,
              "py-2 rounded-lg": size == "sm",
            },
            inputClass
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
    </div>
  );
};

export { Input };
