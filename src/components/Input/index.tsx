import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import cn from "classnames";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
        <label htmlFor={name} className="text-sm mb-2">
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
            "p-[13px] border border-gray-300 rounded-md  w-full  outline-gray-300 ",
            {
              "border-red outline-[border-red]": error,
              "py-2 rounded-lg": size == "sm",
            },
            inputClass
          )}
          required={required}
        />
        {type === "password" && (
          <div
            className="absolute right-5 top-3 cursor-pointer h-[20px]"
            onClick={togglePassword}
          >
            {iType === "password" ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
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
