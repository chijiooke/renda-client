import { FC, ChangeEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import cn from "classnames";

type Props = {
  label?: string;
  error?: boolean;
  caption?: string;
  value?: string;
  handleChange?: (
    value: string,
    data: {},
    event: ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void;
};

const PhoneNumberInput: FC<Props> = ({
  label,
  handleChange,
  error,
  caption,
  value,
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor="" className="text-lg mb-3 font-bold">
          {label}
        </label>
      )}
      <PhoneInput
      
        country={"ng"}
        inputStyle={{
          width: "100%",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          height: "100%",
        }}
        value={value}
        containerClass="items-center mr-5"
        onChange={handleChange}
      />
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

export { PhoneNumberInput };
