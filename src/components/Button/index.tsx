import { FC } from "react";

import cn from "classnames";

type Props = {
  handleClick?: any;
  title: string;
  className?: string;
  type?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
};
const Button: FC<Props> = ({
  title = "",
  loading = false,
  type = "primary",
  className = "",
  handleClick,
  size = "md",
  disabled = false,
}) => {
  return (
    <button
      className={cn(
        "w-100 rounded-[0.75rem] text-white border-primary cursor-pointer border-2",
        {
          "p-5": size == "md",
          "p-3": size === "sm",
          "bg-primary ": type == "primary",
          "bg-[#8DA9BF]": disabled,
          "rounded-lg": size == "sm",
          "cursor-pointer": !disabled,
          "cursor-not-allowed opacity-40": disabled,
        },
        className
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      <div className="flex justify-center">
        <p
          className={cn("font-bold ", {
            "text-white  ": type === "primary",
            "text-primary": type === "secondary",
            "text-[15px]": size === "sm",
          })}
        >
          {title}
        </p>
        {loading && (
          <div className="spinner-border ms-3" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </button>
  );
};

export { Button };
