import { FC } from "react";
// import Button  from '@mui/base/Button';

import cn from "classnames";
import { Button as MUIbutton } from "@mui/base";
// import { Loadin as MUIButton } from "@mui/material";
// import LoadingButton from "@mui/lab/LoadingButton";

type Props = {
  handleClick?: any;
  title: string;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  fullWidth?: boolean;
};
const Button: FC<Props> = ({
  title = "",
  loading = false,
  variant = "primary",
  className = "",
  handleClick,
  size = "md",
  disabled = false,
  type = "submit",
  fullWidth = false,
}) => {
  return (
    // <button
    //   className={cn(
    //     "w-100 rounded-[0.75rem] text-white border-primary cursor-pointer border-2",
    //     {
    //       "p-5": size == "md",
    //       "p-3": size === "sm",
    //       "bg-primary ": variant == "primary",
    //       "bg-[#8DA9BF]": disabled,
    //       "rounded-lg": size == "sm",
    //       "cursor-pointer": !disabled,
    //       "cursor-not-allowed opacity-40": disabled,
    //       "bg-red-600 border-red-600": variant == "danger",
    //     },
    //     className
    //   )}
    //   onClick={handleClick}
    //   disabled={disabled}
    //   type={type}
    // >
    //   <div className="flex justify-center">
    //     <p
    //       className={cn("font-bold ", {
    //         "text-white  ": variant === "primary",
    //         "text-primary": variant === "secondary",
    //         "text-[15px]": size === "sm",
    //       })}
    //     >
    //       {title}
    //     </p>
    //     {loading && (
    //       <div className="spinner-border ms-3" role="status">
    //         <span className="sr-only">Loading...</span>
    //       </div>
    //     )}
    //   </div>
    // </button>
    <MUIbutton
      onClick={handleClick}
      disabled={disabled}
      type={type}
      className={cn(
        " rounded-[0.75rem] text-white border-primary cursor-pointer border-2  whitespace-nowrap",
        {
          "p-4": size == "md",
          "p-2": size === "sm",
          "bg-primary text-white": variant == "primary",
          "w-100": fullWidth,
          "bg-[#8DA9BF]": disabled,
          "rounded-lg": size == "sm",
          "cursor-pointer": !disabled,
          "cursor-not-allowed opacity-40": disabled,
          "bg-red-600 border-red-600": variant == "danger",
        },
        className
      )}
    >
      {title}
    </MUIbutton>
  );
};

export { Button };
