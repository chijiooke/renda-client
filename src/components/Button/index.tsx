import { FC } from "react";

import cn from "classnames";

type Props = {
  handleClick?: any;
  title: string;
  className?: string;
  type?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
};
const Button: FC<Props> = ({
  title = "",
  loading = false,
  type = "primary",
  className = "",
  handleClick,
}) => {
  return (
    <button
      className={cn(
        "w-100 p-5 rounded-[0.75rem] text-white border-primary cursor-pointer",
        className,
        {
          "bg-primary ": type == "primary",
        }
      )}
      onClick={handleClick}
    >
      <div className="flex justify-center">
        <p
          className={cn("font-bold sm:text-[17px]", {
            "text-white  ": type === "primary",
            "text-primary": type === "secondary",
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
