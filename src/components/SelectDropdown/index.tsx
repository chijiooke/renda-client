import { FC, ChangeEventHandler } from "react";

type Props = {
  label?: string;
  options: string[];
  name?: string;
  placeholder?: string;
  handleChange?: ChangeEventHandler<HTMLSelectElement>;
};
const Select: FC<Props> = ({ label, options, handleChange, placeholder }) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor="" className="text-lg mb-1 ">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className="cursor-pointer p-5 border border-gray-300 rounded-[0.75rem]  w-full  outline-gray-300  appearance-none"
          onChange={handleChange}
        >
          <option selected disabled>
            {placeholder}
          </option>
          {options.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
        </select>
        <img
          src="/assets/images/chevron-down.svg"
          className="h-[20px] absolute right-5 top-5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export { Select };
